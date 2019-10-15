$( "document" ).ready(function() {
//do pig latin translation
    $("button").click(function() {
        let word=$(".input").val();
        $(".output").append(word);
    });
});