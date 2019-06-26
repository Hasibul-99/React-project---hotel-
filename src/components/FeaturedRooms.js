import React, { Component } from 'react';
import {RoomContext} from "../context";
import Room from "./Room";
import Loading from "./Loading";
import Title from "../components/Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {

        let {loading, featuredRooms: rooms} = this.context;

        rooms = rooms && rooms.length ? rooms.map(room => {
            return <Room key={room.id} room={room}/>
        }) : "";

        return (
            <section className="featured-rooms">
                <Title title="Featured rooms"></Title>
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>

            </section>
        )
    }
}
