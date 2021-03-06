import React, { Component } from 'react';
import items from "./data";


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featureRooms: [],
        loading: true
    };

    //getData

    componentDidMount() {
        
        let rooms = this.formatData(items),
            featuredRooms = rooms.filter(rooms => rooms.featured === true);

        this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false
        })
    }

    formatData(items) {
        let tempItems = items.map(item => { 

            let id = item.sys.id,
                images = item.fields.images.map(image => image.fields.file.url),
                room = {...item.fields, images, id};

                return room;
        });

        return tempItems;
    }
    
    getRoom = (slug) => { //2.26

    }

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext}
