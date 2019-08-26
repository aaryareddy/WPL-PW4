$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "books.xml",
        dataType: "xml",
        success: function (xml) {
           
            $(xml).find('book').each(function () {
                var Category = $(this).attr('category');
                var Titles = $(this).find('title').text();
                var Year = $(this).find('year').text();
                var Price = $(this).find('price').text();
                var Author = "";
                $(this).find("author").each(function(){
                    var name = $(this).text();
                    Author = Author + name + ", ";
                });
                    $("tbody").append('<tr><td>' + Titles + '</td>' +
                     '<td>' + Author.substring(0, Author.length-2) + '</td>' + 
                     '<td>' + Year + '</td>' +
                     '<td>' + Price + '</td>' +
                     '<td>' + Category + '</td></tr>'
                     );
            });   
        },
        error: function(){
            alert("could not find the xml file");
                   }
    });
});