import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: true,
	// prerender: ['/*?'], // SSR kapalıyken prerender devre dışı
} satisfies Config;
