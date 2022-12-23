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

    render() {
        return(
            <div>
                <section className="bg-blend-darken bg-cover bg-hero-pattern">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <div class="grid grid-cols-2 gap-4 h-80 md:grid-cols-4 ">
                        {data.map((item) => {
                             return <><div onClick={(e) => this.handleClick(e)} id={item.id} class="bg-rose-400 text-white py-5 hover:bg-rose-500" >{item.name}<br/>{item.cost}</div></>
                        })}
                    </div>
    
                    </div>
                </section>
            </div>
        )
    }

}