(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/templates/dish.template.html',
  bindings: {
    dishes: '<'
  }
});

})();
