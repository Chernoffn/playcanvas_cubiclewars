if (typeof(window.test) === "undefined") {
  window.test = (function() {
    var canvas = document.createElement("canvas");
    var app = new pc.Application(canvas, {});
    var mouse = new pc.Mouse(canvas);
    var context = {
      mouse: mouse
    };

    var scripts = {};
    pc.script.on("created", function(componentName, initializer) {
      scripts[componentName] = initializer;
    });

    return {
      canvas: canvas,
      context: context,
      getConstructor: function(name) {
        return scripts[name](context);
      }
    };
  })();
}
