import Search from './../models/Search';
import Item from './../models/Item';

export default class Factory {

  static createSearchListFromAPI(response){
    const search = new Search('Fernando', 'Arias');
    search.items = [...response.results.slice(0,4)].map( result => {
      return this.createItemFromAPI([ result ]);
    });
    if(response.filters.length > 0) {
      for( let category of response.filters[0].values[0].path_from_root){
        search.categories.unshift( category.name );
      }
    }
    return search;
  }

  static createItemFromAPI([ item, description = {} ]) {

    return new Item(
      item.id,
      item.title,
      item.currency_id,
      item.price,
      item.decimals,
      item.thumbnail,
      item.condition,
      item.shipping.free_shipping,
      item.sold_quantity,
      description.plain_text
    );
  }
}