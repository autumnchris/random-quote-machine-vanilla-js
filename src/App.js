import Header from './modules/Header';
import Footer from './modules/Footer';
import QuoteContainer from './modules/QuoteContainer';


class App {
  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.quoteContainer = new QuoteContainer();
    this.renderApp();
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
    this.quoteContainer.fetchQuotes();
    this.events();
  }

  renderMain(location) {
    const main = document.createElement('main');
    document.querySelector(location).appendChild(main);
  }
}

export default App;