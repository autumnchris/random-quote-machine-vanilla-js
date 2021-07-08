const QuoteContainer = (() => {

  function renderLoadingSpinner() {
    const loadingSpinner = document.createElement('div');
    loadingSpinner.classList.add('loading-spinner');
    loadingSpinner.setAttribute('aria-label', 'Loading...');

    document.querySelector('main').appendChild(loadingSpinner);
  }

  function removeLoadingSpinner() {
    const loadingSpinner = document.querySelector('.loading-spinner');
    loadingSpinner ? document.querySelector('main').removeChild(loadingSpinner) : null;
  }

  function renderErrorMessage() {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('message', 'error-message');
    errorMessage.innerHTML = `<span class="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load a new quote at this time.`;

    document.querySelector('main').appendChild(errorMessage);
  }

  function renderQuoteContainer(randomQuote) {
    document.querySelector('main').innerHTML = `
    <div class="quote-container">
      <div class="quote">
        <span class="fa fa-quote-left"></span>
        <q> ${randomQuote.quote} </q>
        <span class="fa fa-quote-right"></span>
      </div>
      <div class="source">&mdash; ${randomQuote.source}</div>
      <div class="tweet-container">
        <a class="button tweet" href="$https://twitter.com/intent/tweet?text=${randomQuote.quote} — ${randomQuote.source}" target="_blank"><span class="fab fa-twitter fa-fw"></span> Tweet</a>
      </div>
    </div>
    <button type="button" class="button new-quote">New Quote</button>`;
  }

  return {
    renderLoadingSpinner,
    removeLoadingSpinner,
    renderErrorMessage,
    renderQuoteContainer
  };
})();

export { QuoteContainer };
