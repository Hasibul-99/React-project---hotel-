import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free cocktails",
                info: "Loram (5/50 mg) Tablet is a combination medicine used for the treatment of high blood pressure. "
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "Loram (5/50 mg) Tablet is a combination medicine used for the treatment of high blood pressure. "
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free shuttle",
                info: "Loram (5/50 mg) Tablet is a combination medicine used for the treatment of high blood pressure. "
            },
            {
                icon: <FaBeer/>,
                title: "Strongest beer",
                info: "Loram (5/50 mg) Tablet is a combination medicine used for the treatment of high blood pressure. "
            }
        ]
    }
    
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                {
                    this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })
                }
                </div>
            </section>
        )
    }
}
