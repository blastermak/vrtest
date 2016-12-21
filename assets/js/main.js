$(document).ready(function() {
	$("#linksBox").on("click", function(){
		cursorClick();
		$(this).attr("color","blue");
	});
	$("#rechtsBox").on("click", function(){
		cursorClick();
		$(this).attr("color","blue");
	});
	
	
});


function cursorClick() {
    // Trigger de cursor om de klik animatie uit te voeren
    document.querySelector('#cursor').emit('cursorclick');
}