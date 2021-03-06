import SendIcon from '@mui/icons-material/Send';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import AddItem from '../Form/FormAddItem'
import { env } from '../../env';

const theme = createTheme();
function AddPage() {

    let navigate = useNavigate();

    let handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        //eslint-disable-next-line no-console

        const res = await axios.post(env.API_HOST, {
            title: data.get('title'),
            category: data.get('category'),
            isbn: data.get('isbn')
        });

        if (res.data) {
            return navigate("/");
        };
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
            <Typography component="h1" variant="h4" align="center" fontFamily="Roboto">
                Add New Item
            </Typography>
            <Typography component="h2" variant="h5" align="center" fontFamily="Roboto">
                To your Book Collection
            </Typography>
            <Container>
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} >
                            <AddItem />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Stack direction="row" spacing={40}>
                                    <Link to="/">
                                        <Button variant="outlined" >Back</Button>
                                    </Link>
                                    <Button variant="contained" endIcon={<SendIcon />} type="submit" >
                                        Submit
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Paper>
                </Container>
            </Container>
        </ThemeProvider>
    )
};

export default AddPage; 