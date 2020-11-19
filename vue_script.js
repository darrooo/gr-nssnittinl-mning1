//TESTAR NYTT



var vm = new Vue({
  el: "#tables",
  data: {
    burgers: food,
    message: ''
  },
})



'use strict';
var socket = io();

var vm = new Vue({
  el: '#mapnbutton',
  data: {
    orders: {},
    newOrder: {},
    click: false,
    costumerArrays: [],
    burgerArrays: []
  },

  methods: {
    buttonClicked: function() {
      //console.log("button"); fungerar
      this.click = true;
      this.customerArray = getCosutmerInfo();
      this.burgerArray = getBurgerInfo();
      this.addOrder();
      //console.log(this.customerArray); fungerar
      //console.log(this.burgerArray); fungerar
    },

    getNext: function() {
      var lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      //console.log("add"); fungerar
      socket.emit("addOrder", {
        orderId:Math.floor(Math.random()*100),

        details: this.newOrder.details,
        orderItems: this.burgerArray,
        orderInformation: this.customerArray,
      });
      console.log(Math.floor(Math.random()*100));
      //console.log(this.newOrder); ?
      //console.log(this.burgerArray); fungerar
      //  console.log(this.customerArray); fungerar

    },
    displayOrder: function(event) {
      //console.log("hej"); fungerar
      var offsets = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      }
      this.newOrder = ( {details: {
          x: event.clientX - 10 - offsets.x,
          y: event.clientY - 10 - offsets.y },
      })
    }
  }

});









/*
new Vue({
  el: "#table",
  data: {
    burgers: [new MenuItem('Invisible burger', '40 kcal', ''),
      new MenuItem('Invisibhej', '-750 kcal', 'gluten'),
      new MenuItem('hoppasan', '-750 kcal', ''),
      new MenuItem('Invisible burger', '-750 kcal', 'lactose')
    ],
  },
})
*/
