import React from 'react'
import Card from './Card'
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import image6 from "../images/image6.jpg"
import image7 from "../images/image7.jpg"
import image8 from "../images/image8.jpg"
import image9 from "../images/image9.jpg"

const data = [
    {
        id:1,
        titulo: 'Soleado',
        imagen: image1,
        descrip: 'Se aplica al día que presenta un cielo sin nubes en el que brilla el sol: una mañana soleada de primavera; tiempo caluroso y soleado; clima soleado.',
        pag:'https://www.istockphoto.com/es/fotos/paisajes-soleados'
    },
    {
        id:2,
        titulo: 'Lago',
        imagen: image2,
        descrip: 'Gran depósito natural de agua en una depresión del terreno, que recoge aguas pluviales, subterráneas o de uno o varios ríos.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisajes%20lago'
    },
    {
        id:3,
        titulo: 'Puente',
        imagen: image3,
        descrip: 'Construcción que se levanta sobre una depresión del terreno (río, canal, foso, etc.) o en otro sitio para comunicar dos lados.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisajes%20puente'
    },
    {
        id:4,
        titulo: 'Vista',
        imagen: image4,
        descrip: 'El paisajismo es la actividad destinada a modificar las características visibles, físicas y anímicas de un espacio, tanto rural como urbano, entre las que se incluyen: los elementos vivos, tales como flora y fauna.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisajes%20vista'
    },
    {
        id:5,
        titulo: 'Puente y lago',
        imagen: image5,
        descrip: 'El puente General Rafael Urdaneta, también localmente llamado puente sobre el Lago, es un puente que cruza la parte más angosta del lago de Maracaibo, en Zulia.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisajes%20puente%20y%20lago'
    },
    {
        id:6,
        titulo: 'Rocas',
        imagen: image6,
        descrip: 'Agregado de uno o más minerales sólidos, con propiedades físicas y químicas definidas, que se agrupan de forma natural.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisajes%20rocas'
    },
    {
        id:7,
        titulo: 'Arena',
        imagen: image7,
        descrip: 'Conjunto de fragmentos sueltos de pequeño tamaño de rocas, minerales o exoesqueletos de animales marinos.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisaje%20arena'
    },
    {
        id:8,
        titulo: 'Globo',
        imagen: image8,
        descrip: 'Aeronave aerostática no propulsada que se sirve del principio de los fluidos de Arquímedes para volar.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisaje%20globo'
    },
    {
        id:9,
        titulo: 'Campo',
        imagen: image9,
        descrip: 'Parte de la superficie terrestre no ocupada por núcleos de población.',
        pag:'https://www.istockphoto.com/es/search/2/image?phrase=paisaje%20campo'
    },
]

function Cards() {
  return (
    <>
    <br/>
    <h1 className='titulo'>La naturaleza</h1>
    <br/>
    <br/>
        <div className='container d-flex align-items-center justify-content-center h-100' >
            <div className='row'>
                    {
                        data.map(({id,titulo,imagen,descrip,pag})=>(
                            <div className='col-md-4' key={id}>
                                <Card titulo={titulo} url={imagen} parr={descrip} urlpag={pag}/>
                                <br/>
                            </div>
                        ))
                    }
            </div>
        </div>
    </>
  )
}

export default Cards