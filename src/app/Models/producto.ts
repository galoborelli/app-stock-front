export class Producto{
  _id?:any;
  categoria:string;
  nombre:string;
  ubicacion:string;
  precio:number;


  constructor(nombre:string,  categoria:string, ubicacion:string, precio:number){
    this.nombre = nombre;
    this.categoria = categoria;
    this.ubicacion = ubicacion;
    this.precio = precio;
  }
}
