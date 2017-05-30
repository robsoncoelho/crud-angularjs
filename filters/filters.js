app.filter('startFrom', function() {
    return function(input, start) {
        start = + start; //parse to int
        return input.slice( start );
    }
}).filter('myFormat', function() {
    return function(x, y) {
    	var result = [];
    	if( y !== "" ) {
	        for (var i = 0; i < x.length; i++) {
	            if( x[i].modelo.toLowerCase().indexOf(y.toLowerCase()) >= 0 || x[i].combustivel.toLowerCase().indexOf(y.toLowerCase()) >= 0 ) {
	            	result.push(x[i]);
	            }
	        }
	    }

        if( result == "" && y == "" ) {
        	return x;
        } else {
    		return result;
    	}
    }
})