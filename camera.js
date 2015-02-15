pc.script.create("scrolling camera", function(context) {

  var ScrollingCamera = function(entity) {
    this.entity = entity;

    context.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
  };

  ScrollingCamera.prototype = {

    onMouseMove: function(event) {
      if (event.x < 10) {
        window.console.log(this.entity.position);
        this.entity.setPosition(this.entity.getPosition().x -= 5, this.entity.getPosition().y);
      }
    }

  };

  return ScrollingCamera;
});
