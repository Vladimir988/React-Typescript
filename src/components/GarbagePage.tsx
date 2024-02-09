import React, {FC} from 'react';
import EventsExample from "./EventsExample";
import Card, {CardVariant} from "./Card";

const GarbagePage: FC = () => {
    return (
        <div>
            <EventsExample />
            <Card onClick={() => {console.log('click: ')}} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Card Btn</button>
            </Card>
        </div>
    );
};

export default GarbagePage;