module.exports = {
  purge: [
    './src/components/Form/Form.js',
    './src/components/Form/index.css',
    './src/components/Form/styles.js',
    './src/components/Posts/Posts.js',
    './src/components/Posts/styles.js',
    './src/components/Posts/index.css',
    './src/components/Posts/Post/Posts/Post.js',
    './src/components/Posts/Post/Posts/styles.js',
    './src/components/Posts/Post/index.css',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      
    },
  },
  variants: {
    extend: {
      blur:["hover"],
    },
  },
  plugins: [],
}
