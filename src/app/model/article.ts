export class Article {
  id: number;
  name: String;
  desc: String;
  price : number;
  pict: String;
  qty: number;
  tempValue:number;

constructor(id:number, name:String, desc:String,price:number, pict:String, qty:number, tempValue:number,)
{
this.id = id;
this.name=name;
this.desc=desc;
this.price=price;
this.pict=pict;
this.qty=qty;
this.tempValue=tempValue;
}

};
