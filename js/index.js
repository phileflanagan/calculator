var app = angular.module('app', []);

app.controller('ctrl', function($scope) {
	$scope.isNewNumber = true;
	$scope.numToOutput = ""; //string to hold nums more than single digit
	$scope.output = 0;
	$scope.total = 0;
	$scope.operator = "";
	$scope.nums = [];

	//clear button resets blank defaults
	$scope.clear = function() {
		$scope.isNewNumber = true;
		$scope.numToOutput = "";
		$scope.output = 0;
		$scope.total = 0;
		$scope.operator = "";
		$scope.nums = [];
	}

	//upon number press
	$scope.pushNum = function(num) {
		if ($scope.output === 0 || $scope.isNewNumber === true) {
			$scope.output = "";
			$scope.numToOutput += num;
			$scope.isNewNumber = false;
		} else {
			$scope.numToOutput += num;
		}
		$scope.output = parseFloat($scope.numToOutput);
	}

	//add function
	$scope.addFunc = function() {
		$scope.isNewNumber = true;
		$scope.numToOutput = "";
		$scope.nums.push($scope.output);
		$scope.output = "+"
		$scope.operator = "add";
	}

	//subtract function
	$scope.subtractFunc = function() {
		$scope.isNewNumber = true;
		$scope.numToOutput = "-";
		$scope.nums.push($scope.output);
		$scope.output = "-"
		$scope.operator = "subtract";
	}

	//divide function
	$scope.divideFunc = function() {
		$scope.isNewNumber = true;
		$scope.numToOutput = "";
		$scope.nums.push($scope.output);
		$scope.output = "/"
		$scope.operator = "divide";
	}
	
	//multiply function
	$scope.multiplyFunc = function() {
		$scope.isNewNumber = true;
		$scope.numToOutput = "";
		$scope.nums.push($scope.output);
		$scope.output = "*"
		$scope.operator = "multiply";
	}
	
	//modulus function
	$scope.modulusFunc = function() {
		$scope.isNewNumber = true;
		$scope.numToOutput = "";
		$scope.nums.push($scope.output);
		$scope.output = "%"
		$scope.operator = "modulus";
	}

	/*equals function*/
	$scope.equalsFunc = function() {
		$scope.nums.push($scope.output);
		switch ($scope.operator) {
			case "subtract":
			case "add":
				$scope.nums.forEach(function(num) {
					$scope.total += num;
				});
				$scope.output = $scope.total;
				$scope.isNewNumber = true;
				$scope.numToOutput = "";
				$scope.operator = "";
				$scope.nums = [];
				$scope.total = 0;
				break;
			case "divide":
				if ($scope.nums[0] === 0) {
					alert("error");
				} else if ($scope.total !== 0) {
					for (var i = 0; i < $scope.nums.length; i++) {
						$scope.total /= $scope.nums[i];
					}
				} else {
					$scope.total = $scope.nums[0];
					for (var i = 1; i < $scope.nums.length; i++) {
						$scope.total /= $scope.nums[i];
					}
				}
				$scope.output = $scope.total;
				$scope.isNewNumber = true;
				$scope.numToOutput = "";
				$scope.operator = "";
				$scope.nums = [];
				$scope.total = 0;
				break;
			case "multiply":
				if ($scope.total !== 0) {
					for (var i = 0; i < $scope.nums.length; i++) {
						$scope.total *= $scope.nums[i];
					}
				} else {
					$scope.total = $scope.nums[0];
					for (var i = 1; i < $scope.nums.length; i++) {
						$scope.total *= $scope.nums[i];
					}
				}
				$scope.output = $scope.total;
				$scope.isNewNumber = true;
				$scope.numToOutput = "";
				$scope.operator = "";
				$scope.nums = [];
				$scope.total = 0;
				break;
			case "modulus":
				if ($scope.total !== 0) {
					for (var i = 0; i < $scope.nums.length; i++) {
						$scope.total %= $scope.nums[i];
					}
				} else {
					$scope.total = $scope.nums[0];
					for (var i = 1; i < $scope.nums.length; i++) {
						$scope.total %= $scope.nums[i];
					}
				}
				$scope.output = $scope.total;
				$scope.isNewNumber = true;
				$scope.numToOutput = "";
				$scope.operator = "";
				$scope.nums = [];
				$scope.total = 0;
				break;
		}
	}

});