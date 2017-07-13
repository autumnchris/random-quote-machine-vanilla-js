$.getJSON('js/quotes.json', function(data) {

  function newQuote() {
    var randomQuote = data[Math.floor(Math.random() * data.length)];
    $('q').html(randomQuote.quote);
    $('#source').html('&mdash; ' + randomQuote.source);
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + '\"' + randomQuote.quote + '\"' + ' — ' + randomQuote.source);
  }

  newQuote();

  $('#new-quote').click(function() {
    newQuote();
  });
});
