export function formatPrice(valorEmReal:number){
    const valor=valorEmReal/100;
    return valor.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
 }
