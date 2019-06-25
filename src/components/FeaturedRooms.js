import React, { Component } from 'react';
import {RoomContext} from "../context";
import Title from "../components/Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    
    render() {

        const {loading, featuredRooms: rooms} = this.context;

        console.log("rooms", rooms);


        return (
            <div>
                featurtured room 
            </div>
        )
    }
}
