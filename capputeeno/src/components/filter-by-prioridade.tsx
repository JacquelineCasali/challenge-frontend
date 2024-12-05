import styled from "styled-components";
import { ArrowIcon } from "./icons/arrowIcon";
import { useState } from "react";
import { useFilter } from "@/hooks/userFilter";
import { PrioridadeTipo } from "@/types/prioridade-types";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    button {
    border:none;
     background: transparent;
        cursor: pointer;
   font-family: inherit;
   font-weight: 400;
    font-size: 14px;
    line-height: 22px;
   color: var(--text-dark);
      display: flex;
    align-items: center;
     justify-content:center;
   
     svg {
            margin-left: 16px;
        }
   
     }
    
    `
const PriorityFilter = styled.ul`
position: absolute;
    width: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;
    right: 8px;
    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }
         li + li {
        margin-top: 4px;
    }
`

export default function FilterByPrioridade() {
  
    const [isOpen, setIsOpen] = useState(false)
  //pegando o valor que atualiza a prioridade dos elementos
  const {setPrioridade}=useFilter();
  
  
  
    // abrindo e fechando a lista
  
  
    const handleOpen = () => setIsOpen(prev => !prev)
   // selecionando
   const handleUpdatePrioridade = (value:PrioridadeTipo) =>{
    setPrioridade(value)
    setIsOpen(false)
   }
    
    
   
    return (
    <FilterContainer>
   <button onClick={handleOpen}>
Organizado por
<ArrowIcon/>
   </button>
{isOpen && <PriorityFilter>
    
    <li onClick={()=>handleUpdatePrioridade(PrioridadeTipo.Novo)}>Novidades</li>
<li onClick={()=>handleUpdatePrioridade(PrioridadeTipo.Maior_preco)}>Preço: Maior - menor</li>
<li onClick={()=>handleUpdatePrioridade(PrioridadeTipo.Menor_Preco)}>Preço: Menor - maior</li>
<li onClick={()=>handleUpdatePrioridade(PrioridadeTipo.Popular)}>Mais Vendidos</li>
    </PriorityFilter>}

    </FilterContainer>
  )
}
