Package.describe({
  summary: "Provides bootstrap 3.1.1 with flatly theme."
});

Package.on_use(function (api) {
  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-3');
  api.add_files(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.add_files(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

});
