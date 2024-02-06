import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {
    return (
        <div>
            {users.map(user =>
                <div key={user.id} style={{padding: '15px', border: '1px solid tomato'}}>
                    {user.id}. {user.name} lives in {user.address.city} {user.address.street}, zipcode: {user.address.zipcode}
                </div>
            )}
        </div>
    );
};

export default UserList;