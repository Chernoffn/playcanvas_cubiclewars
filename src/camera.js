pc.script.attribute('scrollSpeed', 'number', 0.2);
pc.script.attribute('margin', 'number', 10);
pc.script.create("scrolling camera", function(context) {
  var ScrollingCamera = function(entity) {
    this.entity = entity;
  };

  ScrollingCamera.prototype = {
    initialize: function() {
      context.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    },

    update: function(dt) {
      if (this.mousePosition) {
        if (this.mousePosition.x <= this.margin) {
          this.entity.translateLocal(-this.scrollSpeed, 0, 0);
        }
      }
    },

    onMouseMove: function(event) {
      this.mousePosition = event;
    },

  };

  return ScrollingCamera;
});
