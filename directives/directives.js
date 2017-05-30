app.directive('row', function($sce, imageNormalize) {
	  	return {
	    	templateUrl: '/templates/list_cars.html',
	    	replace: false,
	        scope: {
	          row: '=',
	          index: '@'
	        },
		    link: function(scope, element, attr) {
		    	scope.row.id = attr.index;

		      	scope.row.imagetag = imageNormalize.normalize(scope.row.imagem);
		    }
	  	};
	})
	.directive('newCar', function() {
	  	return {
	    	templateUrl: '/templates/new_car.html'
	  	};
	})
	.directive('updateCar', function() {
	  	return {
	    	templateUrl: '/templates/update_car.html'
	  	};
	})
	.directive('deleteCar', function() {
	  	return {
	    	templateUrl: '/templates/delete_car.html'
	  	};
	})
	.directive('imagePreview', function() {
	  	return {
	    	templateUrl: '/templates/image_preview.html',
	  	};
	})
	.directive("fileread", function(imageNormalize) {
	    return {
	        scope: {
	            fileread: "=",
	            rawimage: "=",
	        },
	        link: function (scope, element, attributes) {
	            element.bind("change", function (changeEvent) {
	                var reader = new FileReader();
	                reader.onload = function (loadEvent) {
	                    scope.$apply(function () {
	                    	scope.rawimage = loadEvent.target.result;
	                        scope.fileread = imageNormalize.normalize(loadEvent.target.result);
	                    });
	                }
	                reader.readAsDataURL(changeEvent.target.files[0]);
	            });
	        }
	    }
	});


