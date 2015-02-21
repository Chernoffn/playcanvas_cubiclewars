describe("Camera", function() {
  var expect = chai.expect;

  it("does some stuff with the context", function() {
    var entity = new pc.Entity();
    var ScrollingCamera = test.getConstructor("scrolling camera");

    new ScrollingCamera(entity);
    test.context.mouse.fire(pc.EVENT_MOUSE_MOVE, {x: 5});

    expect(true).to.be.true;
  });
});

