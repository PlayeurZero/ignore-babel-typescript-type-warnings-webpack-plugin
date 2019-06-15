const ModuleDependencyWarning = require("webpack/lib/ModuleDependencyWarning");

/**
 * @see https://github.com/TypeStrong/ts-loader/issues/653#issuecomment-390889335
 */
class IgnoreBabelTypescriptTypeWarnings {
  apply(compiler) {
    const messageRegExp = /export '(I.*)'( \(reexported as 'I(.*)'\))? was not found in/;

    const doneHook = (stats) => {
      stats.compilation.warnings = stats.compilation.warnings.filter(function(
        warn
      ) {
        if (
          warn instanceof ModuleDependencyWarning &&
          messageRegExp.test(warn.message)
        ) {
          return false;
        }
        return true;
      });
    };

    if (compiler.hooks) {
      compiler.hooks.done.tap("IgnoreBabelTypescriptTypeWarnings", doneHook);
    } else {
      compiler.plugin("done", doneHook);
    }
  }
}

module.exports = IgnoreBabelTypescriptTypeWarnings;
