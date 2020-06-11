import { Configuration } from '@nuxt/types';

const config: Configuration = {
  srcDir: 'src',
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['assets/main.css'],
  buildModules: [
    '@nuxt/typescript-build',
    ['@nuxtjs/stylelint-module', { fix: true }],
    ['@nuxtjs/eslint-module', { fix: true }],
  ],
  modules: ['@nuxtjs/dotenv'],
};

export default config;
