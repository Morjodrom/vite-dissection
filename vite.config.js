import { defineConfig } from 'vite';
import {resolve} from 'path';

export default defineConfig({
	resolve: {
		alias: {
			'$aliased': resolve(__dirname, './modules/aliased'),
			'$tsAliased': resolve(__dirname, './modules/aliased')
		}
	}
});