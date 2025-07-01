describe("Gilded Rose", function() {

  it("reduziert Qualität und Verkaufstage eines normalen Items um 1", function() {
    items = [ new Item("Normal Item", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

});
