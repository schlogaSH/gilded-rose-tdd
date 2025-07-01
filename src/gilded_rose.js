/* eslint-disable no-unused-vars */

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

let unusedVariable = 123; // no-unused-vars

function update_quality(items) {
  for (let i = 0; i < items.length; i++) {

    if (items[i].name == 'Aged Brie' || items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {

      if (items[i].quality < 50) items[i].quality += 1; // missing curly braces

      if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (items[i].sell_in < 11 && items[i].quality < 50) items[i].quality += 1
        if (items[i].sell_in < 6 && items[i].quality < 50) items[i].quality += 1
      }

    } else {

      if (items[i].quality > 0) {
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
          const decrease = items[i].name.toLowerCase().includes('conjured') ? 2 : 1;
          items[i].quality = items[i].quality - decrease;
        }
      }

    }

    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in = items[i].sell_in - 1
    }

    if (items[i].sell_in < 0) {
      if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        items[i].quality = 0;
      } else if (items[i].name == 'Aged Brie') {
        if (items[i].quality < 50) {
          items[i].quality++;
        }
      } else if (items[i].quality > 0 && items[i].name != 'Sulfuras, Hand of Ragnaros') {
        const decrease = items[i].name.toLowerCase().includes('conjured') ? 2 : 1;
        items[i].quality = items[i].quality - decrease;
      }
    }

  }
}

function testReturn(x) {
  if (x > 0) return x;
  // fehlt return im else-Fall → consistent-return
}
