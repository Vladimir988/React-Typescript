import React, {FC} from 'react';
import {IUser} from "../types/types";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: '15px', margin: '3px 0', border: '1px solid tomato', cursor: 'pointer'}}>
            {user.id}. {user.name} lives in {user.address.city} {user.address.street}, zipcode: {user.address.zipcode}
        </div>
    );
};

export default UserItem;