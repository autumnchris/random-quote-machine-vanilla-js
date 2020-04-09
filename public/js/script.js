function getQuote() {

  axios.get('/api/new-quote').then(randomQuote => {
    const quoteDiv = `<div class="quote">
      <span class="fa fa-quote-left"></span>
      <q> ${randomQuote.data.quote} </q>
      <span class="fa fa-quote-right"></span>
    </div>
    <div class="source">&mdash; ${randomQuote.data.source}</div>
    <div class="tweet-div">
      <a class="tweet" href="" target="_blank"><span class="fab fa-twitter fa-fw"></span> Tweet</a>
    </div>`;
    document.querySelector('.card').innerHTML = quoteDiv;
    document.querySelector('.tweet').setAttribute('href', `https://twitter.com/intent/tweet?text="${randomQuote.data.quote}" — ${randomQuote.data.source}`);
  }).catch(() => {
    document.querySelector('.card').style.display = 'none';
    document.querySelector('.error-message').style.display = 'block';
  });
}

getQuote();

document.querySelector('.new-quote').addEventListener('click', () => {
  getQuote();
});
