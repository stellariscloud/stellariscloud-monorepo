import { patchNestjsSwagger } from '@anatine/zod-nestjs'
import { PluginMetadataGenerator } from '@nestjs/cli/lib/compiler/plugins/plugin-metadata-generator'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ReadonlyVisitor } from '@nestjs/swagger/dist/plugin'
import * as fs from 'fs'
import * as path from 'path'
import { CoreModule } from 'src/core/core.module'

const generator = new PluginMetadataGenerator()

async function main() {
  const app = await NestFactory.create(CoreModule, { preview: true })

  generator.generate({
    visitors: [
      new ReadonlyVisitor({
        introspectComments: true,
        pathToSource: __dirname,
        classValidatorShim: false,
      }),
    ],
    outputDir: __dirname,
    printDiagnostics: true,
    tsconfigPath: 'tsconfig-generate-metadata.json',
    filename: '../src/nestjs-metadata.ts',
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-member-access
  const metadata = require('../src/nestjs-metadata').default

  // necessary to integrate nestjs-zod with swagger such that
  // all the zod infered DTOs are included in the openapi spec
  patchNestjsSwagger()

  await SwaggerModule.loadPluginMetadata(
    metadata as unknown as () => Promise<Record<string, unknown>>,
  )
  const options = new DocumentBuilder()
    .setOpenAPIVersion('3.1.0')
    .setTitle('@stellariscloud/api')
    .setDescription('The Stellaris Cloud core API')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, options, {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  })

  fs.writeFileSync(
    path.join(__dirname, '..', 'src', './openapi.json'),
    JSON.stringify(document, null, 2),
  )

  // eslint-disable-next-line no-console
  console.log('Generated OpenAPI spec:', JSON.stringify(document, null, 2))

  // for some reason the metadata generation (when run) stops this script from exiting automatically
  process.exit(0)
}

void main()
