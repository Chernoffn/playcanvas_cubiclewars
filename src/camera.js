pc.script.create("scrolling camera", function(context) {
  var ScrollingCamera = function(entity) {
    this.entity = entity;

    context.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
  };

  ScrollingCamera.prototype = {

    onMouseMove: function(event) {
      this.mousePosition = event;
    },

    update: function(dt) {
      if (this.mousePosition.x <= this.margin) {
        this.entity.translateLocal(-this.scrollSpeed, 0, 0);
      }
    }
  };

  return ScrollingCamera;
});
