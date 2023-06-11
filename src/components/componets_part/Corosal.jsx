import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import serviceOne from "../img/stock-4.png";
import serviceTwo from "../img/stock-3.png";
import serviceThree from "../img/stock-2.png";
import serviceFour from "../img/stock.png";
function Ccarousel(){
        return (
            <Carousel>
                <div>
                    <img src={serviceTwo} alt='dssa' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
               <div>
                    <img src={serviceOne} alt='dssa' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={serviceThree} alt='dssa' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={serviceFour} alt='edwe'/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={serviceTwo} alt='dssa' />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
            </Carousel>
        );
    }

export default Ccarousel;