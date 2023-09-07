module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ["./src/"],
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@routes": "./src/routes",
            "@theme": "./src/theme",
          }
        }
    
      ]
    ]
  };
};
