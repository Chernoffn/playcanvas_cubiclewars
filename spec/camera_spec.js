describe("Camera", function() {
  var ScrollingCamera = test.getConstructor("scrolling_camera");
  var entity, camera;

  beforeEach(function() {
    entity = new pc.Entity();
    entity.setPosition(pc.Vec3.ZERO);
    camera = new ScrollingCamera(entity);
    camera.margin = 10;
    camera.scrollSpeed = 2.2;
    camera.initialize();
  });

  it("doesn't move the entity before the mouse is on a margin", function() {
    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: camera.margin + 1, y: camera.margin + 1});
    camera.update();

    expect(entity.getLocalPosition().x).toEqual(0);
  });

  it("moves the entity left when the mouse hits the left margin", function() {
    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: camera.margin, y: camera.margin + 1});
    camera.update();

    expect(entity.getLocalPosition().x).toBeCloseTo(-camera.scrollSpeed);
  });

  it("keeps moving the entity left on each update", function() {
    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: camera.margin, y: camera.margin + 1});
    camera.update();
    camera.update();

    expect(entity.getLocalPosition().x).toBeCloseTo(-(camera.scrollSpeed * 2));
  });

  it ("can safely call update before any mouse movement", function() {
    camera.update();

    expect(entity.getLocalPosition()).toEqual(pc.Vec3.ZERO);
  });

  it ("can move to the right when close to the edge", function() {
    test.app.graphicsDevice = {width: 900};
    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: 900 - camera.margin, y: camera.margin + 1});
    camera.update();

    expect(entity.getLocalPosition().x).toBeCloseTo(camera.scrollSpeed);
  });

  it ("can move up when close to the top", function() {
    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: camera.margin + 1, y: camera.margin});
    camera.update();

    expect(entity.getLocalPosition().z).toBeCloseTo(-camera.scrollSpeed);
  });

  it ("can move down when close to the bottom", function() {
    test.app.graphicsDevice = {height: 900};
    test.app.mouse.fire(pc.EVENT_MOUSEMOVE, {x: camera.margin + 1, y: 900 - camera.margin});
    camera.update();

    expect(entity.getLocalPosition().z).toBeCloseTo(camera.scrollSpeed);
  });
});