angular.module('madLibApp',[])
  .controller('InputValueHandler', function($scope){

    $scope.gender = 'male';

    $scope.heOrShe = function(){
      if($scope.gender === 'male'){
        return 'he'
      } else {
        return'she'
      }
    };

    $scope.hisOrHer = function(){
      if($scope.gender === 'male'){
        return 'his'
      } else {
        return'her'
      }
    };

    $scope.himOrHer = function(){
      if($scope.gender === 'male'){
        return 'him'
      } else {
        return'her'
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

  });
