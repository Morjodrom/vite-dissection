import {defineConfig} from 'vite';

export default defineConfig({
	base: '/dynamic',
	server: {
		origin: 'http://localhost:5173'
	},
	build: {
		outDir: './www/dynamic/',
		manifest: true,
		rollupOptions: {
			input: {
				main: './modules/main.js'
			}
		}
	}
})