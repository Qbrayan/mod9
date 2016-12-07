(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com');


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath']
function MenuDataService($q, $timeout ,$http, ApiBasePath) {
  var service = this;
  
  service.getAllCategories = function () {
    var deferred = $q.defer();
    var foundItems =[];
    $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })
    .then(function (response) {
        foundItems =response.data;
     })
       .catch(function (error) {
       console.log(error);
     });
    
    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(foundItems);
    },800);


    return deferred.promise;
  };

  service.getItemsForCategory = function (categoryShortName) {
    var foundItems =[];
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    })
    .then(function (response) {
         foundItems =response.data.menu_items;
         return foundItems;
    })
    .catch(function (error) {
       console.log(error);
    });
    
  };

}

})();
