$(document).ready(function() {

    var remove = function remove(id) {
        bw.models.album.delete(id).then(function(deleted) {
            $(".row-" + id).remove();
        });
    };

    $("#albumContent, #albumByLetterContent").on('click', '.btn-danger', function(){
        remove($(this).attr('id'));
    });

    Handlebars.registerPartial("album-row", $("#album-row").html());
    var renderTable = Handlebars.compile($("#album-table").html());
    var renderRow = Handlebars.compile($("#album-row").html());

    $('#newAlbum').submit(function(event) {
        event.preventDefault();
        bw.models.album.create({name: $("#albumName").val()}).then(function(newAlbum) {
            $("#albumName").val('');
            $("#albumContent").append(renderRow(newAlbum));
        });
    });

    $('#newLetter').submit(function(event) {
        event.preventDefault();
        $("#albumByLetterContent").html('');
        console.log("Finding albums that start with ", $('#letter').val());
        var query = BrightWork.query().startsWith('name', $('#letter').val());
        bw.models.album.find(query).then(function(albums) {
            $("#letter").val('');
            $("#albumByLetterContent").append(renderTable({albums: albums}));
        });
    });

    console.log('initializing SDK...');
    BrightWork.initialize('YOUR-API-KEY', 'YOUR-APP-NAME').then(function(){
        console.log('...SDK initialized');
        bw.models.album.find().then(function(albums) {
            $("#albumContent").append(renderTable({albums: albums}));
        });
    });
});
