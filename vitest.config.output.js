import {defineConfig} from 'vitest/config';

export default defineConfig({
	test: {
		reporters: ['verbose', 'json', 'html'],
		outputFile: {
			json: './test-reports/results.json',
			html: './test-reports/html/results.html',
		}
	}
})