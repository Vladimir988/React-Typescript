import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import TodoItem from "./TodoItem";
import List from "./List";

const TodosPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <List items={todos} renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo} />} />
    );
};

export default TodosPage;