$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": '../sampleData.txt'
    } );
    
    $('#snowyTable').DataTable( {
        "ajax": '../snowyArray.txt'
    } );
    
    
} );