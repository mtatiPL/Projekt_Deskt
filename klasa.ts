class House {
    owner: string;

    constructor(owner: string){
        this.owner=owner;
    }
    changeOwner(owner: string): void{
        this.owner=owner;
    }
    getOwner():string{
        return this.owner;
    }

}
const house:House = new House("Mateusz");
console.log(house);