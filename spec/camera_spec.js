describe("Camera", function() {
  var ScrollingCamera = test.getConstructor("scrolling camera");
  var entity, camera;

  beforeEach(function() {
    entity = new pc.Entity();
    camera = new ScrollingCamera(entity);
  });

  it("doesn't move the entity before the mouse is on a margin", function() {
    camera.margin = 10

    entity.translateLocal(pc.Vec3.ZERO);
    test.context.mouse.fire(pc.EVENT_MOUSEMOVE, {x: 10, y: 11});

    expect(entity.position.x).toEqual(0);
  });

  it("moves the entity left when the mouse hits the left margin", function() {
    camera.margin = 10

    entity.translateLocal(pc.Vec3.ZERO);
    test.context.mouse.fire(pc.EVENT_MOUSEMOVE, {x: 10, y: 11});

    expect(entity.getLocalPosition().x).toEqual(-0.5);
  });

});

