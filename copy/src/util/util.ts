import { Filters } from "../Components/typesdefine";


export let filterutil:Filters =(array,f)=>{
    type results =any;
    let result:results =[];

    for(let i=0;i<array.length;i++){
     if(f(array[i])){

         result.push(array[i]);
     }
    }

    return result
   }