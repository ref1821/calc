import React, {useState} from 'react'
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

export const Mediciones = () => {
    const [message, setMessage] = useState();
    const [group, setGroup] = useState([]);
    const [mediav, setMediav] = useState(0);

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const addChange = () => {
        group.push(message)
        console.log(group)
        setMessage('');
        console.log(group)
    };
    const submitChange = () => {
        return 
            
        
    };

    function createData(medicion, media, absoluto, relativo, potencial) {
        return {medicion, media, absoluto, relativo, potencial};
    };
    
    

    const mediax=[     
        group.map((x) => 
            parseFloat(x)+parseFloat(mediav),
        ),
    ];

    
    const rows = [
        createData(group[0], mediax),
        createData(group[1]),
        createData(group[2]),
        createData(group[3]),
        createData(group[4]),
        createData(group[5]),
    ];

  return (
    <div>
        <input
        id="message"
        name="message"
        type="number"
        onChange={handleChange}
        value={message}
        />

        <Button onClick={addChange}>add</Button>
        <Button onClick={submitChange}>Submit</Button>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">X</TableCell>
                        <TableCell align="right">Media</TableCell>
                        <TableCell align="right">E absoluto</TableCell>
                        <TableCell align="right">E relativo</TableCell>
                        <TableCell align="right">E potencial</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        
                        <TableCell align="right">{row.medicion}</TableCell>
                        <TableCell align="right">{row.media}</TableCell>
                        <TableCell align="right">{row.absoluto}</TableCell>
                        <TableCell align="right">{row.relativo}</TableCell>
                        <TableCell align="right">{row.potencial}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}
