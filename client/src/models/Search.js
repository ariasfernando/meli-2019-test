import Author from './Author';

export default class Search {

  constructor(authorName, authorLastName, categories = [], items = []){
    this.author = new Author(authorName, authorLastName);
    this.categories = categories;
    this.items = items;
  }
}