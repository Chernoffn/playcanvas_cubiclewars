describe("scrollingCamera", function() {
  var ScrollingCamera = app.getConstructor("scrolling_camera");
  var entity, scrollingCamera;

  beforeEach(function() {
    entity = new pc.Entity();
    entity.setPosition(pc.Vec3.ZERO);
    scrollingCamera = new ScrollingCamera(entity);
    scrollingCamera.margin = 10;
    scrollingCamera.scrollSpeed = 2.2;
    scrollingCamera.initialize();
  });
  
  describe("Movement", function() {

    it("doesn't move the camera entity before the mouse is on a margin", function() {
      app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: scrollingCamera.margin + 1, y: scrollingCamera.margin + 1});
      scrollingCamera.update();

      expect(entity.getPosition().x).toEqual(0);
    });

    it("moves the entity left when the mouse hits the left margin", function() {
      app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: scrollingCamera.margin, y: scrollingCamera.margin + 1});
      scrollingCamera.update();

      expect(entity.getPosition().x).toBeCloseTo(-scrollingCamera.scrollSpeed);
    });

    it("keeps moving the entity left on each update", function() {
      app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: scrollingCamera.margin, y: scrollingCamera.margin + 1});
      scrollingCamera.update();
      scrollingCamera.update();

      expect(entity.getPosition().x).toBeCloseTo(-(scrollingCamera.scrollSpeed * 2));
    });

    it ("can safely call update before any mouse movement", function() {
      scrollingCamera.update();

      expect(entity.getPosition()).toEqual(pc.Vec3.ZERO);
    });

    it ("can move to the right when close to the edge", function() {
      app.graphicsDevice = {width: 900};
      app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: 900 - scrollingCamera.margin, y: scrollingCamera.margin + 1});
      scrollingCamera.update();

      expect(entity.getPosition().x).toBeCloseTo(scrollingCamera.scrollSpeed);
    });

    it ("can move up when close to the top", function() {
      app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: scrollingCamera.margin + 1, y: scrollingCamera.margin});
      scrollingCamera.update();

      expect(entity.getPosition().z).toBeCloseTo(-scrollingCamera.scrollSpeed);
    });

    it ("can move down when close to the bottom", function() {
      app.graphicsDevice = {height: 900};
      app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: scrollingCamera.margin + 1, y: 900 - scrollingCamera.margin});
      scrollingCamera.update();

      expect(entity.getPosition().z).toBeCloseTo(scrollingCamera.scrollSpeed);
    });
  });
  
  describe("clicking", function() {
    var FakeStateMachine = function() {
      
    };
    it ("selects nothing when there are no objects at the click point", function() {
      app.root.script.state_machine = new FakeStateMachine();
      entity.addComponent("camera");
      expect(entity.camera.farClip).toEqual(1000);
      
      var to = entity.camera.screenToWorld(0, 0, entity.camera.farClip);
      expect(to).toEqual(pc.Vec3.ZERO);
      
    });
  
  });
});