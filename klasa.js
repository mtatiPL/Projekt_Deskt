var House = /** @class */ (function () {
    function House(owner) {
        this.owner = owner;
    }
    House.prototype.changeOwner = function (owner) {
        this.owner = owner;
    };
    House.prototype.getOwner = function () {
        return this.owner;
    };
    return House;
}());
var house = new House("Mateusz");
console.log(house);
