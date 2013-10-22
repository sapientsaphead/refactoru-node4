$(function(){
        var source   = $("#search-results-template").html();
        var searchTemplate = Handlebars.compile(source);
        var $results = $('#results')

        $('#search').on('keyup', function(e){
                if(e.keyCode === 13){
                        // do something
                        var val = $(this).val()
                        console.log("val variable", val)
                        $(this).val("");
                        //route url, data that you're sending to server, 
                        // {search:val} = /search?search=val
                        // callback - the function
                        $.get('/search', {search : val}, function(data){
                                console.log("weird object - data", {search : val});
                                //data is not getting anything - where is it supposed to get 
                                //value from?
                                console.log("i should be a key value pair",data)
                                $results.html(searchTemplate(data))
                        });
                }
        });
});