window.onload = init;
     

function init() {

    var store2550SvgUrl = "2550_v2.svg";

    $.get(store2550SvgUrl).then(function(response) {
        svgDocument = $(response.documentElement);
        /*var gTags = $(response.documentElement).find('#viewport').children();
        //using the underscore to iterate and remove the unnecessary layers    
        _.find(gTags, function(gTagLayer){ 
            var gTagsColor = $(gTagLayer).attr("stroke");
            var gTagsVisibility =  $(gTagLayer).attr("visibility");
            if( gTagsColor != "Black" || gTagsVisibility == "hidden"){
                $(gTagLayer).remove();
            }
       });*/
        originalWidth = svgDocument.attr("width");
        originalHeight = svgDocument.attr("height");
        svgDocument.attr("width", "100%");
        svgDocument.attr("height", "100%");
        svgDocument.attr("viewBox", "0 0 " + originalWidth + " " + originalHeight);
        
        $("#svgContainer").append(svgDocument);
        currentViewBoxValues = [0, 0, originalWidth, originalHeight];
        
        //d3.select('svg g').attr("transform", "translate(-" + originalWidth/2 + ",-" + originalHeight/2 + ") scale(2)")
        d3.select("#svgContainer svg")
                    .call(d3.behavior.zoom().on("zoom", function () {
                        $('svg').children().attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")")
                    }));
    });
}


