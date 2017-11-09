$(document).ready(function() {

    $('#snowyTable').DataTable( {
        "ajax": 'data/snowyArray.txt'
    } );
    
    
} );