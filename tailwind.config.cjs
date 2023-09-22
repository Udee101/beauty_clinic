/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Judson: ['Judson']
			},
			maxWidth: {
				custom: '1200px'
			},
			colors: {
				'primary-brown': '#2F201A',
				'primary-yellow': '#E9D415',
				'blur-yellow': '#F6ECD7',
				'primary-grey': '#EBEBEB',
				'secondary-grey': '#525252'
			}
		},
	},
	plugins: [],
}
