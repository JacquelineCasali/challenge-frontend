import { FilterType } from "@/types/filter-types";
import { PrioridadeTipo } from "@/types/prioridade-types";


export function getCategory(type:FilterType) {
if(type==FilterType.CANECAS) return "mugs"
if(type==FilterType.CAMISETAS) return "t-shirts"
return ""

}


export function getFilterByPropriedade(priority:PrioridadeTipo){
if(priority === PrioridadeTipo.Novo) return {field:"created_at", order:"ASC"}
if(priority === PrioridadeTipo.Maior_preco) return {field: "price_in_cents", order: ""}
if(priority === PrioridadeTipo.Menor_Preco)return {field: "price_in_cents", order: "ASC"}
return {field: "sales", order: "DSC"}



}

export const mountQuery=(type : FilterType,priority: PrioridadeTipo)=>{
    if(type === FilterType.TODOS && priority === PrioridadeTipo.Popular) return `query {
        allProducts(sortField:"sales",sortOrder:"DSC"){
          id
          name
          price_in_cents
          image_url
 
        }
      } `

const sort=getFilterByPropriedade(priority)
const categoriaFilter=getCategory(type)
return `
query {
  allProducts(sortField:"${sort.field}",sortOrder:"${sort.order}",${categoriaFilter ? `filter:{category:"${categoriaFilter}"}`:"" }){
    id
    name
    price_in_cents
    category
     image_url
  }
}`
    
      
    
}
