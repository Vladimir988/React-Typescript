import React from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";

function App() {
    const users: IUser[] = [
        {id: 1, name: 'asdsad', email: 'asdasd', address: {city: 'qweqweqweqwe', street: 'asdasdasdasdasdasd', zipcode: '123123'}},
        {id: 2, name: 'asdsad2', email: 'asdasd2', address: {city: 'qweqweqweqwe2', street: 'asdasdasdasdasdasd2', zipcode: '123123'}}
    ];
    return (
        <div className="App">
            <Card onClick={() => {console.log('click: ')}} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Card Btn</button>
            </Card>
            <UserList users={users} />
        </div>
    );
}

export default App;