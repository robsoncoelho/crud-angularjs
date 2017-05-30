app.service('imageNormalize', function($sce) {
	this.normalize = function (elem) {
        if (elem !== null && elem !== undefined) {
      		elem = $sce.trustAsHtml('<a ng-href="#image_preview" data-toggle="modal" data-target="#image_preview">Imagem</a>');
      	} else {
      		elem = $sce.trustAsHtml('<span>Sem foto </span>');
      	}
      	return elem;
      }
 });