pc.script.create("scrolling camera", function(context) {

  var ScrollingCamera = function(entity) {
    this.entity = entity;

    context.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
  };

  ScrollingCamera.prototype = {

    onMouseMove: function(event) {
      window.console.log("event", event);
    }

  };

  return ScrollingCamera;
});
