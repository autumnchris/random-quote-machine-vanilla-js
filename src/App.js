import Header from './modules/Header';
import Footer from './modules/Footer';
import LoadingSpinner from './modules/LoadingSpinner';
import QuoteContainer from './modules/QuoteContainer';


class App {
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.loadingSpinner = new LoadingSpinner();
    this.quoteContainer = new QuoteContainer();
    this.renderApp();
    this.events();
  }

  // Event listeners
  events() {
    document.addEventListener('click', event => {
      const element = event.target;
      element.matches('.button.new-quote') ? this.quoteContainer.getNewQuote() : null;
    });
  }

  // DOM methods
  renderApp() {
    this.header.renderHeader('#app');
    this.renderMain('#app');
    this.footer.renderFooter('#app');
    this.loadingSpinner.renderLoadingSpinner('main');
    this.quoteContainer.fetchQuotes();
  }

  renderMain(location) {
    const main = document.createElement('main');
    document.querySelector(location).appendChild(main);
  }
}

export default App;