System.import('systemjs-hot-reloader').then(HotReloader => {
  System.hotReloader = new HotReloader.default('http://localhost:5776/'); // TODO: move port to /clientConfig
  System.hotReloader.on('error', (res)=> console.warn('HR error', res));
  System.hotReloader.on('allReimported', (modulePaths)=> {
    appendBody('HR: all imported')
  });
  System.hotReloader.on('change', function (changedModulePath) {
    appendBody('HR change: ', changedModulePath);
  })
});