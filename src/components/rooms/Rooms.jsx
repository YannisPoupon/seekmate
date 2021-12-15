import React from "react";
import { useParams } from "react-router-dom";

const Rooms = () => {

    const { id } = useParams();

    const rooms = [
        {
            id: 1,
            name: 'Room1',
            desciption: '',
            nb_max_users: 6,
            users: [{ name: 'toto' }, { name: 'tata' }],
        },
        {
            id: 2,
            name: 'Room2',
            desciption: '',
            nb_max_users: 6,
            users: [{ name: 'toto' }, { name: 'tata' }],
        }
    ];

    const room = rooms.forEach(room => {
        console.log(room.id);
    })

    return (
        <h1>{ room }</h1>
    )
}

export default Rooms;