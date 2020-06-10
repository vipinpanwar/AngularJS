/*************************Angular Js**********************************/
//** - means imporant.
>>It Follow a model view whatever.

/***********************Services***************************************/
>>It start with $.
>>Angular js do depedency injection by reading all parameters of function
 as array and see for ex $scope is there, it inject the object there bcz Angular
 js recognize it.
 angular.injector.annotate(fnname);//it read the fn parameters as an array.
 >>It is a singleton object, means it has only one copy of an object .
 >>$scope service is not a singleton object, it is an exception.

/************************Directive***************************************/
>>Directive is an instruction to angular js to manipulate the piece of DOM.
>>This could be add a class , hide this, create this.
                      COMMON Directives
1.ng-if//it remove the element from the dom , BY commenting out the whole div element.
2.ng-show// it is similar to ng-if but it does nor remove the element from the div, it add the class ng-hide.
3. ng-hide//it also does not remove the element from the dom.
4. **ng-class// it is use to add the class with some condition,it take input in json format.

/*******************************watchers and digest loop*********************/
>>angular js use wathcers in which all the controller modal are there , in watch
  list and whenever any event change occur angular js check for old and new value and 
  update it to all the areas like views and in controller if value get updated.

/******************************Custom Directives***************************/
>>In angular we define Directive as 'search-result' or 'pink-class' but in js
  it converts into camel case so it become 'searchResul' and 'pinkClass'.
 