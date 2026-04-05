import adapter from '@sveltejs/adapter-auto';

const config = {
  compilerOptions: {
    runes: false
  },
  kit: {
    adapter: adapter()
  }
};

export default config;