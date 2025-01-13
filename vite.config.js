import {defineConfig} from 'vite';

export default defineConfig({
	base: '/dynamic/',
	resolve: {
		alias: {
			'./initial.js': './replacement.js'
		}
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