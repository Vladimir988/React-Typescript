import React, {FC, useState, JSX} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariant;
    onClick?: () => void;
    children?: React.ReactNode;
}

// React.FunctionComponent | React.FC
const Card: FC<CardProps> = ({width, height, variant, onClick, children}) => {
    const [state, setState] = useState(0);
    return (
        <div
            style={{
                width,
                height,
                border: variant === CardVariant.outlined ? '1px solid tomato' : 'none',
                background: variant === CardVariant.primary ? 'tomato' : '',
            }}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Card;