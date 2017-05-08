var app = angular.module("SearchApp", []);

app.controller("SearchCtrl", ["$scope", SearchCtrl]);

function SearchCtrl($scope)
{
    $scope.items = [];
   
    alert("Inside search ctrl");

    $scope.categories = [
    {
        "name": "All"
    },
    {
        "name": "Product Release"
    },
    {
        "name": "Feature"
    },
    {
        "name": "Sub Feature"
    },
    {
        "name": "Geo"
    }
    ];


    $scope.displayItems = [];

    $scope.items = [
          {
              "productRelease": "Release 1.1",
              "feature": "TestF1",
              "subFeature": "TestF2",
              "geo": "NAM"
          },
          {
              "productRelease": "Release 1.2",
              "feature": "Skype for buisness",
              "subFeature": "TestF2",
              "geo": "SAM"
          },
          {
              "productRelease": "Pottasium 1.0",
              "feature": "QMS",
              "subFeature": "QMS Sub1",
              "geo": "IND"
          },
          {
              "productRelease": "Release 1.1",
              "feature": "Feature 1",
              "subFeature": "Sub F2",
              "geo": "TIP"
          },
          {
              "productRelease": "Release 1.2",
              "feature": "Windows 10",
              "subFeature": "Sub F3",
              "geo": "SAM"
          },
          {
              "productRelease": "Pottasium 1.0",
              "feature": "CRM",
              "subFeature": "CRM Sub1",
              "geo": "EUR"
          },
          {
              "productRelease": "Release 1.1",
              "feature": "TestF1",
              "subFeature": "TestF2",
              "geo": "JPN"
          },
          {
              "productRelease": "Release 1.2",
              "feature": "Skype for buisness",
              "subFeature": "TestF2",
              "geo": "SAM"
          },
          {
              "productRelease": "Pottasium 1.0",
              "feature": "QMS",
              "subFeature": "QMS Sub1",
              "geo": "IND"
          },
           {
               "productRelease": "Release 1.1",
               "feature": "Feature 1",
               "subFeature": "Sub F2",
               "geo": "TIP"
           },
          {
              "productRelease": "Release 1.2",
              "feature": "Windows 10",
              "subFeature": "Sub F3",
              "geo": "EUR"
          },
          {
              "productRelease": "Pottasium 1.0",
              "feature": "CRM",
              "subFeature": "CRM Sub1",
              "geo": "NAM"
          }
    ];


    $scope.geos = [
        {
            "id":1,
            "name": "IND"
        },
        {
            "id":2,
            "name": "JPN"
        },
        {
            "id":3,
            "name": "NAM"
        },
        {
            "id":4,
            "name": "SAM"
        },
        {
            "id":5,
            "name": "CAN"
        },
        {
            "id":6,
            "name": "TIP"
        },
        {
            "id":7,
            "name": "EUR"
        }
    ];


    $scope.filterRecord = function (geo, event) {
        $scope.selectedItems = [];

        if (event.target.checked == true) {
            if ($scope.displayItems.length == $scope.items.length) {
                $scope.displayItems = [];
            }


            angular.forEach($scope.items, function (item, key) {
                if (geo.name == item.geo) {

                    $scope.displayItems.push(item);
                    //else
                    //    remove(key);
                }
            });
        }
        else
        {
            $scope.itemsAfterDeselect = [];

            angular.forEach($scope.displayItems, function (item, key) {
                if (geo.name != item.geo) {
                    $scope.itemsAfterDeselect.push(item);
                }
            });


            if ($scope.itemsAfterDeselect.length == 0)
            {
                $scope.displayItems = $scope.items;
            }
            else
            {
                $scope.displayItems = $scope.itemsAfterDeselect;
            }
        }

    }

    $scope.searchData = function () {

        getRecordsBasedOnCategroy($scope.searchText, $scope.selectedCategory);
        
    };

    function getRecordsBasedOnCategroy(searchText, selectedCategory)
    {
        alert(selectedCategory + ":" + searchText);
        $scope.displayItems = $scope.items;
    }
}
