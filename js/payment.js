var myApp = angular.module('myApp',[]);
myApp.controller('test',function($scope){
		
		$scope.datax = [];
		$scope.strArray={};
		$scope.loan = 20000000; //static value
		$scope.tenor =  36; //static value

		$scope.Output = function(){
			$("#firstRow").append("<td></td><td></td><td></td><td></td><td>"+ $scope.loan +"</td>");
			PMT.init.apply();
		}

		$scope.Save = function(){
			for (var i = 0; i <= 35; i++) {
				$angsuran = $scope.datax[i]['angsuran']; //SEND DATA TO SERVICE
				$debt = $scope.datax[i]['debt'];
				$interest = $scope.datax[i]['interest'];
				$balance = $scope.datax[i]['balance'];
				console.log(i+"|"+$angsuran+"|"+$debt+"|"+$interest+"|"+$balance);
			};
			
			
		}
		// JAVASCRIPT EXTENDS
		var PMT={
			init:function(){

				PMT.EVENT.generateData(2,$scope.loan,$scope.tenor);
			},
			EVENT:{
				generateData:function(InterestRate,LoanAmount,Tenor){
					
					var DownPayment = 0;
					var Tax =0;
					var FirstPayment = 0;
					var Angsuran = 572851.57;
					var Balance = 0;
					var Debt = 0;
					var Interest = 0.0;
					var i=1;

					while(i<=parseInt(Tenor)){
						if (i==1){
							Balance = parseInt(LoanAmount);
						}
						Interest  = (Balance * 2)/1200;
						Debt = Angsuran - Interest;
						Balance = Balance - Debt;

						strArray = {
							"no":i,
							"angsuran":Angsuran,
							"debt":Debt.toFixed(2),
							"interest":Interest.toFixed(2),
							"balance":Balance = i==36?Math.floor(Balance):Balance.toFixed(2)
						}
						
						$scope.datax.push(strArray);
						i++;
					}

				},
				todo:function(){

				}
			}
		}
});

// Monthly Payment :572851.57464912
// Interest : 33333.333333333 
// Principal Debt : 539518.24131578 
// Balance : 19460481.758684

