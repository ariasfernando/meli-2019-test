import Price from "./Price";

export default class Item {

  constructor(id, title, currency, amount, decimals = 0, picture, condition, free_shipping, sold_quantity = null, description = null ) {
  
    this.id = id;
    this.title = title;
    this.price = new Price(currency, amount, decimals);
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity;
    this.description = description;
  }

}