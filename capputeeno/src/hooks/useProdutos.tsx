import { ProdutosFetchResponse } from "@/types/produtosFetchResponse";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./userFilter";

import { mountQuery } from "@/utils/filter";
import { useDeferredValue } from "react";


const API_URL= process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query:string): AxiosPromise<ProdutosFetchResponse> => {
  return axios.post(API_URL,{query});
};


export function useProdutos() {
    const {type,prioridade,search}=useFilter();
    //atualiza quando terminada de digitar
    const searchDeferred=useDeferredValue(search)
    const query=mountQuery(type,prioridade)
  // buscando dados na api
  const {data} = useQuery({
    queryFn: ()=> fetcher(query),
    queryKey: ["products",type,prioridade],
  });
const produtos=data?.data?.data?.allProducts

  const filterProdutos=produtos?.filter(produto=> produto.name.toLowerCase().includes(searchDeferred.toLowerCase()))
  return{
    data:filterProdutos
  }
}
