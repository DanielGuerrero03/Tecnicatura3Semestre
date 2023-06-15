class Producto{
    static contadorProductos = 0;

    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return `iD Producto: ${this._idProducto}, nombre: ${this._nombre}, precio: ${this._precio}`;
    }
}

class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
            //this.productos(this._contadorProductosAgregados++) = producto;
        }
        else{
            console.log('Alcanzo el máximo, No se pueden agregar más productos.');
        }
    }

    calcularTotal(){
       let venta = 0;
       for(let producto of this._productos){
           venta += producto.precio;
       }
       return venta;
    }

    mostrarOrden(){
        let productosEnOrden = '';
        for(let producto of this._productos){
            productosEnOrden += '\n {' + producto.toString() + '}';
        }
        
        console.log(`Orden de ventas: ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosEnOrden} `);
    } 

}



let producto1 = new Producto('Teclado', 5000);
let producto2 = new Producto('Mouse', 2500);
let producto3 = new Producto('Monitor', 6000);

let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();