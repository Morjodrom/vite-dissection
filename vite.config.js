import {defineConfig} from 'vite';

export default defineConfig({
	base: '/dynamic/',
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