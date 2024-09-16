import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
	publicDir: resolve(__dirname, 'public'), // the same as default value
	build: {
		assetsInlineLimit: 4096,
	}
});