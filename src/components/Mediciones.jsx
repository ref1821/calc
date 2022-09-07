import React, {useState} from 'react'
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

export const Mediciones = () => {
    const [message, setMessage] = useState(parseFloat());
    const [group, setGroup] = useState([]);
    const [mediav, setMediav] = useState(0);
    const [numb, setNumb] = useState(parseFloat(group.length))

    
    const handleChange = event => {
        setMessage(event.target.value);
    };

    const addChange = () => {
        group.push(parseFloat(message))
        console.log(group)
        var length = group.length
        setMediav((parseFloat(mediav)+parseFloat(message))/length);
        setMediav(mediav.toFixed(2))
        setMessage(0);
        
    };
    const submitChange = () => {
        return
        
    };
    const renderListOfUserNames = (names) => {
    
        return names.map(name => <li>x {name} |media {mediav} |Ea {Math.abs(name-mediav)} |Er {(mediav/name).toFixed(2)} |Ep {(mediav/name).toFixed(2)*100}</li>)
    }

    return (
        <div>
            <input
            id="message"
            name="message"
            type='number'
            onChange={handleChange}
            value={message}
            />

            <Button onClick={addChange}>add</Button>
            <Button onClick={submitChange}>Submit</Button>
            <p>{group}</p>
            
            <div>
                {renderListOfUserNames(group)}
            </div>
        </div>
    )
}
