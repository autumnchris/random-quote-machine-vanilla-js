import axios from 'axios';

const App = (() => {

  function getQuote() {
    axios.get('/api/new-quote').then(randomQuote => {
      document.getElementById('app').innerHTML = `
      <div class="quote-container">
        <div class="quote">
          <span class="fa fa-quote-left"></span>
            <q> ${randomQuote.data.quote} </q>
          <span class="fa fa-quote-right"></span>
        </div>
        <div class="source">&mdash; ${randomQuote.data.source}</div>
        <div class="tweet-container">
          <a class="button tweet" href="https://twitter.com/intent/tweet?text=${randomQuote.data.quote} — ${randomQuote.data.source}" target="_blank"><span class="fab fa-twitter fa-fw"></span> Tweet</a>
        </div>
      </div>
      <button type="button" class="button new-quote">New Quote</button>`;
    }).catch(() => {
      document.getElementById('app').innerHTML = `<p class="message error-message"><span class="fa fa-exclamation-circle fa-lg fa-fw"></span> Unable to load a new quote at this time.</p>`;
    });
  }

  function renderApp() {
    getQuote();

    document.addEventListener('click', event => {
      const element = event.target;
      element.matches('.new-quote') ? getQuote() : null;
    });
  }

  return {
    renderApp
  };
})();

export { App };
