var _ = require('lodash');

function camelCase(str) {
  return str.replace(/-([a-z])/g, function (m, w) {
    return w.toUpperCase();
  });
}

module.exports = function(plugins) {
  return _.map(plugins, function(name) {
    var pluginName = name;
    var variableName = name;

    // if name starts with gulp-
    var gulpName = variableName.match(/gulp-([a-z\-]+)/);

    if (gulpName) {
      variableName = gulpName[1];
    }

    return {
      variableName: camelCase(variableName),
      plugin: pluginName
    };
  });
};
