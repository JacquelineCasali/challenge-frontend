"use client";
import { useFilter } from '@/hooks/userFilter';
import { FilterType } from '@/types/filter-types';
import styled from 'styled-components'

interface FilterItemProps {
    selected: boolean
}
const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
   font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: var(--text-dark);
  border-bottom: ${props => props.selected ? '4px solid var(--orange-low);' : ''}
  
`

export function FiterByTipo() {

const {type,setType}=useFilter();
const handleChangeType = (value: FilterType) => {
  setType(value)
}

  return (
    <FilterList>
      <FilterItem selected={type===FilterType.TODOS}
      onClick={()=>handleChangeType(FilterType.TODOS)}
      >Todos os Produtos</FilterItem>
      <FilterItem selected={type===FilterType.CAMISETAS}
      onClick={()=>handleChangeType(FilterType.CAMISETAS)}>Camisetas</FilterItem>
      <FilterItem selected={type===FilterType.CANECAS}
      onClick={()=>handleChangeType(FilterType.CANECAS)}>Canecas</FilterItem>
    </FilterList>
  )
}
