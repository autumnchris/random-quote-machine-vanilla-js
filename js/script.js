$.ajax({
  dataType: 'json',
  url: 'db/quotes.min.json'
}).done(data => {

  function getQuote() {
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    const quoteDiv = `<div class="quote">
      <span class="fa fa-quote-left"></span>
      <q> ${randomQuote.quote} </q>
      <span class="fa fa-quote-right"></span>
    </div>
    <div class="source">&mdash; ${randomQuote.source}</div>
    <div class="tweet-button">
      <a class="tweet" href="" target="_blank"><span class="fab fa-twitter"></span> Tweet</a>
    </div>`;
    $('.card').html(quoteDiv);
    $('.tweet').attr('href', `https://twitter.com/intent/tweet?text="${randomQuote.quote}" — ${randomQuote.source}`);
  }

  getQuote();

  $('.new-quote').click(() => {
    getQuote();
  });
}).fail(() => {
  $('body').html('<div class="error-message"><span class="fa fa-exclamation-triangle fa-lg fa-fw"></span> Unable to load a new quote.</div>');
});
