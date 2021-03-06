module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest'],
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: 'tsconfig.json',
    },
    extends: [
        'eslint:recommended',
        'plugin:eslint-comments/recommended',
        'plugin:jest/recommended',
    ],
    overrides: [
        // {
        //   files: ['*.js'],
        //   rules: {},
        // },
        {
            files: ['*.ts'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/eslint-recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:@typescript-eslint/recommended-requiring-type-checking',
                'prettier/@typescript-eslint',
                'plugin:jest/recommended',
            ],
            rules: {
                '@typescript-eslint/no-use-before-define': 'off',
                '@typescript-eslint/no-non-null-assertion': 'off',
                'no-useless-escape': 'off',
                '@typescript-eslint/interface-name-prefix': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
            },
        },
    ],
};