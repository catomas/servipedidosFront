export interface OrderResponse {

    ok: boolean;
    msg?: string;
    order?: Order;
    orders?: Order[];
} 

export interface Order {
    _id?: string;
    nombreVendedor?: string;
    nombreCliente?: string;
    direccion?: string;
    fecha?: Date;
    producto?: string;
    precio?: number;
    metodoPago?: string;
    pago?: boolean;

}

export interface metodoPago {
    option: string,
}

export interface pago {
    option: string,
    key: boolean
}