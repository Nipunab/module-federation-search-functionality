module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage', // alternative mode: "entry"
        corejs: 3, // default would be 2
      },
    ],
  ],
};
