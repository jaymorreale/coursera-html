(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('AlreadyBoughtController', AlreadyBoughtController)
.controller('ToBuyController', ToBuyController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
}


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;

  buyList.items = ShoppingListCheckOffService.getItems();

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "crust", quantity: 1 },
  { name: "whole tomatoes",  quantity: 2},
  { name: "onions",  quantity: 1},
  { name: "green peppers",  quantity: 1},
  { name: "lbs sliced pepperoni",  quantity: 2},
  { name: "oz mozzarella",  quantity: 8},
  { name: "cans of sauce", quantity: 2}];

  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.buyItem = function (itemIdex) {
    var item = items[itemIdex];
    items.splice(itemIdex, 1);
    boughtItems.push(item);
  };

  service.getItems = function () {
    return items;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
