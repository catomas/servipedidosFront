import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Order } from '../../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  order!: Order;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.order = {
      nombreCliente: 'Batman',
      nombreVendedor: 'Juan',
      direccion: 'Carera 30',
      producto: 'Uvas',
      precio: 322,
    };
  }

  guardar(miFormulario: FormGroup) {
    console.log(miFormulario.value);
    this.order = miFormulario.value;
    this.orderService.create(this.order).subscribe((resp) => {
      if (resp.ok === true) {
        Swal.fire('Orden Creada!!', '', 'success');
        miFormulario.reset();
      } else {
        Swal.fire('Error', resp.msg, 'error');
      }
    });
  }
}
