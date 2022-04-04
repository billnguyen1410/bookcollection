
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
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const theme = createTheme();
function AddPage() {

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
                        Your Book Collection
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="title"
                                name="title"
                                label="Title"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="category"
                                name="category"
                                label="Category"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="price"
                                name="price"
                                label="Price"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="image"
                                name="image"
                                label="Image"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                name="description"
                                label="Description"
                                fullWidth
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </ThemeProvider>
    )
};

export default AddPage; 