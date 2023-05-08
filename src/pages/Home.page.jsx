import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetEmojiQuery } from "../store/emoji/emojiApi";

// import { toDoSelector } from "../store/toDos/toDos";

const HomePage = () => {
    const toDos = useSelector((state) => state.toolkit.toDos);
    const { data, error, isLoading } = useGetEmojiQuery();

    {
        if (data) {
            return (
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1> Welcome to RTK toDo App</h1>
                    {!toDos.length ? (
                        <h2>Your TODO List is EMPTY!</h2>
                    ) : (
                        toDos.map((toDo) => (
                            <h2 key={toDo}>
                                {data.htmlCode[0]} {toDo}
                            </h2>
                        ))
                    )}
                    <div className="links">
                        <Link to="/add-todo">Add TODO</Link>
                        {toDos.length !== 0 && (
                            <Link to="/delete-todo">Delete TODO</Link>
                        )}
                    </div>
                </div>
            );
        } else {
            return <h1>Is Loading...</h1>;
        }
    }
};

export default HomePage;
