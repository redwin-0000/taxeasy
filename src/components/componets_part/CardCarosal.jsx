import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import  CardOne from "../Card/CardOne"
import  CardTwo from "../Card/CardTwo"
import  CardThree from "../Card/CardThree"
import  CardFour from "../Card/CardFour"
import  CardFive from "../Card/CardFive"
import  CardSix from "../Card/CardSix"
import  CardSeven from "../Card/CardSeven"
import  CardEight from "../Card/CardEight"
import  CardNine from "../Card/CardNine"
import  CardTen from "../Card/CardTen"
import Line from "../componets_part/Line"
function Ccarousel(){
        return (
            <section class="bg-[#020027] text-gray-600 body-font mt-4">
    <div class="container px-5  mx-auto  ">
        <div class="flex flex-wrap justify-center sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-gray-900 font-medium title-font  text-5xl mb-2 sm:mb-0">Benefits of <span  className="text-[#06aead]">TaxEasy App</span></h1>
        </div>
            <Carousel autoPlay>
               <div className='flex flex-row'>
               <div>
                <CardOne />
                </div>
               <div>
               <CardTwo />
                </div>
                <div>
                <CardThree />
                </div>
               </div>
               {/*  */}
              <div className='flex flex-row justify-center items-center'>
              <div>
                <CardFour />
                </div>
                <div>
                <CardFive />
                </div>
                <div>
                <CardSix />
                </div>
              </div>
                {/*  */}
                <div className='flex flex-row'>
                <div >
                <CardSeven />
                </div>
                <div>
                <CardEight />
                </div>
                <div>
                <CardNine />
                </div>
                <div>
                <CardTen />
                </div>
                </div>
            </Carousel>
            </div>
            <Line />
            </section>
        );
    }

export default Ccarousel;