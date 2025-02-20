import { IAddress } from "./address";

export interface OrderToCreate{
    basketId: string;
    deliveryMethodId : number;
    shipToAddress: IAddress; 
}

export interface Order {
    id: number
    buyerEmail: string
    orderDate: string
    shipToAddress: IAddress
    deliveryMethod: string
    shippingPrice: number
    orderItems: OrderItem[]
    subtotal: number
    total: number
    status: string
  }
  

  export interface OrderItem {
    productId: number
    productName: string
    pictureUrl: string
    price: number
    quantity: number
  }

  export enum OrderOrderBy{
    Date  = "date",
    Price = "price",
    Default = "none"
  }

  export enum OrderAscDesc{
    Ascending = "asc",
    Descending = "desc",
    Default = "none"
  }
  