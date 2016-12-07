(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menuapp/templates/dish.template.html',
  bindings: {
    dishes: '<'
  }
});

})();
