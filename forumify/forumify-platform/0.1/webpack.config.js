const Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
  Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')

  /*
   * ENTRY CONFIG
   */
  .addEntry('frontend', './assets/frontend.js')
  .addEntry('admin', './assets/admin.js')
  .splitEntryChunks()
  .enableStimulusBridge('./assets/controllers.json')
  .enableSingleRuntimeChunk()

  /*
   * FEATURE CONFIG
   */
  .cleanupOutputBeforeBuild()
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
  .configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = '3.23';
  })
  .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
