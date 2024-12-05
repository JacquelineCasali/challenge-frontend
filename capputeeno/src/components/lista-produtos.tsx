"use client";
import { useProdutos } from "@/hooks/useProdutos"

interface ListaProdutosProps{

}

export default function ListaProdutos(props:ListaProdutosProps) {
 
 const {data} = useProdutos();
console.log(data)
    return 
    <>
   
    </>
  
}
