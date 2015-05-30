var myApp = angular.module('myApp',[]);
myApp.controller('test',function($scope){
		$scope.loan = 20000000; //static value
		$scope.tenor =  36; //static value

		$scope.Output = function(){
			PMT.init.apply();
		}
		// JAVASCRIPT EXTENDS
		var PMT={
			init:function(){
				PMT.EVENT.generateData(2,$scope.loan,$scope.tenor);
			},
			EVENT:{
				generateData:function(apr,loan,tenor){
					//loan dinamyc
					var aprS  = parseFloat(apr)/1200;
					var amount = 0;
					var hutang = loan;
					for(var i=0;i<=36;i++){
						amount = (aprS * (-parseInt(loan))) * Math.pow(1+aprS,parseInt(tenor))/(1-Math.pow(1 + aprS,parseInt(tenor)));
						var bunga = loan*2/1200;
						var angsuran = amount - bunga;
						var balance = hutang - angsuran;
						var p = 572851.57464912;

						console.log("Monthly Payment :"+ amount );
						console.log("Interest  :"+ bunga);
						console.log("Principal Debt :"+ angsuran);
						console.log("Balance  :"+ balance);
						console.log("PAYMENT  :"+ p.toFixed(2));
					}
					return amount;
				},
				saveData:function(_btn){
					$(document).on('click',_btn,function(){
						alert($scope.datax);
					});
				}
			}
		}
});

// Monthly Payment :572851.57464912
// Interest : 33333.333333333 
// Principal Debt : 539518.24131578 
// Balance : 19460481.758684

