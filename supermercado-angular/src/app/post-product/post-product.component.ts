import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/interfaces/producto';
import { ProductService } from '../services/product.service';
import { Categorias } from 'src/interfaces/categorias';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-product',
  templateUrl: './post-product.component.html',
  styleUrls: ['./post-product.component.css']
})
export class PostProductComponent implements OnInit {

  productonuevo?: Producto;

  

  postForum: FormGroup = new FormGroup({
    nombre : new FormControl ('', [ Validators.required]),
    descripcion : new FormControl ('', [ Validators.required]),
    categoria : new FormControl ('', [ Validators.required]),
    cantidad: new FormControl ('', [Validators.required, Validators.pattern(/^\d+$/)]),
    precio: new FormControl ('', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
    imagen: new FormControl ('', [ Validators.required]),

  });
  
  constructor(private productService: ProductService,
    private router: Router,) {};
  ngOnInit(): void {};
  async postProduct(){
    let nombre : string = this.postForum.get('nombre')?.value;
    let descripcion : string = this.postForum.get('descripcion')?.value;
    let categoria : string = this.postForum.get('categoria')?.value;
    let cantidad : number = Number.parseInt(this.postForum.get('cantidad')?.value, 10);
    console.log(typeof this.postForum.get('cantidad')?.value);

    //cantidad = typeof cantidad === 'string' ? parseInt(cantidad, 10) : cantidad;
    

    let precio : number = Number.parseFloat(this.postForum.get('precio')?.value);
    let imagen : string = this.postForum.get('imagen')?.value;

    let productResponse : Response = await this.productService.nuevoProducto(
      nombre, 
      descripcion, 
      categoria , 
      cantidad, 
      precio, 
      imagen
    );
  }

  
 


}
