var myApp = angular.module('myApp', ['ngMessages','ngRoute']);//Here we add dependency, dependency is a module by adding we get all it's feature.
  
myApp.config(function($routeProvider){

  $routeProvider
  .when('/',{
    templateUrl:'Templates/main.html',
    controller:'mainController'

  })
  .when('/second',{
    templateUrl:'Templates/second.html',
    controller:'secondController'

  })
  

});

myApp.service("myService",function(){

    var self=this;
    this.name='John Doe';
    this.namelength=function(){

        return self.name.length;
    }

});

myApp.directive("searchResultObject",function(){
    console.log('directives');
    return{
        
        restrict:'AEC',//Attribute,Elements,Class and M for comments 
        templateUrl:'directive/searchDirectives.html',//'<a href="#/second" class="list-group-item"><h4 class="list-group-item-heading">{{ personObject.name }}</h4><p class="list-group-item-text">{{ personObject.address }}</p></a>',
        replace:true,
        scope:{
           
            personObject:'='//= means two way binding with this address,only use with objecr
        }
    }

});

myApp.controller('mainController', ['$scope', '$log','$timeout',"$http","myService", function($scope,$log,$timeout,$http,myService) {

    console.log($scope);
    $scope.name=myService.name;
    console.log(myService.namelength())
    $scope.character=5;
    // $timeout(function(){
    //     $scope.name='Everbody';
    // },3000);
    $scope.$watch('name',function(){
        myService.name=$scope.name;//in angular js we have to do manually watch.
    });


    console.log(myService.name);
    // $scope.rules=[
    //     {rulename:'must be 5 characters'},
    //     {rulename:'must be less than 5'},
    //     {rulename:'every one is nice.'}
    // ];
    /*************XMLHttpRequest************************
     * Every browser use this, given by microsoft, 
     * it is little complex to use this is the reason framworks give
     * wrapper for this object , which is easy to use .
     */
    // var rulesrequest = new XMLHttpRequest();
    // rulesrequest.onreadystatechange = function () {
    //     $scope.$apply(function () {
    //         if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
    //             $scope.rules = JSON.parse(rulesrequest.responseText);
    //         }
    //     });
    // }
    // rulesrequest.open("GET", "rules.json", true);
    // rulesrequest.send();

    $http.get('rules.json').success(function(result){

    $scope.rules=result;

    }).error(function(data,status){

    })


}]);

myApp.controller('secondController', ['$scope', '$log','$timeout',"$http","myService",function($scope,$log,$timeout,$http,myService) {
    console.log('second Controller');
    $scope.name='Second Controller';
    console.log('_________________________________')
    console.log(myService.name);
    console.log(myService.namelength());
    $scope.person = {
        name: 'John Doe',
        address: '555 Main St., New York, NY 11111'
    }
    

}]);
