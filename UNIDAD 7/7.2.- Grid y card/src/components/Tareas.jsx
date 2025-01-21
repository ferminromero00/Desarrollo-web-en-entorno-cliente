import { useState } from 'react';

export default function Tareas() {

    const initialTodos = [];

    const [todos, setTodos] = useState(initialTodos);
    const [text, setText] = useState('');

    const HandlePush = () => {
        setText('');
        setTodos([{ id: todos.length, text: text }, ...todos]);
    }


    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={HandlePush}>Agregar</button>
            <ul>{todos.map(item => (<li key={item.id}>{item.text}</li>))}</ul>
        </>
    );
}
