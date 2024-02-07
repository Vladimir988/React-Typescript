import React, {FC} from 'react';
import {ITodo} from "../types/types";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div style={{padding: '15px', margin: '3px 0', border: '1px solid green'}}>
            <input type="checkbox" checked={todo.completed} />
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;