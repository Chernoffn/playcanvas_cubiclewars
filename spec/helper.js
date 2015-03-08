if (typeof(window.app) === "undefined") {
  window.app = (function() {
    var canvas = document.createElement("canvas");
    var app = new pc.Application(canvas, {});
  
    var scripts = {};
    pc.script.on("created", function(componentName, initializer) {
      scripts[componentName] = initializer;
    });
    app.mouse = new pc.Mouse(canvas);
    var testApp = Object.create(app);
    testApp.canvas = canvas;
    testApp.getConstructor = function(name) {
      return scripts[name](app);
    };
    return testApp
  }());
}
