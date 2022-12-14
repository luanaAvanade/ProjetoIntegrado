module.exports = {
	extends: 'airbnb',
	parser: 'babel-eslint',
	env: {
		jest: true,
		browser: true
	},
	rules: {
		'no-use-before-define': 'off',
		'react/prefer-stateless-function': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-filename-extension': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-indent': 'off',
		'react/prop-types': 'off',
		'comma-dangle': 'off',
		'no-param-reassign': 'off',
		'object-curly-newline': 'off',
		'space-before-function-paren': 'off',
		'linebreak-style': 'off',
		'operator-linebreak': 'off',
		'implicit-arrow-linebreak': 'off',
		'no-underscore-dangle': 'off',
		'no-lonely-if': 'off',
		'jsx-quotes': 'off',
		'arrow-body-style': 'off',
		'import/prefer-default-export': 'off',
		'react/no-array-index-key': 'off',
		'react/no-unused-state': 'off',
		'react/jsx-wrap-multilines': 'off',
		'no-plusplus': 'off',
		'no-undef': [
			'error',
			{ typeof: true }
		],
		'react/jsx-no-undef': [
			2,
			{ allowGlobals: false }
		],
		indent: 'off',
		'func-names': [
			'error',
			'as-needed'
		],
		'no-console': 'off',
		'no-tabs': [
			'error',
			{ allowIndentationTabs: true }
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'arrow-parens': [
			'error',
			'as-needed'
		]
	},
	settings: {
		'import/resolver': {
			'babel-plugin-root-import': {
				rootPathPrefix: '$',
				rootPathSuffix: './src'
			}
		}
	},
	globals: {
		fetch: false,
		navigator: true,
		document: false,
		screen: false,
		isNaN: false
	}
};
