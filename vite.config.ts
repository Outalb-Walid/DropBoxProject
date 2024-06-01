import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		headers: {
			'Cross-Origin-Embedder-Policy': 'unsafe-none'
		}
	},
	plugins: [sveltekit()]
});
