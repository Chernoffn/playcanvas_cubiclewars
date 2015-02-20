describe("Camera", function() {

  it("does some stuff with the context", function() {
    var canvas = document.createElement("canvas");
    var app = new pc.Application(canvas, {});

    var context = {};
    pc.extend(context, function() {
      var mouse = new pc.Mouse();
      return {
        mouse: mouse
      };
    }());

    var entity = new pc.Entity();
    var ScrollingCamera = pc.scripts["scrolling camera"](context);

    new ScrollingCamera(entity);
    context.mouse.fire(pc.EVENT_MOUSE_MOVE, {x: 5});

    expect(true).toBeFalsy();
  });
});

