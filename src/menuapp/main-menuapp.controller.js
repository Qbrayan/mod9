(function () {
'use strict';

angular.module('Data')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuDataService', 'list'];
function MainMenuAppController(MenuDataService, list) {
  var categories = this;
  categories.list = list;
}

})();
