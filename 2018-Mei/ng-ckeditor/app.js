var app = angular.module("CKEditorExample", ["ngCkeditor"]);

  app.directive('ckEditor', function () {
  	
  return {
    require: '?ngModel',
    link: function (scope, elm, attr, ngModel) {
      var ck = CKEDITOR.replace(elm[0]);
      if (!ngModel) return;
      ck.on('instanceReady', function () {
        ck.setData(ngModel.$viewValue);
      });
      function updateModel() {
        scope.$apply(function () {
          ngModel.$setViewValue(ck.getData());
        });
      }
      ck.on('change', updateModel);
      ck.on('key', updateModel);
      ck.on('dataReady', updateModel);

      ngModel.$render = function (value) {
        ck.setData(ngModel.$viewValue);
      };
    }
  };
});

app.controller("MainCtrl", ["$scope", function($scope){
  $scope.content = "<p> this is custom directive </p>";
  $scope.content_two = "<p> this is ng-ckeditor directive </p>";
}]);