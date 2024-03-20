/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				display: ['Mont'],
			},
			colors: {
				primary: 'hsl(var(--primary) / <alpha-value>)',
				accent: 'hsl(var(--accent) / <alpha-value>)',
				surface: 'hsl(var(--surface) / <alpha-value>)',
				'surface-10': 'hsl(var(--surface-10) / <alpha-value>)',
				'surface-20': 'hsl(var(--surface-20) / <alpha-value>)',
				'surface-30': 'hsl(var(--surface-30) / <alpha-value>)',
				'surface-40': 'hsl(var(--surface-40) / <alpha-value>)',
				'surface-50': 'hsl(var(--surface-50) / <alpha-value>)',
				'surface-60': 'hsl(var(--surface-60) / <alpha-value>)',
				'surface-70': 'hsl(var(--surface-70) / <alpha-value>)',
				'surface-80': 'hsl(var(--surface-80) / <alpha-value>)',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
