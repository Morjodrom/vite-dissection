import {defineConfig} from 'vite';

export default defineConfig({
	base: '/dynamic/',
	resolve: {
		alias: [
			{
				find: /initial\.js/,
				replacement: 'replacement.js'
			}
		]
	},
	build: {
		outDir: './www/dynamic/',
		rollupOptions: {
			input: {
				main: './index.html',
				about: './about/index.html'
			}
		}
	}
})