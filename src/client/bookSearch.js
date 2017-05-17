function bookSearch(query) {
  const options = {body: query, method: 'POST'};
  return fetch('http://localhost:3000/api/search_books', options)
    .then(res => res.json());
}

module.exports = bookSearch;
