const quotes = [
  {
    quote : 'Existence precedes essence.', 
    source : 'Jean-Paul Sartre',
    citation : 'Existentialism is a Humanism',
    date : 1946,
    tags : ['wisdom', 'life', 'philosophy']
  },

  {
    quote : 'I think, therefore I am.', 
    source : 'René Descartes',
    citation : 'Discourse on the Method',
    date : 1637,
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
]

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

