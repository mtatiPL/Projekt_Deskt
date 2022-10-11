var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Restauracja = /** @class */ (function () {
    function Restauracja(name, id) {
        this.pizzainOrder = [];
        this.maxPizzasInOven = 10;
        this.Recipies = [];
        this._manager = "jan";
        this.name = name;
        this.id = Restauracja.id++;
    }
    Restauracja.prototype.order = function (pizza) {
        this.pizzainOrder.push(pizza);
    };
    Restauracja.prototype.isOvenFull = function () {
        return this.pizzainOrder.length >= this.maxPizzasInOven;
    };
    Object.defineProperty(Restauracja.prototype, "manager", {
        get: function () {
            return this._manager;
        },
        set: function (manager) {
            this._manager = manager;
        },
        enumerable: false,
        configurable: true
    });
    Restauracja.id = 0;
    return Restauracja;
}());
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
var PolishRestaurant = /** @class */ (function (_super) {
    __extends(PolishRestaurant, _super);
    function PolishRestaurant(name, openAtNight) {
        var _this = _super.call(this, name) || this;
        _this.openAtNight = openAtNight;
        return _this;
    }
    PolishRestaurant.prototype.bake = function () {
        return "Pizza się piecze sposobem polskim";
    };
    return PolishRestaurant;
}(Restauracja));
var AmericanRestaurant = /** @class */ (function (_super) {
    __extends(AmericanRestaurant, _super);
    function AmericanRestaurant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AmericanRestaurant.prototype.bake = function () {
        return "Pizza się piecze sposobem amerykańskim";
    };
    return AmericanRestaurant;
}(Restauracja));
var anaconda = new PolishRestaurant("AferaDwaZero");
console.log(anaconda);
console.log(anaconda.bake());
