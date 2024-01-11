import React, { useState } from 'react'

import '../assets/css/home.css'
import '../assets/css/main.css'

import Logo from '../assets/images/Logo.png'
import { MoonIcon } from '../components/MoonIcon'
import { SignIcon } from '../components/SignIcon'
import { SunIcon } from '../components/SunIcon'
import { CloudIcon } from '../components/CloudIcon'
import { SnowIcon } from '../components/SnowIcon'
import Truck from '../assets/images/truck.png'
import { SignIcon2 } from '../components/SignIcon2'

import Modal from '@mui/material/Modal';
import { CloseIcon } from '../components/CloseIcon'
import { TextField } from '@mui/material'


const customStyles = {
    content: {
        backgroundColor: 'white',
        position: "absolute",
        maxWidth: '600px',
        maxHeight: '100px',
        // margin: 'auto',  
        padding: '25px',
        borderRadius: '20px',
        zIndex: "9999999"
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
};


export default function Home() {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);

    const closeModal = () => setModalOpen(false);


    const TopOrnament = () => {
        return (
            <svg className='bg-[#2194FF] rounded-xl ml-[0px] ' xmlns="http://www.w3.org/2000/svg" width={377} height={45} viewBox="0 0 377 45" fill="none">
                <path opacity="0.31" d="M377 20.3339V8.51049C376.928 6.26134 376.05 4.13126 374.553 2.5729C373.055 1.01455 371.056 0.150763 368.981 0.165124H7.71513C6.70317 0.16381 5.7009 0.378627 4.76551 0.79731C3.83013 1.21599 2.97994 1.83036 2.26353 2.6053C1.54711 3.38023 0.978486 4.3006 0.590109 5.31381C0.201732 6.32703 0.00120975 7.41325 0 8.51049V44.1807C0 44.1807 48.4569 26.0108 151.611 19.7642C247.502 13.9575 377 20.3339 377 20.3339Z" fill="url(#paint0_linear_6_409)" />
                <defs>
                    <linearGradient id="paint0_linear_6_409" x1="188.5" y1="-9.26963" x2="188.5" y2="54.5949" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#81C0FB" />
                        <stop offset={1} stopColor="white" />
                    </linearGradient>
                </defs>
            </svg>
        )
    }

    const BottomOrnament = () => {
        return (
            <svg className='bg-[#2194FF] rounded-xl ml-[10px]' xmlns="http://www.w3.org/2000/svg" width={374} height={27} viewBox="0 0 374 27" fill="none">
                <path opacity="0.15" d="M0 26.1896H366.29C367.302 26.1909 368.304 25.976 369.24 25.5571C370.175 25.1382 371.025 24.5236 371.741 23.7484C372.457 22.9731 373.025 22.0525 373.413 21.0392C373.801 20.0258 374 18.9396 374 17.8427V0.180328C374 0.180328 358.662 16.6346 275.434 20.0392C202.669 23.0345 0 26.1896 0 26.1896Z" fill="white" />
            </svg>

        )
    }

    const TopOrnament2 = () => {
        return (
            <svg className='ml-[-70px] mt-[-15px] w-[450px]' xmlns="http://www.w3.org/2000/svg" width={343} height={44} viewBox="0 0 343 44" fill="none">
                <path opacity="0.31" d="M343 20.1618V8.34256C342.935 6.09421 342.136 3.96489 340.773 2.4071C339.411 0.8493 337.592 -0.0141797 335.704 0.00017618H7.01934C6.09864 -0.00113663 5.18676 0.213603 4.33573 0.632137C3.4847 1.05067 2.7112 1.66481 2.05939 2.43948C1.40758 3.21414 0.89024 4.13417 0.53689 5.14703C0.183539 6.15988 0.00110065 7.24571 0 8.34256V44C0 44 44.0868 25.8366 137.938 19.5923C225.181 13.7876 343 20.1618 343 20.1618Z" fill="url(#paint0_linear_12_886)" />
                <defs>
                    <linearGradient id="paint0_linear_12_886" x1="171.5" y1="-9.43121" x2="171.5" y2="54.4105" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#81C0FB" />
                        <stop offset={1} stopColor="white" />
                    </linearGradient>
                </defs>
            </svg>

        )
    }

    const BottomOrnament2 = () => {
        return (
            <svg className='ml-[-71px] mt-[-23px] w-[450px]' xmlns="http://www.w3.org/2000/svg" width={341} height={26} viewBox="0 0 341 26" fill="none">
                <path opacity="0.15" d="M0 26H333.97C334.893 26.0013 335.807 25.7865 336.66 25.3677C337.513 24.949 338.288 24.3346 338.94 23.5596C339.593 22.7847 340.111 21.8644 340.465 20.8514C340.818 19.8385 341 18.7526 341 17.6561V0C341 0 327.016 16.4484 251.131 19.8518C184.787 22.8461 0 26 0 26Z" fill="white" />
            </svg>

        )
    }
    return (
        <div>
            <header className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="m-1.5 p-1.5">
                        <img className="h-20 w-60" src={Logo} alt="Logo of Atlant Gaz" />
                    </a>
                    <div className="w-px h-9 bg-[#FFF] mx-6 mt-11"></div>
                    <p className="font-['Open_Sans'] font-sans text-[#2194FF] text-lg font-normal italic mt-8">
                        Расправь плечи <br />
                        в теплом доме
                    </p>
                    <div className="ml-80 mt-6">
                        <p className="font-semibold leading-6 text-[#F1F1F1] font-[Russo_One] font-sans text-2xl not-italic">
                            +998 99 543 0660
                        </p>
                        <a href="tel:+998995430660" className="text-base font-semibold leading-6 text-[#2194FF] font-['Open_Sans'] font-sans not-italic">
                            Срочный вопрос
                        </a>
                    </div>
                </div>
            </header>

            <main className='mainHome'>
                <section className='grid grid-flow-col auto-cols-max'>
                    <div className="flex z-10">
                        <div className="flex">
                            <MoonIcon />&nbsp; &nbsp; <SignIcon /> &nbsp; &nbsp; <SunIcon />
                        </div>

                        <div className="flex mx-40">
                            <CloudIcon /> &nbsp; &nbsp; <SignIcon /> &nbsp; &nbsp; <SnowIcon />
                        </div>

                        <p className="text-[#F1F1F1] font-['Open_Sans'] font-sans not-italic text-base mt-[32px] ml-[-494px] font-light w-52 h-6">В любое время дня и ночи</p>

                        <p className="text-[#F1F1F1] font-['Open_Sans'] font-sans not-italic text-base mt-[32px] ml-[39px] font-light w-52 h-6">Вне зависимости от погодных условий</p>

                        <p className="w-auto text-[#2194FF] font-['Russo_One'] text-6xl font-mono font-bold mt-[110px] ml-[-460px] ">Доставим газ <br />за 4 часа</p>

                        <p className="text-[#F1F1F1] font-['Russo_One'] font-bold font-mono text-2xl mt-[250px] ml-[-400px]">в любую точку  Москвы <br />и Московской области</p>

                        <div className="mt-[250px]">
                            <SignIcon2 />
                        </div>

                        <a onClick={openModal} className="bg-[#2194FF] w-96 h-auto text-[#F1F1F1] font-['Russo_One'] font-mono font-semibold not-italic text-2xl text-center text-shadow-sm shadow-indigo-500/50 rounded-xl mt-[360px] ml-[-370px]">
                            <TopOrnament />
                            Заказать доставку газа <br />в газгольдер
                            <BottomOrnament />
                        </a>

                        {isModalOpen && (
                            <div className="modal-overlay bg-white shadow-md w-[462px] h-[408px] px-8 pt-6 pb-8 mb-4 rounded-xl" >
                                <button className="modal-close bg-white m-3" onClick={closeModal}>
                                    <CloseIcon />

                                </button>
                                <div className="modal bg-white w-auto" >
                                    <div className="flex justify-between items-center mb-4 bg-white">
                                        <h2 className="text-[#2194FF] font-extrabold text-2xl uppercase bg-white text-center w-full">
                                            Доставим газ <br />
                                            за 4 часа
                                        </h2>

                                    </div>

                                    <TextField
                                        id="outlined-basic-1"
                                        label="Name"
                                        variant="outlined"
                                        // style={{ left: "160px", marginTop: "15px", color: "white" }}
                                        className="mt-4 bg-white ml-14 justify-center text-center w-[402px]"
                                    />
                                    <br />
                                    <TextField
                                        id="outlined-basic-2"
                                        label="Email"
                                        variant="outlined"
                                        style={{marginTop: "15px" }}
                                        className="bg-white text-white ml-14 w-[402px]"
                                    />

                                    <button className="bg-[#2194FF] w-[341px] ml-4 h-[87px] mt-4 p-4 rounded-xl">
                                        <TopOrnament2 />
                                        <p style={{zIndex:"-10"}} className='text-[#F1F1F1] font-bold text-2xl mt-[-25px]'>  Заказать доставку газа <br />
                                            в газгольдер</p>
                                        <BottomOrnament2 />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="z-0">
                        <img className='absolute ml-[150px]' src={Truck} alt="Image Truck" />
                    </div>
                </section>
            </main>
        </div>
    );
}