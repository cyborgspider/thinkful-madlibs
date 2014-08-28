angular.module('madLibApp',['ngAnimate'])
  .controller('InputValueHandler', function($scope){

    $scope.gender = 'male';
    $scope.clicked     = false;
    $scope.showResults = false;

    $scope.heOrShe = function(){
      if($scope.gender === 'male'){
        return 'he';
      } else {
        return'she';
      }
    };

    $scope.hisOrHer = function(){
      if($scope.gender === 'male'){
        return 'his';
      } else {
        return'her';
      }
    };

    $scope.himOrHer = function(){
      if($scope.gender === 'male'){
        return 'him';
      } else {
        return'her';
      }
    };

    $scope.values = {
      name:                '',
      dirty_task:          '',
      obnoxious_celebrity: '',
      job_title:           '',
      celebrity:           '',
      huge_number:         '',
      tedious_task:        '',
      useless_skill:       '',
      adjective:           ''
    };

    $scope.checkRequiredError = function(formItemName){
      return $scope.$eval('clicked && madLibForm.'+formItemName+'.$error.required');
      // return $scope.submitted && $scope.madLibForm.name.$error.required);
    };

    $scope.checkIfNumber = function(formItemName){
      return $scope.$eval('clicked && madLibForm.'+formItemName+'.$error.number');
      // return $scope.submitted && $scope.madLibForm.name.$error.required);
    };

    $scope.submitForm = function(){
      $scope.clicked = true;
      if($scope.madLibForm.$valid){
        $scope.showResults = true;
      } else {
        $scope.showResults = false;
      }
    };

    $scope.resetForm = function(){
      $scope.values = {};
      $scope.madLibForm.$setPristine();
      $scope.showResults = false;
      $scope.clicked     = false;
    };

  });
