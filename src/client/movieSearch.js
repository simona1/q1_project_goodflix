function movieSearch(query) {
  const options = {body: query, method: 'POST'};
  return fetch('http://localhost:3000/api/search_movies', options)
    .then(res => res.json());
}

module.exports = movieSearch;
