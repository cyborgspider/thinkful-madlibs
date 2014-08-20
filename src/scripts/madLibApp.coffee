angular.module('madLibApp',[])
  .controller('InputValueHandler', ($scope)->

    $scope.heOrShe = ->
      if $scope.sex is 'male'
          return 'he'
      else
          return 'she'

    $scope.hisOrHer = ->
      if $scope.sex is 'male'
        return 'his'
      else
        return 'her'

    $scope.himOrHer = ->
      if $scope.sex is 'male'
        return 'him'
      else
        return 'her'

    $scope.sex = 'male'

    $scope.values = {
        'male_name':           ''
        'dirty_task':          ''
        'obnoxious_celebrity': ''
        'job_title':           ''
        'celebrity':           ''
        'huge_number':         ''
        'tedious_task':        ''
        'useless_skill':       ''
        'adjective':           ''
    }
    return undefined
  )
