import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
	build: {
		assetsInlineLimit: 4096,
	}
});