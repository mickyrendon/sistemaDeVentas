//clase producto
class Producto {
    static counter = 0;

    constructor(name, value){
        this._idProduct = ++Producto.counter;
        this._Pname     = name;
        this._Pvalue    = value;
    }

    get idProduct(){
        return this._idProduct;
    }
    
    get name(){
        return this._Pname;  
    }
    set name(name){
        this._Pname = name;
    }
    get value(){
        return this._Pvalue;
    }
    set value(value){
        this._Pvalue = value;
    }

    toString(idProduct, name, value){
        return idProduct + ','+ name + ','+ value;
    }
    toString(){
        return `${this._idProduct},
                ${this._Pname},
                ${this._Pvalue}`;
    }
    
}

let product1 = new Producto('tv', 4500);
console.log(product1);
console.log(Producto.counter);

let product2 = new Producto('aire', 9000)
console.log(product2);
console.log(Producto.counter);
