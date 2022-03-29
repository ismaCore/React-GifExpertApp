import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category}) => {

    const { data:images, loading } = useFetchGifs( category );

  return (

    <>
        <h3 className='animate__animated animate__bounce animate__fadeIn'>{category}</h3>

        {loading && <p className='animate__animated animate__bounce animate__flash'>Loading</p>}

        <div className='card-grid'>

            {
            images.map( (img) =>( //Usamos la desestructuracion para obtener el id y el title sin necesidad de declarar otra variable
                 
                    <GifGridItem
                        key={img.id}
                        { ...img } //se mandan cada una de las propiedades de las img como una propiedad independiente 
                    />
                ))
            }

        </div>
    </>
  )
}
