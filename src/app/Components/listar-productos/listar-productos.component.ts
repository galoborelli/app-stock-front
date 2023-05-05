import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent {
listProductos: Producto[] = []

  constructor(private productoService:ProductoService,
    private toast:ToastrService){

  }

ngOnInit():void{
  this.obtenerProductos()}

  obtenerProductos(){
    this.productoService.getProductos().subscribe(data => {
      console.log(data)
      this.listProductos = data },
      error => {console.log(error)})

    }

  eliminarProducto(_id:any){
    this.productoService.eliminarProducto(_id).subscribe(data =>{
      this.toast.error('El producto fue eliminado con exito','Producto eliminado');
      this.obtenerProductos()
    },error => console.log(error))
  }
}
