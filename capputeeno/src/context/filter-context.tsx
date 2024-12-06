"use client"
import { FilterType } from "@/types/filter-types";
import { PrioridadeTipo } from "@/types/prioridade-types";
import { createContext, ReactNode, useState } from "react";

export const FilterContext= createContext({
    //consulta
    search:'',
    page:0,
    type:FilterType.TODOS,
prioridade:PrioridadeTipo.Novo,
setPrioridade:(value: PrioridadeTipo)=>{},
setSearch:(value: string)=>{},
setPage:(value: number)=>{},
setType:(value: FilterType)=>{}
})
interface ProviderProps {
    children: ReactNode
}
export function FilterContextProvider({children}: ProviderProps){
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [type, setType] = useState(FilterType.TODOS)
    const [prioridade, setPrioridade] = useState(PrioridadeTipo.Popular)
   
    return(
<FilterContext.Provider value={{search,page,type,setSearch,setPage,setType,
prioridade, setPrioridade

}}>

{children}

</FilterContext.Provider>
    )
}