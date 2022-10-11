

abstract class  Restauracja{
 readonly name: string;
 private pizzainOrder: string[]=[];
private maxPizzasInOven: number=10;
protected Recipies: string[]=[];

static id =0;
constructor(name:string, id:number){
    this.name=name;
    this.id = Restauracja.id++
   
}
public order(pizza: string){

 this.pizzainOrder.push(pizza);
}
private isOvenFull():boolean{
    return this.pizzainOrder.length>=this.maxPizzasInOven;

}
private _manager="jan";
get manager(){
    return this._manager;
}
set manager(manager){
    this._manager=manager;
}
abstract bake();

}
/*
const dagrasso: Restauracja= new Restauracja("dagrasso");
dagrasso.order("margarita");

console.log(dagrasso);
dagrasso.manager = "Ola"
console.log(dagrasso.manager)

const afera:Restauracja=new Restauracja("Afera");
afera.order("kebab");
afera.manager="Adam";
console.log(afera);
*/
class PolishRestaurant extends Restauracja{
    constructor(name, public openAtNight){
        super(name)
    }

    bake() {
        return "Pizza się piecze sposobem polskim"
    }
}

class AmericanRestaurant extends Restauracja{
    bake() {
        return "Pizza się piecze sposobem amerykańskim"
    }
}
const anaconda:PolishRestaurant=new PolishRestaurant("AferaDwaZero");

console.log(anaconda);
console.log(anaconda.bake());

        
    




