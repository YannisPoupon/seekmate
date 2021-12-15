import React from "react";
import { ListGroup } from 'react-bootstrap';

const Roomslist = () => {
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
    const roomsList = rooms.map((room) => {
        return <ListGroup.Item action href={`/room/${room.id}`}> { room.name }  </ListGroup.Item>;
      })

    return (
        <ListGroup >
            { roomsList }
        </ListGroup>
    )
}

export default Roomslist;