const quotes = [
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

const getRandomQuote = () => {
  const randIdx = Math.floor(Math.random()*quotes.length);
  return quotes[randIdx];
}

const printQuote = () => {
  const { 
    quote, 
    source, 
    citation, 
    year, 
    tags 
  } = getRandomQuote();

  // being building html string
  let innerHTML = `
    <p class="quote">${quote}</p>
    <p class="source">${source}
  `;

  // add citation and year if either exist
  if (citation) innerHTML += `<span class="citation">${citation}</span>`;
  if (year) innerHTML += `<span class="year">${year}</span>`;

  // close p tag
  innerHTML += '</p>';

  // add quote to dom
  document.getElementById('quote-box').innerHTML = innerHTML;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

