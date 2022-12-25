import React from "react";
import Link from "next/link";

import data from "../data/data.json"
export default class Hero extends React.Component{

    constructor() {
        super();
        this.state = {
            selectedID: " "
        } 
        this.handleClick = this.handleClick.bind(this);

    }


    handleClick(e) {
        console.log(e.target.id);
    }

    showStars(item){
        const starTotal = 5;
        const starPercentage = (item.rating / 5) * 100;
        const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
        document.querySelector('.stars-inner').style.width = starPercentageRounded;
        //document.querySelector(`.${item.rating} .stars-inner`).style.width = starPercentageRounded;
    }


    render() {
        return(
            <div>
                <section className="bg-blend-darken bg-cover bg-hero-pattern">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <div class="grid grid-cols-2 gap-4 h-80 md:grid-cols-4 ">
                        {data.map((item) => {
                            this.showStars(item)
                             return <><div onClick={(e) => this.handleClick(e)} id={item.id} class="bg-rose-400 text-white py-5 px-5 hover:bg-rose-500 text-left">
                                 <span className="font-bold">{item.name}</span>
                                 <div class = "stars-outer">
                                     <div class = "stars-inner"></div>
                                 </div>
                                 <br/>Lender: {item.lender}
                                 <br/>Duration: {item.duration == 1 ? <>1 day</> : <>Up to {item.duration} days</>}
                                 <br/>Base Cost: {item.cost}
                                 </div></>
                        })}
                    </div>
    
                    </div>
                </section>
            </div>
        )
    }

}