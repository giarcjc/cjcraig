angular.module('app')
  	.controller('ContactCtrl', ['$state', '$http', function ($state, $http) {
    var me = this;

    // me.chicken = 'bok bok';

   	me.sendEmail = function(){
   		
   		var data = ({
   			name: me.name,
   			email: me.email,
   			message: me.message
   		})

   		$http.post('/contact', data)
     		.success(function(data, status, headers, config){
     			// console.log('success: data: ' + JSON.stringify(data) );
        //   console.log('success: status: ' + JSON.stringify(status) );
        //   console.log('success: headers: ' + JSON.stringify(headers) );
        //   console.log('success: config: ' + JSON.stringify(config) );
          $state.go('emailsent')
     		})
     		.error(function(err){
     			console.log('error: ' + JSON.stringify(err))
          $state.go('emailErr')
     		})
   	}


  }]);