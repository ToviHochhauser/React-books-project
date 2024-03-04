import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid, TextField, Button } from "@mui/material";

const BookDetails = (book) => {

    return (

        <Grid container direction="column" alignItems="center" justifyItems="center">
            <>
                <h1>התחברות</h1>
                <Box dir="rtl" sx={{ width: '250px' }}>
                    <TextField
                        variant="outlined"
                        label="שם משתמש"
                        fullWidth
                        style={{ marginBottom: "2em" }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        autoComplete="off"
                    />
                    <TextField
                        variant="outlined"
                        label="אמייל"
                        fullWidth
                      
                        style={{ marginBottom: "2em" }}
                        dir='ltr'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" dir="rtl">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        // Aligns the label to the right
                        autoComplete="off"
                    />

                </Box>
                <Button size="large" variant="contained" style={{ backgroundColor: "#164a59" }}>
                    התחבר
                </Button>

            </>


        </Grid>
    );
}


export default BookDetails;