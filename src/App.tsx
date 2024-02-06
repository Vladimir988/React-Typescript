import React from 'react';
import Card, {CardVariant} from "./components/Card";

function App() {
    return (
        <div className="App">
            <Card onClick={() => {console.log('click: ')}} variant={CardVariant.outlined} width='200px' height='200px'>
                <button>Card Btn</button>
            </Card>
        </div>
    );
}

export default App;