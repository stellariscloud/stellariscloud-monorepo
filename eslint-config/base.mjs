import eslintImport from 'eslint-plugin-import'
import eslintComments from 'eslint-plugin-eslint-comments'
import eslintPromise from 'eslint-plugin-promise'
import eslintSimpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintTs from '@typescript-eslint/eslint-plugin'
import stylisticTs from '@stylistic/eslint-plugin-ts'
import eslintPrettier from 'eslint-plugin-prettier'

export default {
  rules: {
    'arrow-parens': ['error', 'always'],
    semi: ['error', 'never'],
    'array-callback-return': 'error',
    curly: 'error',
    'default-param-last': 'error',
    eqeqeq: ['error', 'smart'],
    'eslint-comments/no-unused-disable': 'error',
    'new-parens': 'error',
    'no-console': 'warn',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implied-eval': 'error',
    'no-lonely-if': 'error',
    'no-loss-of-precision': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector:
          "ImportDeclaration[importKind!='type'][source.value='@sentry/browser']",
        message:
          'Use the CDN hosted Sentry SDK instead of the NPM package. See https://docs.sentry.io/platforms/javascript/install/cdn/.',
      },
    ],
    'no-return-assign': 'error',
    'no-shadow': 'error',
    'no-throw-literal': 'error',
    'no-unexpected-multiline': 'off',
    'no-unused-expressions': 'error',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'object-shorthand': 'error',
    'prefer-promise-reject-errors': 'error',
    'promise/always-return': 'off',
    'promise/catch-or-return': 'error',
    'promise/no-callback-in-promise': 'off',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/valid-params': 'error',
    radix: 'error',
    'simple-import-sort/imports': 'error',
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/class-literal-property-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'default-param-last': 'off',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@stylistic/ts/member-delimiter-style': [
      'error',
      { multiline: { delimiter: 'none' } },
    ],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-confusing-void-expression': [
      'error',
      { ignoreArrowShorthand: true },
    ],
    '@typescript-eslint/no-dupe-class-members': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-invalid-this': 'error',
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    'no-loss-of-precision': 'off',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': [
      'error',
      { ignoreDeclarationMerge: true },
    ],
    '@typescript-eslint/no-require-imports': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-throw-literal': 'off',
    '@/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-use-before-define': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/return-await': ['error', 'in-try-catch'],
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@stylistic/ts/type-annotation-spacing': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
  plugins: {
    'eslint-comments': eslintComments,
    promise: eslintPromise,
    'simple-import-sort': eslintSimpleImportSort,
    '@typescript-eslint': eslintTs,
    '@stylistic/ts': stylisticTs,
    import: eslintImport,
    prettier: eslintPrettier,
  },
}
