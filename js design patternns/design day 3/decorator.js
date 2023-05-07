"use strict";

class Pizza {
  madePizza() {}
}

class PeppyPaneer extends Pizza {
  madePizza() {
    console.log("made PeppyPaneer pizza without tomato");
  }
}

class FarmHouse extends Pizza {
  madePizza() {
    console.log("made FarmHouse pizza without tomato");
  }
}

class Margherita extends Pizza {
  madePizza() {
    console.log("made Margherita pizza without tomato");
  }
}

class ChickenFiesta extends Pizza {
  madePizza() {
    console.log("made ChickenFiesta pizza without tomato");
  }
}

class PizzaDicorator extends Pizza {
  constructor(decoratedPizza) {
    super();
    this.decoratedPizza = decoratedPizza;
  }
  draw() {
    this.decoratedPizza.madePizza();
  }
}

class PizzaWithTomato extends PizzaDicorator {
  madePizza() {
    console.log("made pizza with tomato");
  }
}

var chickenFiesta = new ChickenFiesta();

chickenFiesta.madePizza();

var chickenFiestaWithTomato = new PizzaWithTomato(chickenFiesta);
chickenFiestaWithTomato.madePizza();
