import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('controlled: ', value);
        console.log('uncontrolled: ', inputRef.current?.value);
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('dragHandler');
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROPED');
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('off it');
    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
        console.log('on it');
    }

    return (
        <div>
            <input type="text" value={value} onChange={changeHandler} placeholder="controlled" />
            <input type="text" ref={inputRef} placeholder="uncontrolled" />
            <button onClick={clickHandler}>Submit</button>
            <div
                onDrag={dragHandler}
                draggable
                style={{width: '100%', height: '100px', background: 'green', margin: '15px 0'}}
            ></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{
                    width: '100%', height: '100px', margin: '15px 0',
                    background: isDrag ? 'red' : 'green',
                }}
            ></div>
        </div>
    );
};

export default EventsExample;