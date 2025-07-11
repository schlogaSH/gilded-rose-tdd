/* global describe, it, expect, Item, items, update_quality */

describe("Gilded Rose", function() {

  it("reduziert Qualität und Verkaufstage eines normalen Items um 1", function() {
    let items = [ new Item("Normal Item", 10, 20) ];
    update_quality(items)
    expect(items[0].sell_in).toEqual(9)
    expect(items[0].quality).toEqual(19)
  })

    it("'Aged Brie' gewinnt an Qualität je älter es wird", function() {
    let items = [ new Item("Aged Brie", 2, 0) ];
    update_quality(items);
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(1);
  });

    it("'Aged Brie' gewinnt nach Ablaufdatum doppelt an Qualität", function() {
    let items = [ new Item("Aged Brie", 0, 0) ];
    update_quality(items);
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(2);
  });

    it("Qualität darf nie über 50 steigen – auch bei 'Aged Brie'", function() {
    let items = [ new Item("Aged Brie", 2, 50) ];
    update_quality(items);
    expect(items[0].sell_in).toEqual(1);
    expect(items[0].quality).toEqual(50); // bleibt bei 50
  });

    it("'Backstage passes' steigen um +1 bei mehr als 10 Tagen", function() {
    let items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20) ];
    update_quality(items);
    expect(items[0].sell_in).toEqual(14);
    expect(items[0].quality).toEqual(21);
  });

    it("'Backstage passes' steigen um +2 bei 10 Tagen oder weniger", function() {
    let items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25) ];
    update_quality(items);
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(27);
  });

    it("'Backstage passes' steigen um +3 bei 5 Tagen oder weniger", function() {
    let items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 35) ];
    update_quality(items);
    expect(items[0].sell_in).toEqual(4);
    expect(items[0].quality).toEqual(38);
  });

    it("'Backstage passes' verlieren nach dem Konzert ihren Wert (Qualität = 0)", function() {
    let items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40) ];
    update_quality(items);
    expect(items[0].sell_in).toEqual(-1);
    expect(items[0].quality).toEqual(0);
  });

    it("'Sulfuras' verändert weder Verkaufstag noch Qualität", function() {
    let items = [ new Item("Sulfuras, Hand of Ragnaros", 0, 80) ];
    update_quality( items );
    expect(items[0].sell_in).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });

    it("'Conjured'-Items verlieren doppelt so schnell an Qualität", function() {
    let items = [ new Item("Conjured Mana Cake", 3, 6) ];
    update_quality( items );
    expect(items[0].sell_in).toEqual(2);
    expect(items[0].quality).toEqual(4); // -2 statt -1
  });

});

