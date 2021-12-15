import React from "react";

const Rooms = () => {
    return (
        <>
        <input type="text" id="name" name="name" required/>
           <textarea id="story" name="story"
                rows="5" cols="33">
                It was a dark and stormy night...
            </textarea>
        <input type="number" id="nb_user" name="nbUsers" required/>
        </>
    )
};

export default Rooms;