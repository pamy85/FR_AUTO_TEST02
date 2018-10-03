const RyanairHomePage = function RyanairHomePage() {
    this.url = 'dev/testeo-api-rest-mocha-chai-http/';
    this.amIOnPage = 'input.text';

    // SELECTORS
    this.smallLensButton =  'a.trigger';
    this.searchBoxField = 'input.text';
    this.searchForm = 'form.inputWithButton';
    this.searchList = 'article.post_search_list h2 a';
    this.postAuthor = 'a.author';
};

module.exports = {
  class: RyanairHomePage,
  name: 'RyanairHome',
};
