// Carousel.js
import React, { useState } from 'react';
import { VscTriangleDown } from 'react-icons/vsc';
import Card from '../dataDisplay/Card';
import Text from '../dataDisplay/Text';

// DATA FOTOS
import coferta1 from '../../assets/cards/cofertas1.jpg'
import coferta2 from '../../assets/cards/cofertas2.jpg'
import coferta3 from '../../assets/cards/cofertas3.jpg'
import coferta4 from '../../assets/cards/cofertas4.jpg'
import coferta5 from '../../assets/cards/cofertas5.jpg'
import coferta6 from '../../assets/cards/cofertas6.jpg'
import coferta7 from '../../assets/cards/cofertas7.jpg'
import coferta8 from '../../assets/cards/cofertas8.jpg'
import coferta9 from '../../assets/cards/cofertas9.jpg'
import coferta10 from '../../assets/cards/cofertas10.jpg'
import coferta11 from '../../assets/cards/cofertas11.jpg'
import coferta12 from '../../assets/cards/cofertas12.jpg'

// OBJETOS PARA CONSTRUIR EL CARRUSEL
const data = [
    { id: 1, title: "Camisa Verde - Birdi's Basics", img: coferta1, precio: 19990, descuento: 0.25},
    { id: 2, title: "Camisa Cafe - Birdi's Basics", img: coferta2, precio: 19990, descuento: 0.25},
    { id: 3, title: "Jeans Regular Fit - BluBird", img: coferta3, precio: 37990, descuento: 0.15},
    { id: 4, title: "Camisa - Birdi's Nonstop", img: coferta4, precio: 25990, descuento: 0.5},
    { id: 5, title: "Camisa Caqui - Birdi's Basics", img: coferta5, precio: 19990, descuento: 0.15},
    { id: 6, title: "Poleron Gris - Birdi's Basics", img: coferta6, precio: 26990, descuento: 0.2},
    { id: 7, title: "Chaqueta Bomber - Birdi's Nonstop", img: coferta7, precio: 59990, descuento: 0.4},
    { id: 8, title: "Camisa Negra - Birdi's Nonstop", img: coferta8, precio: 15990, descuento: 0.1},
    { id: 9, title: "Chaqueta Crema - Birdi's Basics", img: coferta9, precio: 26990, descuento: 0.2},
    { id: 10, title: "Chaqueta Azul Oscuro - Birdi's Basics", img: coferta10, precio: 26990, descuento: 0.4},
    { id: 11, title: "Pantalones Cargo Fit - Birdi's Nonstop", img: coferta11, precio: 79990, descuento: 0.15},
    { id: 12, title: "Jeans Slim Fit - BluBird", img: coferta12, precio: 34990, descuento: 0.5},

];

const Carousel = () => {
    const [currentTab, setCurrentTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setCurrentTab(tabNumber);
    };

    return (
        <div className="container mx-auto mt-14 mb-10">
            <div className='flex justify-between'>
                <div className='bg-orange-600'>
                    <h2 className='text-4xl text-white px-4 py-2'>
                        Colección Verano 2023
                    </h2>
                </div>
                <div className="flex">
                    {[1, 2, 3].map((tab) => (
                        <div
                            key={tab}
                            className={`mr-4 cursor-pointer bg-orange-600 hover:bg-orange-500 px-4 py-2 flex
                             ${currentTab === tab ? 'items-end' : 'items-center'}`}
                            onClick={() => handleTabChange(tab)}
                        >
                            <h3 className='text-white text-2xl min-h-[3vh]'>
                                {currentTab === tab ? <VscTriangleDown /> : tab}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center mt-4 gap-4">
                {data.slice((currentTab - 1) * 4, currentTab * 4).map((item) => (
                    <Card>
                        <div
                            className="bg-cover bg-center h-screen flex items-center justify-center max-h-[40vh] py-2"
                            style={{ backgroundImage: `url(${item.img})` }}
                        >
                        </div>
                        <div className="pt-4">
                            <Text value={item.title} type="main-contrast" />
                        </div>
                        <div className="grid grid-rows-2 grid-flow-col">
                            <div className="flex justify-start items-center">
                                <h2 className='text-stone-800 text-xl font-bold'>${item.precio * (1-item.descuento)}</h2>
                                <div className="bg-stone-300 flex justify-center p-2 mx-2">
                                    <h2 className=''>{item.descuento * 100}%</h2>
                                </div>
                            </div>
                            <Text value={`Antes a $${item.precio}`} type="sub-contrast" />
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
