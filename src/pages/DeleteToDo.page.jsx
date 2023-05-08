import React from "react";
import { useSelector } from "react-redux";

import { useGetEmojiQuery } from "../store/emoji/emojiApi";
import Button from "../components/Button/Button.component";
import "../styles/delete.page.css";

const DeletePage = () => {
    const toDos = useSelector((state) => state.toolkit.toDos);
    const { data, error, isLoading } = useGetEmojiQuery();

    return (
        <div>
            {toDos.map((toDo) => (
                <div className="todo-container" key={toDo}>
                    <h2>
                        {data.htmlCode[0]}
                        {toDo}
                    </h2>
                    <Button
                        toDo={toDo}
                        buttonName={"Delete TODO"}
                        buttonAction={"delete"}
                        key={toDo}
                    />
                </div>
            ))}
        </div>
    );
};

export default DeletePage;
