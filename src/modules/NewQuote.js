import axios from 'axios';
import { QuoteContainer } from './QuoteContainer';

const NewQuote = (() => {
  let quotes = [];

  function fetchQuotes() {
    axios.get('https://autumnchris-quotes-api.onrender.com/api/quotes').then(response => {
      quotes = response.data;
      QuoteContainer.removeLoadingSpinner();
      getQuote();
    }).catch(() => {
      QuoteContainer.removeLoadingSpinner();
      QuoteContainer.renderErrorMessage();
    });
  }

  function getQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    QuoteContainer.renderQuoteContainer(randomQuote);
  }

return {
  fetchQuotes,
  getQuote
};
})();

export { NewQuote };
