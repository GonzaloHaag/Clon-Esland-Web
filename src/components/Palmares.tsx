/**codigo de react aqui, pero con preact */

import { useState,useEffect } from 'preact/hooks';
import '../styles/palmares.css';

const arraySpanLiPalmares = [
    {
        id: 1,
        category: 'Streamer del año',
        ganador: 'Ibai'
    },
    {
        id: 2,
        category: 'Serie de contenido del año',
        ganador: 'Tortillaland'
    },
    {
        id: 3,
        category: 'Streamer revelación del año',
        ganador: 'elXokas'
    },
    {
        id: 4,
        category: 'Evento del año',
        ganador: 'La velada del año'
    },
    {
        id: 5,
        category: 'Mejor trayectoria',
        ganador: 'Fernanfloo'
    },
    {
        id: 6,
        category: 'Talk show del año',
        ganador: 'The Wild Project'
    },
    {
        id: 7,
        category: 'Canción del año',
        ganador: 'El cuarteto de Ibai'
    },
    {
        id: 8,
        category: 'Jägger del año',
        ganador: 'Jägger boxeador'
    },
    {
        id: 9,
        category: 'Streamer IRL del año',
        ganador: 'Kidi'
    },
    {
        id: 10,
        category: 'Caster del año',
        ganador: 'Kaquka'
    },
    {
        id: 11,
        category: 'Reportero/a de esports del año',
        ganador: 'Cristinini'
    },
    {
        id: 12,
        category: 'Jugador/a de esports del año',
        ganador: 'Mixwell'
    },
    {
        id: 13,
        category: 'Roleplayer del año',
        ganador: 'AgenteMaxo'
    },
    {
        id: 14,
        category: 'Baile del año',
        ganador: 'Papi Gavi'
    },

];

