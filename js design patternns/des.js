
// class ceo{
//     constructor(name,age,address){
//        if(!ceo.instance){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//         ceo.instance=this
//        }else{
//         return ceo.instance
//        }
//     }
// }
// var ceo1=new ceo("ahmed",25,"behera")
// console.log(ceo1)
// var ceo2= new ceo("magdy",60,"cairo")
// console.log(ceo2)
// task2

// factory pattern
// class carShop {
//     draw() {

//     }
// }
// class truck extends carShop {
//     draw() {
//         console.log(`truck car`)
//     }
// }
// class jeep extends carShop {
//     draw() {
//         console.log(`jeep car`)
//     }
// }
// class bmw extends carShop {
//     draw() {
//         console.log(`bmw car`)
//     }
// }
// class carfactory {
//     constructor(type) {
//         this.type = type
//     }
//     createCar() {
//         switch (this.type) {
//             case "truck": return new truck()
//             case "jeep": return new jeep()
//             case "bmw": return new bmw()
//             default: return `car is not exist`

//         }
//     }
// }
// var carfactory1 = new carfactory(`truck`)
// var car1 = carfactory1.createCar()
// console.log(car1)
// car1.draw()

// var carfactory2 = new carfactory(`bmw`)
// var car2 = carfactory2.createCar()
// console.log(car2)
// car2.draw()

// // task3


// class toy {
//         constructor(type) {
//             this.type = type
//         }
//     }
//     class toyDuck extends toy {
//         constructor(type, color, price) {
//             super(type);
//             this.color = color;
//             this.price = price;
//         }
//     }
//     class toyCar extends toyDuck {
//         constructor(type, color, price, name) {
//             super(type, color, price);
//             this.name = name;
//         }
//     }
//     class toyFactory {
//         constructor(type) {
//             this.type = type
//         }
//         createToy() {
//             switch (this.type) {
//                 case `toyDuck`: return new toyDuck()
//                 case `toyCar`: return new toyCar()
//                 default: return `toy is not exist`
//             }
//         }
//     }
    
//     var factory = new toyFactory('toyDuck')
//     var duck = factory.createToy()
//     duck.type = `toyDuck`
//     duck.color = `yellow`
//     duck.price = `40EGP`
//     console.log(duck)
    
//     var factory2 = new toyFactory(`toyCar`)
//     var car = factory2.createToy()
//     car.type = `toyCar`
//     car.color = `blue`
//     car.price = `60EGP`
//     car.name = `jeep`
//     console.log(car)
    // task4
    class congigurevals {
        constructor(xpoint = 0, ypoint = 0, shape = null) {
            this.xpoint = xpoint;
            this.ypoint = ypoint;
            this.shape = shape;
        }
        getconfiguration() {
            if (!congigurevals.instance) {
                return congigurevals.instance = this
            } else {
                return congigurevals.instance
            }
        }
    }
    var val1 = new congigurevals(10, 20, true);
    var obj = val1.getconfiguration();
    console.log(obj);
    
    var val2 = new congigurevals();
    var obj2 = val2.getconfiguration();
    console.log(obj2);









