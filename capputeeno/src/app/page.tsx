"use client"

import ListaProdutos from "@/components/lista-produtos";
import styles from "./page.module.css";
import FilterBar from "@/components/filter-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function Home() {
 const client=new QueryClient();
 
  return (
   <QueryClientProvider client={client}>
 <main className={styles.main}>
      <FilterBar/>
 <ListaProdutos/>
    
    </main>

   </QueryClientProvider>
   
  
  );
}
