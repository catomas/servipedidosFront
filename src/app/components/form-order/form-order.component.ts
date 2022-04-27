import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { metodoPago, pago } from 'src/app/interfaces/interfaces';
import { Order } from '../../interfaces/interfaces';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.css'],
})
export class FormOrderComponent implements OnInit {
  @Output() onEnter: EventEmitter<FormGroup> = new EventEmitter();
  @Input() order!: Order
  @Input() header!: string
  miFormulario!: FormGroup;
  hoy!: Date;

  metodoPago: metodoPago[] = [
    {
      option: 'Efectivo',
    },
    {
      option: 'Transferencia',
    },
    {
      option: 'Otro',
    },
  ];

  pago: pago[] = [
    {
      option: 'Si',
      key: true,
    },
    {
      option: 'No',
      key: false,
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.hoy = new Date();
    let formate = new Intl.DateTimeFormat('en-US')
    let colDate = formate.format(this.hoy)
    this.miFormulario = this.fb.group({
      nombreVendedor: ['', [Validators.required]],
      nombreCliente: ['', [Validators.required]],
      direccion: [''],
      producto: ['', [Validators.required]],
      precio: ['', [Validators.required, Validators.min(0)]],
      fecha: ['', [Validators.required]],
      metodoPago: ['', [Validators.required]],
      pago: ['', [Validators.required]],
    });

    console.log(this.order)
    this.miFormulario.reset({
      ...this.order,
      fecha: colDate

    })

  }

  campoEsValido(campo: string) {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  guardar() {
    this.onEnter.emit(this.miFormulario);
  }
}
