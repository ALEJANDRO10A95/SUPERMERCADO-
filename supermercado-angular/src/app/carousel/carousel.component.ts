import { Component } from '@angular/core';
import { Categorias } from 'src/clases/categorias';
import { Producto } from 'src/clases/producto';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent {
  productosEnCarro: Producto[] = [];
  load(producto: Producto): void {
    const productoYaEnCarro: Producto | undefined = this.productosEnCarro.find((p: { id: number; }) => p.id === producto.id);

    if (productoYaEnCarro === undefined) {
      this.productosEnCarro.push({ ...producto, cantidad: 1 }); // Asumiendo que agregas la cantidad al producto
    } else {
      productoYaEnCarro.cantidad++;
    }
  }

products: Producto[] |any= [
  new Producto(1, "Yogurt", "Yogurt digestivo", Categorias.DULCES_POSTRES, 6, 0.4, "yogurt_natural.jpg"),
  new Producto(2, "Melocotón", "Melocotón muy sabroso", Categorias.FRUTA_VERDURA, 1, 5.6, "melocoton.jpg"),
  new Producto(3,"Leche semidesnatada", "Brick 1L", Categorias.LACTEOS, 100, 0.90, "leche_semidesnatada.jpg"),
  new Producto(4, "Leche entera", "Brick 1L", Categorias.LACTEOS, 100, 0.91, "leche_entera.jpg"),
  new Producto(5,  "Brócoli", "Pieza 393 g aprox.", Categorias.FRUTA_VERDURA, 100, 0.96, "brocoli.jpg"),
  new Producto(6, "Jabón", "Jabón quita-manchas", Categorias.LIMPIEZA_HOGAR, 2, 1.9, "detergente_ropa.jpg"),
  new Producto(7, "Pollo entero", "Bandeja 1,9 kg aprox.", Categorias.CHARCUTERÍA, 10, 6.17, "pollo_entero.jpg"),
  new Producto(8, "Muslos de pollo", "Bandeja 920 g aprox.", Categorias.CHARCUTERÍA, 11, 3.85, "muslos_pollo.jpg"),
  new Producto(9, "Agua mineral grande", "Garrafa 5 L", Categorias.AGUA_BEBIDAS, 100, 1.06, "agua_5l.jpg"),
  new Producto(10, "Bebida isotónica limón Aquarius", "Lata 330 ml", Categorias.AGUA_BEBIDAS, 120, 0.85, "aquarius_limon.jpg"),
  new Producto(11, "Pollo entero", "Bandeja 1,9 kg aprox.", Categorias.CHARCUTERÍA, 10, 6.17, "pollo_entero.jpg"),
  new Producto(12,  'Berenjena', 'Pieza 366 g aprox.',Categorias.FRUTA_VERDURA, 100, 0.69, 'berenjena.jpg'),
  new Producto(13, 'Lejía', 'Lejía normal Tradicional Bosque Verde', Categorias.LIMPIEZA_HOGAR, 100, 1.60, 'lejia.jpg'),
  new Producto(14, 'Refresco Fanta naranja', 'Lata 330 ml', Categorias.AGUA_BEBIDAS, 100, 0.70, 'fanta_naranja.jpg'),
  new Producto(15, 'Flan de huevo', '4 ud.', Categorias.DULCES_POSTRES, 100, 2.00, 'flan_huevo.jpg'),
  new Producto(16,  'Filetes de merluza sin piel', 'Paquete 970 g escurrido', Categorias.PESCADO_MARISCO, 100, 6.35, 'filetes_merluza.jpg'),
  new Producto(17, "Gambón congelado", "Granel 150 g aprox.", Categorias.PESCADO_MARISCO, 100, 1.64, "gambon_congelado.jpg"),
  new Producto(18, "Preservativos natural Durex XL", "Caja 12 Preservativos", Categorias.PROFILACTICOS, 500, 5.50, "Preservativos natural Durex.jpg")
];

responsiveOptions: any[] | undefined;

ngOnInit() {


  this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
}

getSeverity(status: string) {
  switch (status) {
      case 'INSTOCK':
          return 'success';
      case 'LOWSTOCK':
          return 'warning';
      case 'OUTOFSTOCK':
          return 'danger';
      default:
          return '';  }
}
}

