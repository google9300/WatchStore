export class shoppingItem {
  public name: string;
  public collection: string;
  public subCollection: string;
  public imagePath: string;
  public price: number;

  constructor(
    name: string,
    collection: string,
    subCollection: string,
    imagePath: string,
    price: number
  ) 
  {
    this.name = name;
    this.collection = collection;
    this.subCollection = subCollection;
    this.imagePath = imagePath;
    this.price = price;
  }
}
