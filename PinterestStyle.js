$.fn.PinterestStyle = function (columns) {
    $(this).each(function () {
        var Width = parseInt($(this).css("width"));
        var HeightTotal = 0;
        var alturas = new Array(columns);
        for (var x = 0; x < alturas.length; x++)
            alturas[x] = 0;
        $(this).children().each(function () {
            var col = 0;
            for (var x = 0; x < alturas.length; x++) {
                if (alturas[x] < alturas[col])
                    col = x;
            }
            var Ancho = Width / columns;
            $(this).css("left", (col * Ancho) + "px");
            $(this).css("position", "relative");
            $(this).css("width", Ancho + "px");
            $(this).css("top", "-" + (HeightTotal - alturas[col]) + "px");
            $(this).css("box-sizing", "border-box");
            alturas[col] += parseInt($(this).css("height"));
            HeightTotal += parseInt($(this).css("height"));
        });
        var alturaMaxima = 0;
        for (var x = 0; x < alturas.length; x++) {
            if (alturas[x] > alturaMaxima)
                alturaMaxima = alturas[x];
        }
        $(this).css("height", alturaMaxima + "px");
    });
    return this;
}
