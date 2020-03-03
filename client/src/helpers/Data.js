import Search from "../models/Search";
import Item from "../models/Item";

export default class Data {

  static URL() { 
    return `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/api/items`
  };

  static getResults( search ) {
    let endpoint = `${Data.URL()}?q=${search}`;
    return fetch(endpoint)
      .catch( () => {
        throw new Error() 
      })
      .then( res => res.json())
      .then( res => Object.assign(new Search(), res) )
  }

  static getItem( id ){
    let endpoint = `${Data.URL()}/${id}`;
    return fetch(endpoint)
      .catch( () => {
        throw new Error()
      })
      .then( res => res.json())
      .then( res => Object.assign(new Item(), res) )
  }
}