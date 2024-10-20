module.exports = {
	base: '/',
	postcss: {
		plugins: [
			require('css-prefers-color-scheme/postcss'),
		]
	},
	title: 'OpenMinetopia Documentation',
	description: 'Documentatie voor de Open Source Minetopia Plugin!',
	head: [
		['link', { rel: 'icon', href: '/logo.png' }]
	],
	theme: "yuu",
	themeConfig: {
        yuu: {
			defaultDarkTheme: true,
		},
		logo: '/logo.png',
		nav: [
			{ text: 'Discord', link: 'https://discord.gg/rfDp4RgZRD' }
		],
		sidebar: [
			{
				title: 'OpenMinetopia',
				collapsable: false,
				children: [
					'/'
				]
			},
			{
				title: 'Functies',
				collapsable: false,
				children: [
					'/features/banking',
					'/features/chat',
					'/features/color',
					'/features/detectiepoortjes',
                    '/features/levels'
				]
			}
		]
	}
}