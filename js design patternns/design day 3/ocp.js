class ChooseShipmentWay {
  constructor(pickupDate, deliveryDate, commedities, itinerary, options) {
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.commedities = commedities;
    this.itinerary = itinerary;
    this.options = options;
  }
  shipmentType() {
    this.options.forEach(function (option, index) {
      console.log(index + 1, option);
    });
  }
}

class PlaygroundWay {
  constructor(pickupDate, deliveryDate, commedities, itinerary) {
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.commedities = commedities;
    this.itinerary = itinerary;
  }
  shipmentType() {
    console.log(`playground way shipment`);
  }
}

class AirWay {
  constructor(pickupDate, deliveryDate, commedities, itinerary) {
    this.pickupDate = pickupDate;
    this.deliveryDate = deliveryDate;
    this.commedities = commedities;
    this.itinerary = itinerary;
  }
  shipmentType() {
    console.log(`Air way shipment`);
  }
}

var shipmentOptions = [
  new PlaygroundWay("Playground way"),
  new AirWay("Airway"),
];

function displayShipmentWay(options) {
  options.forEach(function (option) {
    option.shipmentType();
  });
}

displayShipmentWay(shipmentOptions);
