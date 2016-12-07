(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuDataService', 'list'];
function MainMenuAppController(MenuDataService, list) {
  var categories = this;
  categories.list = list;
}

})();
