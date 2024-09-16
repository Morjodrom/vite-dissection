import {defineConfig} from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: ['./modules/main.ts', './modules/secondary.ts'],
			name: 'LibName'
		}
	}
})