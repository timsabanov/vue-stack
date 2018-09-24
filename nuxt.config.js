module.exports = {
	mode: 'spa',
	head: {
		title: 'Vue Stack',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' }
		],
		link: [
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
			{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
		]
	},
	plugins: [
		'~/plugins/vuetify.js',
		'~/plugins/axios.js'
	],
	css: [
		'vuetify/dist/vuetify.min.css'
	],
	loading: {
		color: '#FF0000'
	}
}