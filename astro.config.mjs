// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';

// https://astro.build/config
export default defineConfig({
	site: 'https://zenith-framework.github.io/',
	integrations: [
		starlight({
			title: 'Zenith Framework',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/zenith-framework/zenith' }],
			sidebar: [
				{
					label: 'Introduction',
					slug: 'introduction',
				},
				{
					label: 'Quick start',
					slug: 'quick-start',
				},
				{
					label: 'Orbs & injection',
					slug: 'orbs-injection',
				},
				{
					label: 'Systems',
					slug: 'systems',
				},
			],
			plugins: [ion()],
			customCss: ['./src/styles/global.css'],
		}),
	],
});
