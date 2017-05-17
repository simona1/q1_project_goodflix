function fakeSearch(query) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {title: 'hunger games'},
        {title: 'cloud atlas'},
        {title: 'the alchemist'},
      ].filter(book => book.title === query));
    }, 1000);
  });
}

module.exports = fakeSearch;
