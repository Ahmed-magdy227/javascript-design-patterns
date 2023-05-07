class Shipment {
  constructor(pickupDate, deliveryDate, commedities, itinerary) {
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.commedities = commedities;
    this.itinerary = itinerary;
  }
  shipmentType() {}
}

class PlaygroundWay extends Shipment {
  shipmentType() {
    console.log(`playground way shipment`);
  }
}

class AirWay extends Shipment {
  shipmentType() {
    console.log(`Air way shipment`);
  }
}

class ChooseShipment {
  constructor(type) {
    this.type = type;
  }
  shipmentOptions() {
    switch (this.type) {
      case "PlaygroundWay":
        return new PlaygroundWay();
      case "AirWay":
        return new AirWay();
      default:
        return "enter correct option, options are playground way and air way";
    }
  }
}

var chooseShipment1 = new ChooseShipment("PlaygroundWay");
var shipment1 = chooseShipment1.shipmentOptions();
console.log(shipment1);
shipment1.shipmentType();

var chooseShipment2 = new ChooseShipment("AirWay");
var shipment2 = chooseShipment2.shipmentOptions();
console.log(shipment2);
shipment2.shipmentType();
