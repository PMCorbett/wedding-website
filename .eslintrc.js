module.exports = {
  extends: ['crowdlab', 'plugin:flowtype/recommended'],
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  rules: {
    'jsx-a11y/label-has-for': [
      2,
      {
        required: {
          every: ['id'],
        },
      },
    ],
  },
};
