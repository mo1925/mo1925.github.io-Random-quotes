var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

function getQuote(data) {
  $("#quote").text(data.quoteText);
    if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
        
  }
  $("#author").text('Author: ' + data.quoteAuthor);  
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});

$("#newQuote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});