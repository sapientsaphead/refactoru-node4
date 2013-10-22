$(function(){
        var source = $("#magellanStops").html();
        var routeTemplate = Handlebars.compile(source);
        var $results = $('#results');

        $.get('/route', {name : 'Seville'}, function(data){
                // pre-populates index with Seville object
                $results.html(routeTemplate(data))
        });

        $(document).on('click', 'button', function(e){
                // gets data-stop value
                var stop = $('button').data('stop');
                // uses data-stop value to get object with that id
                $.get('/route', {name : stop}, function(data){
                        $results.html(routeTemplate(data))
                });
        });
});