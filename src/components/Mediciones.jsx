import React, {useState} from 'react'
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main:'#b71540',
      },
      secondary:{
        main:'#1e3799',
      },
      
    },
  });
  

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
        var sumada = parseFloat(sumada) + parseFloat(message)
        console.log(parseFloat(mediav), parseFloat(message), length)
        setMediav((parseFloat(sumada)/parseFloat(length)).toFixed(2));
        setMessage('');  
        console.log(mediav)
    };
    const renderListOfUserNames = (names) => {
    
        return names.map(name => <li>x {name} |media {mediav} |Ea {(Math.abs(name-mediav)).toFixed(2)} |Er {((Math.abs(name-mediav)).toFixed(2)/mediav).toFixed(4)} |Ep {(Math.abs(name-mediav)).toFixed(2)} |Er {((((Math.abs(name-mediav)).toFixed(2)/mediav).toFixed(4)*100).toFixed(2))}%</li>)
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div>
                <input
                id="message"
                name="message"
                type='number'
                onChange={handleChange}
                value={message}
                />

                <Button onClick={addChange}>add</Button>
                <div>
                    {renderListOfUserNames(group)}
                </div>
            </div>
        </ThemeProvider>
    )
}
