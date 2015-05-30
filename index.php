<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>


<script type="text/javascript" src="js/angular.min.js"></script>
<script type="text/javascript" src="js/angular.min.js.map"></script>
<script type="text/javascript" src="js/jquery-1.3.2.min.js"></script>
<script type="text/javascript" src="js/payment.js"></script>
<body>
	<div ng-app='myApp'>
		<div ng-controller='test'>
			Loan : <input ng-model='loan' type="text" value="20000000"><br>
			Tenor : <input ng-model='tenor' type="text" value="36">
			<div></div>
			<button ng-click='Output()'>Output</button>
			<button ng-click='Clear()'>Clear</button>
			<button ng-click='Save()'>Save</button>
			<br>
			<br>
			<br>
			<table width="100%" border="1">
				<tr>
					<td>No</td>
					<td>Monthly Payment</td>
					<td>Principal Debt</td>
					<td>Interest</td>
					<td>Balance</td>
				</tr>
				<tr id="firstRow">
					
				</tr>
				<tr ng-repeat='data in datax'>
					<td>{{ data.no }}</td>
					<td>{{ data.angsuran }}</td>
					<td>{{ data.debt }}</td>
					<td>{{ data.interest }}</td>
					<td>{{ data.balance }}</td>
				</tr>
			</table>
		</div>
	</div>

</body>
</html>