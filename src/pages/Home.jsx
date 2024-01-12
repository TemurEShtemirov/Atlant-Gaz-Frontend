import React, { useState } from 'react'

import '../assets/css/home.css'
import '../assets/css/main.css'

import Logo from '../assets/images/Logo.png'
import { MoonIcon } from '../assets/images/MoonIcon'
import { SignIcon } from '../assets/images/SignIcon'
import { SunIcon } from '../assets/images/SunIcon'
import { CloudIcon } from '../assets/images/CloudIcon'
import { SnowIcon } from '../assets/images/SnowIcon'
import Truck from '../assets/images/truck.png'
import { SignIcon2 } from '../assets/images/SignIcon2'
import Truck2 from '../assets/images/truck2.png'
import BigBaloon from '../assets/images/big_baloon.png'
import Truck3 from '../assets/images/truck3.png';
import Calc from '../assets/images/calc.png'
import Baloon from '../assets/images/baloon.png'
import Lenta from '../assets/images/lenta.png'
import Clock from '../assets/images/clock.png'
import Sert from '../assets/images/sert.png'
import Transp from '../assets/images/transp.png'

import { CloseIcon } from '../assets/images/CloseIcon'
import { TextField } from '@mui/material'
import CreditCard from '../assets/images/CreditCard'
import Gas from '../assets/images/Gas'
import classNames from 'classnames';

import { images } from '../components'


