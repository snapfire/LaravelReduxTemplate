import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import eslint from 'vite-plugin-eslint'

export default defineConfig({
    plugins: [
        eslint(),
        laravel({
            input: ['resources/js/index.tsx'],
            refresh: true,
        }),
    ],
});
