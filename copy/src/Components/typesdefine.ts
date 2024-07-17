export  type targetValue={
    target:{
        value:string
    }
}
export type Filters = {
    <T>(array:T[],f:(item:any)=>boolean):T[]
    
}

export interface ProductsUpdate{
    
        ProductName:string,
        Price:number,
        Stock:number,
        Size:string,
        Discount:string,
        Region:string,
        State:string
    
}

     