import React, { useState } from "react";

import Button from "../components/Button/Button.component";

import "../styles/create.page.css";

const CreatePage = () => {
    const [toDo, setToDo] = useState("");

    return (
        <div className="add-todo">
            <input
                className="todo-input"
                type="text"
                onChange={(e) => setToDo(e.target.value)}
            />
            <Button toDo={toDo} buttonName={"Add TODO"} buttonAction={"add"} />
        </div>
    );
};

export default CreatePage;
