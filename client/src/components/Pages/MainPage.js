import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import axios from 'axios';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

const theme = createTheme();


function MainPage() {
    // useState to require a data from database
    const [bookItems, setBookItems] = useState();
    const [bookItemDelete, setBookItemDelete] = useState();

    const navigate = useNavigate();
    useEffect(async () => {
        const response = await axios.get("http://localhost:4700");
        setBookItems(response);
    }, [])

    // delete button 
    let deleteItem = (row) => {
        const deletedItem = axios.delete("http://localhost:4700",
            {
                data: { _id: row._id }
            });
        setBookItemDelete(deletedItem);
    }

    //add button --> redirect to new route.
    let addItem = (event) => {
        return navigate("/addbook");
    }
    
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                    position: 'relative',
                    borderBottom: (t) => `1px solid ${t.palette.divider}`,
                }}
            >
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        LN Collection
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Book Collection
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>ISBN</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {bookItems && bookItems.data.map((row) => (
                                    <TableRow key={row.title}>
                                        <TableCell>{row.title}</TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{row.isbn}</TableCell>
                                        <TableCell>
                                            <IconButton aria-label="delete" onClick={() => deleteItem(row)}> <DeleteIcon /> </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <Stack alignItems="center" direction="row" spacing={10} justifyContent="center">
                    <Fab size="medium" color="secondary" aria-label="add" onClick={() => addItem()}><AddIcon /></Fab>
                </Stack>
            </Container>
        </ThemeProvider>
    );
}

export default MainPage;