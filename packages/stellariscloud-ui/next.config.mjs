/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef
const APP_ENV = process.env.NEXT_PUBLIC_BACKEND_ENV || 'live'

import dotenv from 'dotenv'

dotenv.config({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-base-to-string
  path: `./config/.env.${APP_ENV}`,
})

const env = {}

// eslint-disable-next-line no-undef
Object.keys(process.env).forEach((key) => {
  if (key.startsWith('NEXT_PUBLIC_')) {
    // eslint-disable-next-line no-undef
    env[key] = process.env[key]
  }
})

const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    child-src 'self';
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src 'self' blob: data:;
    connect-src *;
    font-src 'self' data:;
    frame-src 'self' *.stellariscloud.localhost:*;
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  // {
  //   key: 'X-Content-Type-Options',
  //   value: 'nosniff',
  // },
  // // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  // {
  //   key: 'X-DNS-Prefetch-Control',
  //   value: 'on',
  // },
  // // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  // {
  //   key: 'Strict-Transport-Security',
  //   value: 'max-age=31536000; includeSubDomains; preload',
  // },
  // // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  // {
  //   key: 'Permissions-Policy',
  //   value: 'camera=(), microphone=(), geolocation=()',
  // },
]

export default {
  transpilePackages: [
    '@stellariscloud/types',
    '@stellariscloud/utils',
    '@stellariscloud/auth-utils',
  ],
  reactStrictMode: false,
  experimental: {
    externalDir: false,
    esmExternals: true,
  },
  webpack: (config) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { typescript: true } }],
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config
  },
  env,
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
