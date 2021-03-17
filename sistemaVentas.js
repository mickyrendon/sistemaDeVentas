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

    // toString(idProduct, name, value){
    //     return idProduct + ','+ name + ','+ value;
    // }
    toString(){
        return `idProduct : ${this._idProduct},
                nombre    : ${this._Pname},
                precio    : $${this._Pvalue}`;
    }
    
}

let product1 = new Producto('tv', 4500);
console.log(product1);
console.log(Producto.counter);

let product2 = new Producto('aire', 9000)
console.log(product2);
console.log(Producto.counter);
console.log(product2.toString());

// clase orden
class Order{
    static counter = 0;

    static get MAXP(){
        return 5;
    }    

    constructor(){
        this._idOrder = ++Order.counter;
        this._products = [];
        //this._counterAddedProducts = 0;
    }
    get idOrder(){
        return this._idOrder;
    }
    
    addProduct(product){
        if(this._products.length < Order.MAXP){
            this._products.push(product);
            // otra manera de hacerlo
            // this._products[this._counterAddedProducts++] = product;
        }else{
            console.log('limite de productos excedidos');
        }
    }    

    totalCalculate(){
        let totalProducts = 0;
        // iterando el array 
        for(let product of this._products ){
            totalProducts += product.value;
        }
        return totalProducts;
    }

    showOrder(){
        let productOrder = '';
// variable para iterar | of para indicar a que array recorrer| nombre del array
        for(let product of this._products){
            productOrder += '\n{' + product.toString() + '}';
        }

        console.log(`orden: ${this._idOrder}, Total: ${this.totalCalculate()}, productos: ${productOrder}`
                     );
    }
    
}

// relacion de agregacion
let orden1 = new Order();
// agregando productos a la orden por medio de el metodo addProduct... 
orden1.addProduct(product1);
orden1.addProduct(product2);

orden1.showOrder();

// agregando un nuevo producto
let product3 = new Producto('ps5', 6000);

// creando otra orden
let orden2 = new Order();
orden2.addProduct(product1); 
orden2.addProduct(product1); 
orden2.addProduct(product3); 
orden2.addProduct(product2); 
orden2.addProduct(product3); 
orden2.addProduct(product2); 

orden2.showOrder();

