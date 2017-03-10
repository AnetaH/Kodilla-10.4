Telefon.prototype.printInfo = function() {
  console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", cena to " + this.cena + " zł," + " posiada " + this.pamięć + "GB pamięci.");
}

function Telefon(marka, cena, kolor, pamięć) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
  this.pamięć = pamięć;
}

var iPhone6S = new Telefon("Apple", 2250, "różowy", 32);

iPhone6S.printInfo();

var GalaxyS6 = new Telefon("Samsung", 2080, "czarny", 32);

GalaxyS6.printInfo();

var OnePlusOne = new Telefon("OnePlus", 1200, "srebrny", 64);

OnePlusOne.printInfo();