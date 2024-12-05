import { Product } from "./produto"


export interface ProdutosFetchResponse{
    data:{
        allProducts:Product[]
    }
}