$.ajax({
  dataType: 'json',
  url: 'db/quotes.min.json'
}).done(function(data) {

  function newQuote() {
    var randomQuote = data[Math.floor(Math.random() * data.length)];
    var quoteDiv = '<span class="fa fa-quote-left"></span>' +
    '<q>&nbsp;' + randomQuote.quote + '&nbsp;</q>' +
    '<span class="fa fa-quote-right"></span>' +
    '<div id="source">&mdash; ' + randomQuote.source + '</div>' +
    '<div class="text-right">' +
      '<a class="btn" href="" target="_blank" id="tweet"><span class="fa fa-twitter fa-lg"></span>&nbsp;Tweet</a>' +
    '</div>';
    $('.well').html(quoteDiv);
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + '\"' + randomQuote.quote + '\"' + ' — ' + randomQuote.source);
  }

  newQuote();

  $('#new-quote').click(function() {
    newQuote();
  });
}).fail(function() {
  $('.well').html('<div class="alert alert-warning text-center"><span class="fa fa-warning fa-lg fa-fw"></span> Unable to load a new quote.</div>');
});
