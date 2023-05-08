import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actions } from "../../store/toDos/toDos";
import { useGetEmojiQuery } from "../../store/emoji/emojiApi";

const Button = ({ toDo, buttonName, buttonAction }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { refetch } = useGetEmojiQuery();

    const buttonClick = () => {
        refetch();
        if (buttonAction === "add" && toDo.length > 0) {
            dispatch(actions.createToDo(toDo));
            navigate("/");
        }

        if (buttonAction === "delete") {
            dispatch(actions.deleteToDo(toDo));
            navigate("/");
        }

        if (buttonAction === "add" && toDo.length === 0) {
            navigate("/");
        }
    };

    return <button onClick={() => buttonClick()}>{buttonName}</button>;
};

export default Button;
