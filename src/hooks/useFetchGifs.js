import  { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
// Estos hookssss son una forma  de de extraer logica de un componente que queremos reutilizarla  en otro componente 
//funcionan como funtional compounents
export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });
 
    useEffect( () => {
        getGifs( category )
            .then( img => {
                
                console.log(img)
                setState({
                    data: img,
                    loading: false
                })
            
            })
    }, [category])

    // useEffect( () => {
    // setTimeout( () =>{
    //         setState({
    //             data: [1,2,3,4,5,6,7],
    //             loading: false
    //         });

    //     },3000)
    // }, []);


    return state;
}



