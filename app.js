var app = angular.module("myApp", ['ngSanitize'])
	.controller("mainController", function($rootScope, $scope, $filter){

		$rootScope.selected = {};
		$scope.newCar = {};
		$scope.currentPage = 0;
		$scope.pageSelected = 0;
		$scope.search = "";
		$scope.pageNumber = "";
		$scope.pageSize = 5;

		$rootScope.items = [{
			"combustivel" : "Flex",
			"imagem" : null,
			"marca" : "Volkswagem",
			"modelo" : "Gol",
			"placa" : "FFF-5498",
			"valor" : "20000"
		},{
			"combustivel" : "Gasolina",
			"imagem" : null,
			"marca" : "Volkswagem",
			"modelo" : "Fox",
			"placa" : "FOX-4125",
			"valor" : "20000"
		},{
			"combustivel" : "Alcool",
			"imagem" : "http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg",
			"marca" : "Volkswagen",
			"modelo" : "Fusca",
			"placa" : "PAI-4121",
			"valor" : "20000"
		}];

		$scope.save = function() {
			$('#new_car').modal('hide');
			
			if( $scope.addNew.$valid ) {

				if( $scope.newCar.valor !== null && $scope.newCar.valor !== undefined ) {
					$scope.newCar.valor = $scope.newCar.valor.replace(".","").replace(",","");
				}
				
				if( $scope.newCar.placa !== null && $scope.newCar.placa !== undefined ) {
					$scope.newCar.placa = $scope.newCar.placa.replace("-","");
				}

				$rootScope.items.push($scope.newCar);
				
				setTimeout(function() {
					$scope.newCar = {};
					$scope.addNew.$setUntouched();
					$scope.$apply();
				},0)
			}
		};

		$scope.update = function() {
			$rootScope.items.filter(function(item) {
				if( item.id == $rootScope.selected.id ) {
					$('#update_car').modal('hide');
					item = $rootScope.selected;
				}
			})
		};

		$scope.clearSearch = function() {
			$scope.search = "";
		}

		$scope.getData = function () {
	      	return $filter('filter')($rootScope.items, $scope.search)
	  	}

	  	$scope.numberOfPages = function() {
	        return new Array( Math.ceil($scope.getData().length / $scope.pageSize) );                
	    }

	    $scope.prevPage = function() {
	    	if($scope.currentPage > 0) {
	    		$scope.currentPage = $scope.currentPage - 1;
	    		$scope.pageSelected = $scope.currentPage;
	    	}
	    }

	    $scope.nextPage = function() {
	    	if($scope.currentPage < $scope.getData().length / $scope.pageSize - 1) {
	    		$scope.currentPage = $scope.currentPage + 1;
	    		$scope.pageSelected = $scope.currentPage;
	    	}
	    }

	    $scope.goToPage = function(index) {
	    	$scope.currentPage = index;
	    	$scope.pageSelected = index;
	    }
	})
	.controller("carController", function($rootScope, $scope){
		$scope.get = function(item) {
			$rootScope.selected = item;
		};
		$scope.delete = function() {
			$scope.items.splice($scope.items.indexOf($rootScope.selected), 1);
		};
	})