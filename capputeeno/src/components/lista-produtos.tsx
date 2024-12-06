"use client";
import { useProdutos } from "@/hooks/useProdutos"
import { ProdutoCard } from "./produto-card";
import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    grid-gap: 32px;
    max-width: 100%;

    margin-top: 32px;
`

export default function ListaProdutos() {
 
 const {data} = useProdutos();
// console.log(data)
    return (
        <ListContainer >
            {    data?.map(produto=> <ProdutoCard
            key={produto.id}
            title={produto.name}
            price={produto.price_in_cents}
            image={produto.image_url}
         
            />
            
        )}
        
             
        </ListContainer>
    )

  
}
