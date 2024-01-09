import React from 'react'
import '../assets/css/home.css'
import '../assets/css/main.css'
import Logo from '../assets/images/Logo.png'


export default function Home() {


    
    return (
        <div>
            <header className="">
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img className="h-54 w-auto" src={Logo} alt="Logo of Atlant Gaz" />
                        </a>
                        <div className="w-px h-9 bg-[#FFF] mx-6 mt-11"></div>
                        <p className="font-['Open_Sans'] font-sans text-[#2194FF] text-lg font-normal italic mt-8">
                            Расправь плечи <br />
                            в теплом доме
                        </p>
                        <div className="ml-80 mt-6">
                            <p href="#" className="font-semibold leading-6 text-[#F1F1F1] font-[Russo_One] font-sans text-2xl not-italic">
                                +998 99 543 0660
                            </p>
                            <a href="tel:+998995430660" className="text-base font-semibold leading-6 text-[#2194FF] font-['Open_Sans'] font-sans not-italic">
                                Срочный вопрос
                            </a>
                        </div>
                    </div>
                    {/* <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <Popover.Group className="hidden lg:flex lg:gap-x-12">


                        <a href="#" className="text-sm font-semibold leading-6 text-white">
                            Features
                        </a>

                    </Popover.Group> */}
                </nav>
               
            </header>
            <main>

            </main>

        </div>
    )
}
