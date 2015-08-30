


	//$( document ).on( "pageinit", "#pageone", function() {
	$( document ).on( "pageinit", function() {
	
		
		//$( document ).on( "swipeleft swiperight", "#pageone", function( e ) {
		$( document ).on( "swipeleft swiperight", function( e ) {
			// We check if there is no open panel on the page because otherwise
			// a swipe to close the left panel would also open the right panel (and v.v.).
			// We do this by checking the data that the framework stores on the page element (panel: open).
			if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
				if ( e.type === "swipeleft"  ) {
					$( "#right-panel" ).panel( "open" );
				} else if ( e.type === "swiperight" ) {
					$( "#left-panel" ).panel( "open" );
				}
			}
		});
		 
 
 
 
		//$('.headerChild').load('top-menu.html')
	 
		//$( "[data-role='navbar']" ).navbar();
	 
	 
		// $( "[data-role='header'], [data-role='footer']" ).toolbar();
		
		$( "[data-role='header']" ).toolbar();
			  
			  
		$(document).on('pagebeforecreate', function () {
		
			 
			var panel = $('#left-panel')[0].outerHTML;
		
			$.mobile.pageContainer.prepend(panel);
			
			$("#left-panel").panel().enhanceWithin();
			
			//$('#pageone').find('[data-role=panel]').panel('open');
			
		});
		
		

	});
	
		
	/*	
	
	$( document ).on( "pagecontainershow", function() {
		// Each of the four pages in this demo has a data-title attribute
		// which value is equal to the text of the nav button
		// For example, on first page: <div data-role="page" data-title="Info">
		var current = $( ".ui-page-active" ).jqmData( "title" );
		// Change the heading
		$( "[data-role='header'] h1" ).text( current );
		// Remove active class from nav buttons
		$( "[data-role='navbar'] a.ui-btn-active" ).removeClass( "ui-btn-active" );
		// Add active class to current nav button
		$( "[data-role='navbar'] a" ).each(function() {
			if ( $( this ).text() === current ) {
				$( this ).addClass( "ui-btn-active" );
			}
		});
	});
	
	*/