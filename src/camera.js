pc.script.attribute('scrollSpeed', 'number', 0.2);
pc.script.attribute('margin', 'number', 10);
pc.script.create("scrolling_camera", function(app) {
  var ScrollingCamera = function(entity) {
    this.entity = entity;
  };

  ScrollingCamera.prototype = {
    initialize: function() {
      app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    },

    update: function(dt) {
      if (this.mousePosition) {
        if (this.mousePosition.x <= this.margin) {
          this.entity.translate(-this.scrollSpeed, 0, 0);
        } else if (this.mousePosition.x >= (app.graphicsDevice.width - this.margin)) {
          this.entity.translate(this.scrollSpeed, 0, 0);
        }

        if (this.mousePosition.y <= this.margin) {
          this.entity.translate(0, 0, -this.scrollSpeed);
        } else if (this.mousePosition.y >= (app.graphicsDevice.height - this.margin)) {
          this.entity.translate(0, 0, this.scrollSpeed);
        }
      }
    },

    onMouseMove: function(event) {
      this.mousePosition = event;
    }

  };

  return ScrollingCamera;
});