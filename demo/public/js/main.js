$(document).ready(function() {
    
    var remove = function remove(id) {
    	bw.models.album.delete(id).then(function(deleted) {    		
    		$("#row-" + id).remove();
    	});
    };

    Handlebars.registerPartial("album-row", $("#album-row").html());    
    var renderTable = Handlebars.compile($("#album-table").html());
	var renderRow = Handlebars.compile($("#album-row").html());

    $('#newAlbum').submit(function(event) {
		event.preventDefault();    	
    	
    	bw.models.album.create({name: $('#albumName').val()}).then(function(newAlbum) {
    		$('#albumName').val('');
			$("#albumContent").append(renderRow(newAlbum));
			$('#' + newAlbum.id).click(function(){
    			remove($(this).attr('id'));
    		});
    	});
    	
    });

	console.log('initializing SDK...');
    BrightWork.initialize('33d9d18fe59044d098176b6c7654be14', 'photos', 'http://api.brightwork.dev', 'http://photos.brightwork.dev:8000').then(function(){
		console.log('...SDK initialized');    	

    	bw.models.album.find().then(function(albums) {
    		$("#albumContent").append(renderTable({albums: albums}));
    		$(".btn-danger").click(function(){
    			remove($(this).attr('id'));
    		});
    	});
    });
});