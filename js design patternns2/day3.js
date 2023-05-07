// task1
// class Shipment {
//     constructor(pickDate, DeliveryDate, commodities, from, to) {
//       this.pickDate = pickDate;
//       this.DeliveryDate = DeliveryDate;
//       this.commodities = commodities;
//       this.from = from;
//       this.to = to;
//     }
//   }
  
//   class AirShipment extends Shipment {
//     constructor(pickDate, DeliveryDate, commodities, from, to) {
//       super(pickDate, DeliveryDate, commodities, from, to);
//       this.type = "airShipment";
//     }
//   }
  
//   class GroundShipment extends AirShipment {
//     constructor(pickDate, DeliveryDate, commodities, from, to) {
//       super(pickDate, DeliveryDate, commodities, from, to);
//       this.type = "groundShipment";
//     }
//   }
  
//   class ShipmentWay{
//     constructor(type, pickDate, DeliveryDate, commodities, from, to) {
//       switch (type) {
//         case "airShipment":
//           return new AirShipment(pickDate, DeliveryDate, commodities, from, to);
//           break;
//         case "groundShipment":
//           return new GroundShipment( pickDate, DeliveryDate, commodities, from, to );
//           break;
//       }
//     }
//   }
  
//   let shipment1 = new ShipmentWay(
//     "airShipment",
//     5,
//     11,
//     "mobiles",
//     "Cairo",
//     "behera"
//   );
//   console.log(shipment1);
  
//   let shipment2 = new ShipmentWay(
//     "groundShipment",
//     12,
//     11,
//     "mobiles",
//     "Cairo",
//     "behera"
//   );
//   console.log(shipment2);




//   task2
class Pizza {
    type() {}
  }
  
  class Pepperoni extends Pizza {
    type() {
      console.log("Pepperoni Pizza");
    }
  }
  
  class Margherita extends Pizza {
    type() {
      console.log("Margherita Pizza");
    }
  }
  
  class Buffalo extends Pizza {
    type() {
      console.log("Buffalo Pizza");
    }
  }
  
  class BBQ extends Pizza {
    type() {
      console.log("BBQ Pizza");
    }
  }
  
  class Extras extends Pizza {
    constructor(extra) {
      super();
      this.extra = extra;
    }
    type() {
      this.extra.type();
    }
  }
  
  class ExtraCheese extends Extras {
    type() {
      console.log("Extra Cheese ");
    }
  }
  
  var buffaloPizza = new Buffalo();
  buffaloPizza.type();
  
  var addCheese = new ExtraCheese(buffaloPizza);
  addCheese.type();








// task3
class GameReader {
    constructor(input) {
      this.input = input;
    }
    readDisc() {
      console.log("Now playing: ", this.input);
    }
  }
  
  
  class NSSConsole {
    gameReader = new GameReader("TurboCars Racer");
  
    play() {
      this.gameReader.readDisc();
    }
  }
  
  let nssConsole = new NSSConsole();
  nssConsole.play()
  console.log(nssConsole)