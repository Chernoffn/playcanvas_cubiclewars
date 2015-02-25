describe("Camera", function() {
  var ScrollingCamera = test.getConstructor("scrolling_camera");
  var entity, camera;

  beforeEach(function() {
    entity = new pc.Entity();
    camera = new ScrollingCamera(entity);
    camera.margin = 10;
    camera.scrollSpeed = 2.2;
    camera.initialize();
  });

  it("doesn't move the entity before the mouse is on a margin", function() {
    entity.translateLocal(pc.Vec3.ZERO);

    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: 10, y: 11});
    camera.update();

    expect(entity.position.x).toEqual(0);
  });

  it("moves the entity left when the mouse hits the left margin", function() {
    entity.translateLocal(pc.Vec3.ZERO);

    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: 10, y: 11});
    camera.update();

    expect(entity.getLocalPosition().x).toBeCloseTo(-camera.scrollSpeed);
  });

  it("keeps moving the entity left on each update", function() {
    entity.translateLocal(pc.Vec3.ZERO);

    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: camera.margin, y: 11});
    camera.update();
    camera.update();

    expect(entity.getLocalPosition().x).toBeCloseTo(-(camera.scrollSpeed * 2));
  });

  it ("can safely call update before any mouse movement", function() {
    camera.update();

    expect(entity.getLocalPosition()).toEqual(pc.Vec3.ZERO);
  });

  it ("can move to the right when close to the edige", function() {
    test.app.graphicsDevice = {width: 900};
    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: 900 - camera.margin, y: 11});
    camera.update();

    expect(entity.getLocalPosition().x).toBeCloseTo(camera.scrollSpeed);
  });

});

