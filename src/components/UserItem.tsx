import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
}

const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div style={{padding: '15px', border: '1px solid tomato'}}>
            {user.id}. {user.name} lives in {user.address.city} {user.address.street}, zipcode: {user.address.zipcode}
        </div>
    );
};

export default UserItem;