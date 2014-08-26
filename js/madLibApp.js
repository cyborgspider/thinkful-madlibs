angular.module('madLibApp',[])
  .controller('InputValueHandler', function($scope){

    var $input = $('input[type="text"], input[type="number"]');

    $scope.gender = 'male';

    $scope.submitted = false;

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

    $scope.submitForm = function(){
      $scope.submitted = true;
      if($scope.madLibForm.$valid){
        $('form').hide();
        $('.content').show();
      } else {
        $scope.submitted = false;
      }
    };

    $scope.resetForm = function(){
      $scope.values = {};
      $scope.madLibForm.$setPristine();
      $('.content').hide();
      $('form').show();
    };

  });