const cardsArchivo = [
    {
        id:1,
        imagen:'/archivo/ibai.jpg',
        nombre:'Ibai',
        comunidad:'41.05',
        streamers:'75.6',
        votosTotales:'58.33'
    },
    {
        id:2,
        imagen:'/archivo/tortillaland.jpg',
        nombre:'tortillaland',
        comunidad:'39.92',
        streamers:'27.7',
        votosTotales:'33.81'
    },
    {
        id:3,
        imagen:'/archivo/elxokas.jpg',
        nombre:'ELXOKAS',
        comunidad:'27.74',
        streamers:'54',
        votosTotales:'40.87'
    },
    {
        id:4,
        imagen:'/archivo/la-velada-del-año.jpg',
        nombre:'LA VELADA DEL AÑO',
        comunidad:'48.78',
        streamers:'72.9',
        votosTotales:'60.84'
    },
    {
        id:5,
        imagen:'/archivo/fernanfloo.jpg',
        nombre:'FERNANFLOO',
        comunidad:'60.25',
        streamers:'18.9',
        votosTotales:'39.58'
    },
    {
        id:6,
        imagen:'/archivo/wildproject.jpg',
        nombre:'THE WILD PROJECT',
        comunidad:'43.81',
        streamers:'45.9',
        votosTotales:'44.86'
    },
    {
        id:7,
        imagen:'/archivo/ibai-cancion.jpg',
        nombre:'EL CUARTETO DE IBAI',
        comunidad:'54.6 ',
        streamers:'40.5',
        votosTotales:'47.55'
    },
    {
        id:8,
        imagen:'/archivo/jagger.jpg',
        nombre:'JÄGGER BOXEADOR',
        comunidad:'36.09',
        streamers:'51.3',
        votosTotales:'43.7'
    },
    {
        id:9,
        imagen:'/archivo/kidi-irl.jpg',
        nombre:'KIDI',
        comunidad:'20.81',
        streamers:'67.5',
        votosTotales:'44.15'
    },
    {
        id:10,
        imagen:'/archivo/caster.jpg',
        nombre:'KAQUKA',
        comunidad:'40.48',
        streamers:'27',
        votosTotales:'33.74'
    },
    {
        id:11,
        imagen:'/archivo/cristini.jpg',
        nombre:'CRISTININI',
        comunidad:'66.01',
        streamers:'35.1',
        votosTotales:'50.56'
    },
    {
        id:12,
        imagen:'/archivo/mixwell.jpg',
        nombre:'MIXWELL',
        comunidad:'32.92',
        streamers:'37.8',
        votosTotales:'35.36'
    },
    {
        id:13,
        imagen:'/archivo/roleplayer.jpg',
        nombre:'AGENTEMAXO',
        comunidad:'23.14',
        streamers:'40.5',
        votosTotales:'31.82'
    },
    {
        id:14,
        imagen:'/archivo/papigavi.jpg',
        nombre:'PAPI GAVI',
        comunidad:'45.96',
        streamers:'35.1',
        votosTotales:'40.53'
    },

]
export const Palmares = () => {

    const [liSelected, setLiSelected] = useState(1); //para que arranque el selected en ibai 
    return (
        <div className='flex flex-col md:flex-row justify-between w-full max-w-7xl mx-auto gap-5 py-40'>
                <ul className='flex flex-col w-full text-sm md:text-base'>
                    <li className='flex items-center justify-between p-2 bg-black'>
                        <span>Categoría</span>
                        <span>Ganadores</span>
                    </li>
                    {
                        arraySpanLiPalmares.map((element, i) => (
                            <li onClick={() => setLiSelected(element.id)} className={`li-palmares ${liSelected === element.id ? 'selected' : ''}  ${i % 2 === 0 ? 'bg-blue-950' : 'bg-black'} cursor-pointer flex flex-col`}>
                                <div className='flex items-center justify-between p-2'>
                                <span>{element.category}</span>
                                <span>{element.ganador}</span>
                                </div>
                                {
                                    liSelected === element.id && (
                                    cardsArchivo.map((card) => (
                                        liSelected === card.id && (
                                            <div className="flex w-full p-2 md:hidden">
                                                <img src={card.imagen} className="w-28 h-auto" loading='lazy' />
                                                <div className='flex flex-col text-center justify-center w-full gap-y-2 shadow-none'>
                                                    <p className='uppercase font-semibold'>{card.nombre}</p>
                                                    <span>COMUNIDAD: {card.comunidad} %</span>
                                                    <span>STREAMERS: {card.streamers} %</span>
                                                    <p className='font-bold'>TOTAL: {card.votosTotales} %</p>
                                                </div>
                                            </div>
                                        )
                                    ))
                                
                                    )
                                }
                            </li>
                         
                        ))
                    }
                </ul>
                <div className='w-full items-center justify-center hidden md:flex'>
                    {
                        //si setLiSelected es igual a el id del objeto de CardsArchivo, quiere decir que debo renderizar ese ganador porque tienen el mismo numero
                        cardsArchivo.map((card) => (
                            liSelected === card.id && (
                              
                                <div key={card.id} className='bg-sky-500 flex flex-col relative shadow-2xl shadow-sky-600 animate-fade-left animate-duration-500'>
                                     {/*esta es la card del ganador */}
                                     <span class='absolute bg-white text-2xl w-fit p-5 rounded-lg text-blue-950 font-bold top-[65%] left-[40%] z-10'>
                                        1°
                                     </span>
                                     <img src={card.imagen} alt={card.nombre} className='mix-blend-luminosity' loading='lazy' />
                                     <div className='p-5 flex flex-col text-start'>
                                     <p className='uppercase font-semibold text-lg mt-5'>{card.nombre}</p>
                                     <span className='text-lg font-semibold text-blue-950'>COMUNIDAD: {card.comunidad} %</span>
                                     <span className='text-lg font-semibold text-blue-950'>STREAMERS: {card.streamers} %</span>
                                     <p className='text-2xl font-bold'>TOTAL: {card.votosTotales} %</p>
                                     </div>
                                </div>
                            )
                        ))
                    }
            </div>
                    
        </div>
    )
}