(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuListController', MenuListController);

// Version with resolving to 1 item based on $stateParams in route config
MenuListController.$inject = ['MenuDataService','$stateParams'];
function MenuListController(MenuDataService,$stateParams) {
  var menuItem = this;
  menuItem.items =[];
  var promise= MenuDataService.getItemsForCategory($stateParams.itemId)
  promise.then(function (response) {
         menuItem.items =response;
   });
  console.log(menuItem.items.length);
  
}

})();