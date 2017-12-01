var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

function getQuote(data) {
  $("#quote").text(data.quoteText);
    if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
        
  }
  $("#author").text('Author: ' + data.quoteAuthor);
    $('#shareQuote').on('click', function(){
        window.open('https://twitter.com/intent/tweet?text='+ encodeURIComponent(data.quoteText)+' Said by -- '+ data.quoteAuthor);
    });

};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});

$("#newQuote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

//use event delegation