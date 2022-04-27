import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../../../interfaces/interfaces';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})
export class ShowComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  showView: boolean = true;
  order!: Order;
  params!: string;
  pago: string | undefined;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.params = params.get('id')!;
    });

    this.orderService.show(this.params).subscribe((resp) => {
      if (resp.ok === true) {
        this.order = resp.order;
        if (this.order?.pago) {
          this.pago = 'Si';
        } else {
          this.pago = 'No';
        }
      } else {
        this.router.navigateByUrl('/order/list');
      }
    });
  }

  edit() {
    this.showView = false;
  }

  updateOrder(miFormulario: FormGroup) {
    this.order = miFormulario.value;
    this.orderService.update(this.order, this.params).subscribe((resp) => {
      if (resp.ok === true) {
        Swal.fire('Orden Actualizada!!', '', 'success');
        miFormulario.reset();
        this.showView = true;
      } else {
        Swal.fire('Error', resp.msg, 'error');
      }
    });
  }

  deleteOrder() {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar la orden?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.orderService.delete(this.params).subscribe((resp) => {
          if (resp.ok === true) {
            Swal.fire('Orden Eliminada!!', '', 'success');
            this.router.navigateByUrl('/order/list');
          } else {
            Swal.fire('Error', resp.msg, 'error');
          }
        });
      } else {
        return
      }
    });
  }
}
