import { NewQuote } from './new-quote';
import { QuoteContainer } from './quote-container';

const App = (() => {

  function renderApp() {
    document.getElementById('app').innerHTML = `
    <header>
      <h1>Inspirational Quotes</h1>
    </header>
    <main></main>
    <footer>Created by <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard</a> &copy; ${new Date().getFullYear()}</footer>`;

    QuoteContainer.renderLoadingSpinner();
    NewQuote.fetchQuotes();

    document.addEventListener('click', event => {
       const element = event.target;
       element.matches('.new-quote') ? NewQuote.getQuote() : null;
    });
  }

  return {
    renderApp
  };
})();

export { App };
