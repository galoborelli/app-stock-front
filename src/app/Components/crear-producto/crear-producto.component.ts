import { Component } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from "@angular/forms"
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/Models/producto';
import { ProductoService } from 'src/app/Services/producto.service';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
 productoForm:FormGroup;
 titulo = 'Crear producto';
 id:any

  constructor(private fb:FormBuilder,
              private router:Router,
              private toastr: ToastrService,
              private productoService:ProductoService,
              private aRouter:ActivatedRoute){

    this.productoForm = this.fb.group({
      producto:["",Validators.required],
      ubicacion:["",Validators.required],
      categoria:["",Validators.required],
      precio:["",Validators.required]
    })

    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(){
    this.esEditar()
  }

  agregarProducto(){
    console.log(this.productoForm)
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      precio: this.productoForm.get('precio')?.value,
    }

    if(this.id !== null){
//editamos producto
      this.productoService.editarProducto(this.id,PRODUCTO).subscribe(data =>{
        this.toastr.success('El producto fue actualizado con exito!', 'Producto actualizado')
        this.router.navigate(['/'])
      })
    } else{
//agregamos producto
      this.productoService.guardarProducto(PRODUCTO).subscribe(data =>{
        this.toastr.success('El producto fue registrado con exito!', 'Producto registrado')
        this.router.navigate(['/'])
      },error =>{console.log(error)})
      this.productoForm.reset()
    }


  }

esEditar(){
  if(this.id !== null){
    this.titulo = 'Editar producto';
    this.productoService.obtenerProducto(this.id).subscribe(data =>{
      this.productoForm.setValue({
        producto: data.nombre,
        ubicacion: data.ubicacion,
        categoria: data.categoria,
        precio: data.precio,
      })
    })
  }
}

}
