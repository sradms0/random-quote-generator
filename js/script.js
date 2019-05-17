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

const colors = [
  '#483c46',
  '#3c6e71',
  '#70ae6e',
  '#e6d246',
  '#f4743b'
];

let timer;

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

  // add citation, year, and tags if exist
  if (citation) innerHTML += `<span class="citation">${citation}</span>`;
  if (year) innerHTML += `<span class="year">${year}</span>`;
  if (tags) {
    let as = '';
    tags.forEach(t => as += `<a class="tag" href='#'>${t}</a>`);
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
