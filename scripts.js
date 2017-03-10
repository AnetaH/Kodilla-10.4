function Phone(brand, price, colour, memory) {
  this.brand = brand;
  this.price = price;
  this.colour = colour;
  this.memory = memory;
}

Phone.prototype.printInfo = function() {
  console.log("Marka telefonu to " + this.brand + ", kolor to " + this.colour + ", cena to " + this.price + " zł," + " posiada " + this.memory + "GB pamięci.");
}

var iPhone6S = new Phone("Apple", 2250, "różowy", 32);

iPhone6S.printInfo();

var GalaxyS6 = new Phone("Samsung", 2080, "czarny", 32);

GalaxyS6.printInfo();

var OnePlusOne = new Phone("OnePlus", 1200, "srebrny", 64);

OnePlusOne.printInfo();