export default function Home() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
    };

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


    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentImage(index);
    };
    const SignBottom = () => {
        return (
            <div style={{ zIndex: "9999" }} className='text-center justify-center items-center ml-[550px] mt-[-50px]'>
                <svg className='ml-[23.3px]' xmlns="http://www.w3.org/2000/svg" width={49} height={26} viewBox="0 0 49 26" fill="none">
                    <path d="M1 1L24.5 24.5L48 1" stroke="#2194FF" />
                </svg>

                <svg className='ml-[12px]' xmlns="http://www.w3.org/2000/svg" width={73} height={38} viewBox="0 0 73 38" fill="none">
                    <path d="M1 1L36.5 37L72 1" stroke="#2194FF" />
                </svg>

                <svg className='' xmlns="http://www.w3.org/2000/svg" width="101" height="52" viewBox="0 0 101 52" fill="none">
                    <path d="M1 1L50.5 51L100 1" stroke="#2194FF" />
                </svg>
            </div>
        );
    }

    return (
        <div className='w-full'>
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
                <section className='grid grid-flow-col auto-cols-max' >
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
                            <div className="modal-overlay bg-white shadow-md w-[462px] h-[408px] px-8 pt-6 pb-8 mb-4 rounded-xl" style={{ zIndex: "9999" }} >
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
                                        style={{ marginTop: "15px" }}
                                        className="bg-white text-white ml-14 w-[402px]"
                                    />

                                    <button className="bg-[#2194FF] w-[341px] ml-4 h-[87px] mt-4 p-4 rounded-xl" style={{ marginLeft: "30px" }}>
                                        <TopOrnament2 />
                                        <p style={{ zIndex: "-10" }} className='text-[#F1F1F1] font-bold text-2xl mt-[-25px]'>  Заказать доставку газа <br />
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

                <section className='mt-[20px]' style={{ backgroundColor: 'rgba(33, 148, 255, 0.05)', paddingBottom: "50px" }}>
                    <p className="w-full text-[#2194FF] text-center font-Russo_One text-4xl font-normal italic font-mono ml-[-15px] font-extrabold">Стоимость газа в ваш газгольдер сегодня</p>
                    <div className="grid grid-cols-4 mt-4">
                        <div className="pl-2.5">
                            <br />

                            <p className="text-[#F1F1F1] font-['Russo_One'] text-4xl font-bold font-mono not-italic ">Пропан</p>
                            <p className="text-[#2194FF] font-['Russo_One'] text-2xl font-bold not-italic font-mono">от 25 рублей за литр</p>
                            <p className="w-[253px] mt-[21px] text-[#F1F1F1] font-['Open_Sans'] font-mono text-base not-italic">Физически испарение происходит до -40 градусов, что позволяет использовать его в наших с вами погодных условиях</p>

                            <button onClick={openModal} className="custom-button">
                                Заказать
                            </button>

                            {isModalOpen && (
                                <div className="modal-overlay bg-white shadow-md w-[462px] h-[408px] px-8 pt-6 pb-8 mb-4 rounded-xl" style={{ zIndex: "9999" }}>
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
                                            style={{ marginTop: "15px" }}
                                            className="bg-white text-white ml-14 w-[402px]"
                                        />

                                        <button className="bg-[#2194FF] w-[341px] h-[87px] mt-4 p-4 rounded-xl" style={{ marginLeft: "30px" }}>
                                            <TopOrnament2 />
                                            <p style={{ zIndex: "-10" }} className='text-[#F1F1F1] font-bold text-2xl mt-[-25px]'>  Заказать доставку газа <br />
                                                в газгольдер</p>
                                            <BottomOrnament2 />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="ml-[-120px]">
                            <p className="text-[#F1F1F1] font-['Russo_One'] text-3xl text-center ml-[105px] font-bold font-mono not-italic w-full ">Идеальное соотношение</p>
                            <div className="flex ml-[185px] mt-3">
                                <p className="font-['Russo_One'] text-4xl font-bold not-italic font-mono" style={{ color: "rgba(241, 241, 241, 0.70)" }}>80%
                                    <br />
                                    пропана
                                </p>
                                <div className="w-[1px] h-[51px] ml-[25px] mr-[25px]" style={{ background: 'rgba(241, 241, 241, 0.30)' }}></div>
                                <p className="font-['Russo_One'] text-4xl font-bold not-italic font-mono" style={{
                                    color: "rgba(241, 241, 241, 0.70)"
                                }}>
                                    20%
                                    <br />
                                    бутана</p>
                            </div>
                            <img className='ml-[90px] mt-2' src={Truck2} alt="Image Truck2" />
                        </div>
                        <div className="ml-[170px]">
                            <br />

                            <p className="text-[#F1F1F1] font-['Russo_One'] text-4xl font-bold font-mono not-italic ">Бутан</p>
                            <p className="text-[#2194FF] font-['Russo_One'] text-2xl font-bold not-italic font-mono w-full text-center">от 16 рублей за литр</p>
                            <p className="w-[253px] mt-[21px] text-[#F1F1F1] font-['Open_Sans'] font-mono text-base not-italic">Испарение Бутана происходит только до 0 градусов и годится для использования в тёплое время года</p>

                            <button onClick={openModal} className="custom-button">
                                Заказать
                            </button>

                            {isModalOpen && (
                                <div className="modal-overlay bg-white shadow-md w-[462px] h-[408px] px-8 pt-6 pb-8 mb-4 rounded-xl" style={{ zIndex: "9999" }} >
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
                                            style={{ marginTop: "15px" }}
                                            className="bg-white text-white ml-14 w-[402px]"
                                        />

                                        <button className="bg-[#2194FF] w-[341px] h-[87px] mt-4 p-4 rounded-xl" style={{ marginLeft: "30px" }}>
                                            <TopOrnament2 />
                                            <p style={{ zIndex: "-10" }} className='text-[#F1F1F1] font-bold text-2xl mt-[-25px]'>  Заказать доставку газа <br />
                                                в газгольдер</p>
                                            <BottomOrnament2 />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                <SignBottom />
                <section className="mt-[20px]">
                    <p className="ml-[-90px] text-[#F1F1F1] text-center w-full font-['Russo_One'] text-4xl not-italic font-bold font-mono">Преимущества работы с нашей компание</p>
                    <div className="grid grid-cols-3 gap-3">
                        <div className="mt-[20px]">
                            <img className="ml-[100px]" src={BigBaloon} alt="" />
                            <p className=" text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Экономия
                                на хранилище </p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px]  w-[322px]">за счёт собственных цистерн
                                на нашей базе</p>
                        </div>
                        <div className="mt-[20px]">
                            <img className="ml-[100px]" src={Truck3} alt="" />
                            <p className=" text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Экономия
                                на транспорте</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px]  w-[322px]">более 10 собственный газовозов</p>
                        </div>
                        <div className="">
                            <img className="ml-[100px]" src={Calc} alt="" />
                            <p className=" text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Поставки напрямую
                                от производителей</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px] w-[322px]">нет наценки на стоимость газа как у перекупщиков и небольших частных компаний</p>
                        </div>
                        <div className="">
                            <img className="ml-[100px]" src={Baloon} alt="" />
                            <p className=" text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Любые объёмы поставки качественного газа</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px]  w-[322px]">вы получаете объем от 1 тонны до 20 тонн, с сертификатом качества газа</p>
                        </div>
                        <div className="mt-[20px]">
                            <CreditCard />
                            <p className="text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Оплата удобным
                                для вас способом</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px]  w-[322px]">все газовозы оснащены терминалами для оплаты вашего заказа</p>
                        </div>
                        <div className="mt-[20px]">
                            <Gas />
                            <p className=" text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Чистый газ
                                без примесей</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px] w-[322px]">нет наценки на стоимость газа как у перекупщиков и небольших частных компаний</p>
                        </div>
                        <div className="mt-[20px]">
                            <img className="ml-[100px]" src={Lenta} alt="" />
                            <p className=" text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Длина заправочных
                                рукавов — 50 метров</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px]  w-[322px]">не требуется подъезд автомобиля вплотную к резервуару</p>
                        </div>
                        <div className="mt-[20px]">
                            <img className="ml-[140px]" src={Clock} alt="" />
                            <p className=" text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono  w-[322px]">Доставка сжиженного газа
                                в формате 24/7</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px] w-[322px]">привезем газ в удобное для вас время или же  по графику</p>
                        </div>
                        <div className="mt-[20px]">
                            <img className="ml-[100px]" src={Sert} alt="" />
                            <p className="text-[#2194FF] font-['Russo_One'] text-2xl not-italic font-bold font-mono">Аттестованный
                                персонал</p>
                            <p className="text-[#F1F1F1] font-['Open_Sans'] text-base font-normal not-italic font-mono mt-[10px] w-[322px]">квалифицированные сотрудники проведут полную консультацию и дадут рекомендации, если такие нужны будут</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-[40px]">
                        <div className="z-0">
                            <img src={Transp} alt="" />
                        </div>
                        <div className="z-25">
                            <p className=" text-[#F1F1F1] w-[533px] font-['Russo_One'] font-bold font-mono text-4xl not-italic">
                                Благодаря нашему собственному автопарку мы можем
                                давать гарантию, что доставим <p className="text-[#2194FF]">за 4 часа</p>
                            </p>
                            <div className="w-[533px] h-[35px] bg-[#2194FF] mt-[20px]">
                                <p className="text-[#F1F1F1] w-[533px] font-['Open_Sans'] font-extrabold font-mono text-base not-italic pt-[5px] pl-3">Это сильное конкурентное преимущество, которым мы дорожим</p>

                            </div>
                        </div>
                    </div>
                </section>
                <section className='' style={{ backgroundColor: 'rgba(33, 148, 255, 0.05)', paddingBottom: "50px" }}>
                    <p className="text-center text-[#2194FF] font-['Russo_One'] text-4xl font-bold not-italic w-full font-mono pt-[34px]">Выберите свой объём Газовоза</p>
                    <div className="max-w-screen-md mx-auto mt-8 relative">
                        <div className="w-full overflow-hidden mt-[40px]">
                            <div
                                className="flex transition-transform duration-300 ease-in-out mt-[100px]"
                                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                            >
                                {images.map((item, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="slide-container">
                                            <img src={item.image} alt={`Image ${index + 1}`} className="w-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="absolute top-[-20px] left-0 right-0 flex justify-between items-center px-4 py-2">
                            {images.map((item, index) => (
                                <button
                                    key={index}
                                    className={classNames(
                                        'carousel-button',
                                        { 'active': currentImage === index }
                                    )}
                                    onClick={() => goToSlide(index)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2">
                            <button
                                className={classNames(
                                    'carousel-button',
                                    { 'carousel-button-disabled': currentImage === 0 }
                                )}
                                onClick={prevImage}
                                disabled={currentImage === 0}
                            >
                                {`← ${currentImage === 0 ? images.length : currentImage}`}
                            </button>
                            <button
                                className={classNames(
                                    'carousel-button',
                                    { 'carousel-button-disabled': currentImage === images.length - 1 }
                                )}
                                onClick={nextImage}
                                disabled={currentImage === images.length - 1}
                            >
                                {`${currentImage === images.length - 1 ? 1 : currentImage + 2} →`}
                            </button>
                        </div>
                    </div>
                    <button onClick={openModal} className="bg-[#2194FF] w-96 h-auto text-[#F1F1F1] font-['Russo_One'] font-mono font-semibold not-italic text-3xl text-center text-shadow-sm shadow-indigo-500/50 rounded-xl mt-[-100px] ml-[490px]">
                        <TopOrnament />
                        Заказать газ
                        <BottomOrnament />
                    </button>

                    {isModalOpen && (
                        <div className="modal-overlay bg-white shadow-md w-[462px] h-[408px] px-8 pt-6 pb-8 mb-4 rounded-xl" style={{ zIndex: "9999" }} >
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
                                    style={{ marginTop: "15px" }}
                                    className="bg-white text-white ml-14 w-[402px]"
                                />

                                <button className="bg-[#2194FF] w-[341px] ml-4 h-[87px] mt-4 p-4 rounded-xl" style={{ marginLeft: "30px" }}>
                                    <TopOrnament2 />
                                    <p style={{ zIndex: "-10" }} className='text-[#F1F1F1] font-bold text-2xl mt-[-25px]'>  Заказать доставку газа <br />
                                        в газгольдер</p>
                                    <BottomOrnament2 />
                                </button>
                            </div>
                        </div>
                    )}
                </section>
                <section className=''>
                    <p className="">Отзывы наших клиентов</p>
                    <div className="relative">
                        <div className="flex items-center justify-between absolute top-1/2 left-0 w-full transform -translate-y-1/2">
                            <button
                                onClick={prevSlide}
                                className="bg-gray-800 text-white px-4 py-2 rounded-full mr-2"
                            >
                                Prev
                            </button>
                            <button
                                onClick={nextSlide}
                                className="bg-gray-800 text-white px-4 py-2 rounded-full ml-2"
                            >
                                Next
                            </button>
                        </div>
                        <div className="flex justify-center items-center">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${index === currentSlide ? 'block' : 'hidden'
                                        } absolute left-1/2 transform -translate-x-1/2 transition-all duration-300`}
                                >
                                    <div className="flex">
                                        <div className="w-1/2">
                                            <img
                                                src={item.image}
                                                alt={`Slide ${index}`}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                        <div className="w-1/2 p-4 bg-white">
                                            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            {items.map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-4 h-4 bg-gray-500 rounded-full mx-2 cursor-pointer ${index === currentSlide ? 'bg-gray-800' : ''
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}