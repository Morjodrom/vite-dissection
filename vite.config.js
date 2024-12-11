import {defineConfig} from 'vite';
import {resolve} from 'path';

export default defineConfig({
	publicDir: resolve(__dirname, 'public'), // the same as default value
	build: {
		assetsInlineLimit: 4096,
		rollupOptions: {
			output: {
				assetFileNames: function(assetInfo) {
					let assetNameUppercased = assetInfo.name
						.replace(/\.\w+?$/, '')
						.toUpperCase();
					return 'assets/path/' + assetNameUppercased + '[extname]'
				}
			}
		}
	}
});