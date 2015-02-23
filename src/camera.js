pc.script.create("scrolling camera", function(context) {
  var ScrollingCamera = function(entity) {
    this.entity = entity;

    context.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
  };

  ScrollingCamera.prototype = {

    onMouseMove: function(event) {
      console.log("Mouse move?");
      if (event.x <= this.margin) {
        this.entity.translateLocal(-0.5, 0, 0);
      }
    }
  };

  return ScrollingCamera;
});
