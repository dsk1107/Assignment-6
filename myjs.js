$(document).ready( function() {
	var pro = 0;
	var count = 0;
	
	$( "#image" ).click(function() {
		$(this).animate({
			width: 400
		}, 1000),
		$("#enlarge").hide();
	
	});
	
	$( ".draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        count ++;
		$( this )
			  .addClass( "ui-state-highlight" )
			  .find( "p" )
				.html( count + " item(s) collected" ),
		progress()
      }
	 
    });  
	$( "#progressbar" ).progressbar({
      value: count,
	  complete: function(event, ui) {
		$(this).effect("shake", 300)
		$("#directionsArea").show("slide", 600)
	  }
    });
	
	function progress() {
		pro += 15;
		$("#progressbar").progressbar( "value", pro);
	}
	
});
