describe("Gilded Rose", function() {

  it("reduziert Qualität und Verkaufstage eines normalen Items um 1", function() {
    items = [ new Item("Normal Item", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

    it("'Aged Brie' gewinnt an Qualität je älter es wird", function() {
    items = [ new Item("Aged Brie", 2, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });
    it("'Aged Brie' gewinnt nach Ablaufdatum doppelt an Qualität", function() {
    items = [ new Item("Aged Brie", 0, 0) ];
    update_quality();
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(2);
  });

    it("Qualität darf nie über 50 steigen – auch bei 'Aged Brie'", function() {
    items = [ new Item("Aged Brie", 2, 50) ];
    update_quality();
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(50); // bleibt bei 50
  });

    it("'Backstage passes' steigen um +1 bei mehr als 10 Tagen", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(14);
    expect(items[0].quality).toEqual(21);
  });

    it("'Backstage passes' steigen um +2 bei 10 Tagen oder weniger", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(27);
  });

    it("'Backstage passes' steigen um +3 bei 5 Tagen oder weniger", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 35) ];
    update_quality();
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(38);
  });

});

