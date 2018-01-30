$.fn.clickToggle = function(a, b) {
	var ab=[b,a];
	$(this).each(function() {
		function cb(){ ab[this._tog^=1].call(this); }
		return $(this).on("click", cb);
	});
};