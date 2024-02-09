import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

const UserPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
            setUser(response.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <button onClick={() => {navigate('/users')}}>Back</button>
            <h1>User name: {user?.name}</h1>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Address: {user?.address.street} - {user?.address.city}, <br/> Zipcode: {user?.address.zipcode}</p>
        </div>
    );
};

export default UserPage;