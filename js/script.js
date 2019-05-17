let quotes = [
  {
    quote : 'Existence precedes essence.', 
    source : 'Jean-Paul Sartre',
    citation : 'Existentialism is a Humanism',
    year : 1946,
    tags : ['wisdom', 'life', 'philosophy']
  },

  {
    quote : 'I think, therefore I am.', 
    source : 'René Descartes',
    citation : 'Discourse on the Method',
    year : 1637,
    tags : ['life', 'philosophy']
  },

  {
    quote : 'Don\'t cry because it\'s over, smile because it happened.', 
    source : 'Dr. Seuss',
    tags : ['optimism', 'sadness', 'smile']
  },

  {
    quote : 'So many books, so little time.', 
    source : 'Frank Zappa',
    tags : ['books', 'humor'] 
  },

  {
    quote : 'A room without books is like a body without a soul.', 
    source : 'Marcus Tullius Cicero',
    tags : ['books', 'similie', 'soul']
  }
];

const colors = [
  '#483c46',
  '#3c6e71',
  '#70ae6e',
  '#e6d246',
  '#f4743b'
];

let timer;

let lastQuote;

let pastQuotes = [];

const randIdx = arr => Math.floor(Math.random()*arr.length);

const setTimer = () => {
  printQuote();
  clearInterval(timer);
  timer = setInterval(printQuote, 5000);
}

const setBackgroundColor = () => {
  const color = colors[randIdx(colors)];
  document.body.style.background = color;
}

const getRandomQuote = () => {
  return quotes[randIdx(quotes)];
}

const printQuote = () => {
  // set quote, but check equality for very last quote selected  
  let quote = getRandomQuote();
  while (quote === lastQuote) quote = getRandomQuote();

  // find idx of quote that was selected, move quote to past quote
  const idx = quotes.map(q => q.quote).indexOf(quote.quote);
  quotes = [...quotes.slice(0, idx), ...quotes.slice(idx+1)];
  pastQuotes.push(quote);

  // reset quotes and clear pastQuotes, if all have been selected
  // set very last quote to curr quote to avoid repeat after reset
  if (!quotes.length) {
    quotes = [...pastQuotes];
    pastQuotes = [];
    lastQuote = quote;
  } else lastQuote = null;

  // being building html string
  let innerHTML = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
  `;

  // add citation, year, and tags if exist
  if (quote.citation) innerHTML += `<span class="citation">${quote.citation}</span>`;
  if (quote.year) innerHTML += `<span class="year">${quote.year}</span>`;
  if (quote.tags) {
    let as = '';
    quote.tags.forEach(t => as += `<a class="tag" href='#'>${t}</a>`);
    innerHTML += `<span> ${as}</span>`;
  }

  // close p tag
  innerHTML += '</p>';

  // add quote to dom
  document.getElementById('quote-box').innerHTML = innerHTML;

  setBackgroundColor();
}

// begin timer on page-load
setTimer();

document.getElementById('loadQuote').addEventListener("click", setTimer, false);
