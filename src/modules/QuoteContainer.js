import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

class QuoteContainer {
  constructor() {
    this.loadingSpinner = new LoadingSpinner();
    this.errorMessage = new ErrorMessage();
    this.quotes = [];
    this.randomQuote = null;
  }
  
  fetchQuotes() {
    this.loadingSpinner.renderLoadingSpinner('main');
    axios.get('https://autumnchris-quotes-api.onrender.com/api/quotes').then(response => {
      this.quotes = response.data;
      this.loadingSpinner.removeLoadingSpinner('main');
      this.getNewQuote();
    }).catch(() => {
      this.loadingSpinner.removeLoadingSpinner('main');
      this.errorMessage.renderErrorMessage('Unable to load a new quote at this time.', 'main');
    });
  }

  getNewQuote() {
    const randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    
    if (!this.randomQuote || this.randomQuote._id !== randomQuote._id) {
      this.randomQuote = randomQuote;
      this.removeQuoteContainer('main');
      this.removeNewQuoteButton('main');
      this.renderQuoteContainer(randomQuote, 'main');
      this.renderNewQuoteButton('main');
    }
    else {
      this.getNewQuote();
    }
  }

  // DOM methods
  renderNewQuoteButton(location) {
    const newQuoteButton = document.createElement('button');
    newQuoteButton.setAttribute('type', 'button');
    newQuoteButton.classList.add('button', 'new-quote');
    newQuoteButton.innerHTML = `New Quote`;
    document.querySelector(location).appendChild(newQuoteButton);
  }

  removeNewQuoteButton(location) {
    const newQuoteButton = document.querySelector(`${location} .button.new-quote`);
    newQuoteButton ? document.querySelector(location).removeChild(newQuoteButton) : null;
  }

  renderQuoteContainer(randomQuote, location) {
    const quoteContainer = document.createElement('div');
    quoteContainer.classList.add('quote-container');
    quoteContainer.innerHTML = `
      <div class="quote">
        <span class="fa fa-quote-left" aria-hidden="true"></span>
        <q> ${randomQuote.quote} </q>
        <span class="fa fa-quote-right" aria-hidden="true"></span>
      </div>
      <div class="source">&mdash; ${randomQuote.source}</div>
      <div class="tweet-container">
        <a class="button tweet" href="https://twitter.com/intent/tweet?text=${randomQuote.quote} — ${randomQuote.source}" target="_blank"><span class="fab fa-twitter fa-fw" aria-hidden="true"></span> Tweet</a>
      </div>
    `;
    document.querySelector(location).appendChild(quoteContainer);
  }

  removeQuoteContainer(location) {
    const quoteContainer = document.querySelector(`${location} .quote-container`);
    quoteContainer ? document.querySelector(location).removeChild(quoteContainer) : null;
  }
}

export default QuoteContainer;