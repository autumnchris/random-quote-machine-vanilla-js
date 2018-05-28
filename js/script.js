function getQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const quoteDiv = `<div class="quote">
    <span class="fa fa-quote-left"></span>
    <q> ${randomQuote.quote} </q>
    <span class="fa fa-quote-right"></span>
  </div>
  <div class="source">&mdash; ${randomQuote.source}</div>
  <div class="tweet-button">
    <a class="tweet" href="" target="_blank"><span class="fab fa-twitter"></span> Tweet</a>
  </div>`;
  document.querySelector('.card').innerHTML = quoteDiv;
  document.querySelector('.tweet').setAttribute('href', `https://twitter.com/intent/tweet?text="${randomQuote.quote}" — ${randomQuote.source}`);
}

getQuote();

document.querySelector('.new-quote').addEventListener('click', () => {
  getQuote();
});
