if (typeof(window.test) === "undefined") {
  window.test = (function() {
    var canvas = document.createElement("canvas");
    var app = new pc.Application(canvas, {});
    app.mouse = new pc.Mouse(canvas);

    var scripts = {};
    pc.script.on("created", function(componentName, initializer) {
      scripts[componentName] = initializer;
    });

    return {
      canvas: canvas,
      app: app,
      getConstructor: function(name) {
        return scripts[name](app);
      }
    };
  })();
}
