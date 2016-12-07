(function () {
'use strict';

angular.module('Data')
.component('categories', {
  templateUrl: 'src/menuapp/templates/menulist.template.html',
  bindings: {
    list: '<'
  }
});

})();
