var im = require('imagemagick');
var path = require('path');

window.ondragover = function(e) { e.preventDefault(); return false; }

var el = document.querySelector('#drop');
	el.ondragover = function () {
		this.className = "hover";
		this.innerHTML = "Drop the file";
		return false;
	}
el.ondragleave = function () {
	this.className = "";
		this.innerHTML = "Drop the file";
		return false;
}
el.ondrop = function (e) {
	e.preventDefault();
	for (var i = 0; i < e.dataTransfer.files.length; ++i){
		var file = e.dataTransfer.files[i].path;
		var output = path.dirname(file) + path.sep + "icon.jpg";
		im.convert([file, '-resize', '50x50', output], function(err,stdout){
			console.log('stdout:',stdout);
		})
	}
}