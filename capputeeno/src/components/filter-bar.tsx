"use client"
import FilterByPrioridade from './filter-by-prioridade'
import { FiterByTipo } from './fiter-by-tipo'
import styled from 'styled-components'
interface FilterBarProps{

}


const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
    justify-content: space-between;
`
export default function FilterBar(props : FilterBarProps) {
  return (
    <FilterContainer>
      <FiterByTipo/>
      <FilterByPrioridade/>
    </FilterContainer>
  )
}
