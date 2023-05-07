// ---- 1 ----
class Store {
    constructor() {
        this.productTitle = ""
        this.customers = []

    }
    sellProduct(title) {
        this.productTitle = title
        this.notifyAll()
    }
    notifyAll() {
        // refers to channel 'this'
        this.customers.forEach((i) => {
            i.update(this)
        })
    }
    intersted(customers) {
        this.customers.push(customers)
    }
    notIntersted(customers) {
        this.customers = this.customers.filter(function (i) {
            return i != customers
        })
    }

}

class customer {
    constructor(name) {
        this.name = name
    }
    update(store) {
        console.log(`hey ${this.name} new product is in the store ${store.productTitle}`);
    }
}
var ahmedStore = new Store()

var ahmed = new customer("ahmed")

ahmedStore.intersted(ahmed)

var magdy = new customer("magdy")

ahmedStore.intersted(magdy)

var helmy= new customer("helmy")
ahmedStore.intersted(helmy)
ahmedStore.notIntersted(magdy)

ahmedStore.sellProduct("mobile")
ahmedStore.sellProduct("labtop")

// ---- 2 ----

// class Attack {
//     printPlan() {
//         return "4 4 2"
//     }
// }
// class Defence {

//     printPlan() {
//         return "5 5 3"
//     }
// }
// class Meduim {

//     printPlan() {
//         return "2 2 1"
//     }
// }

// class setPlan {
//     setPlan(plan) {
//         this.plan = plan;

//     }
//     printPlan(p) {
//         return this.plan.printPlan()
//     }
// }

// var plan = { plan: 'attack' }
// var attack1 = new Attack();
// var defence1= new Defence()
// var meduim1 = new Meduim()
// var setPlane1 = new setPlan();
// setPlane1.setPlan(defence1)
// console.log(`the stratgy of the game is ${setPlane1.printPlan()}`);
