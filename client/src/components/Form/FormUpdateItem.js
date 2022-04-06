import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

function UpdateItem() {
    return (
        <React.Fragment>
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
                <Grid item xs={12} sm={12}>
                    <TextField
                        required
                        id="isbn"
                        name="isbn"
                        label="ISBN"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default UpdateItem;