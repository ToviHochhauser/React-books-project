import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import { useEffect, useRef, useState } from 'react';
import userApi from "./userApi";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid, TextField, Button } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { setAuth, clearAuth } from './userSlice';
import { useDispatch } from 'react-redux';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Consuming the outer theme is only required with coexisting themes, like in this documentation.
// If your app/website doesn't deal with this, you can have just:
// const theme = createTheme({ direction: 'rtl' })
// const theme = (outerTheme) =>
//     createTheme({
//         direction: 'rtl',
//     });

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});


const LOG_IN_URL = "/login";

const LogInOrSignUp = () => {
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await userApi.post(LOG_IN_URL, { email, password });
            setEmail('');
            setPassword('');
            setSuccess(true);
            console.log(JSON.stringify(res?.data));
            // Dispatch setAuth action with user data
            dispatch(setAuth({ user, email, password }));
        } catch (err) {
            console.log(err);
            // Focus on the first input field (userRef) if errRef is undefined
            if (userRef.current) {
                userRef.current.focus();
            }
        }
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const userRef = useRef();
    const emailRef = useRef(); // Ref for email field
    const passwordRef = useRef(); // Ref for password field
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [logIn, setLogIn] = useState(false);
    useEffect(() => {
        userRef.current.focus();
    }, []);

    // If the user is changing something, clear the error message
    useEffect(() => {
        setErrMessage('');
    }, [user, password]);

    useEffect(() => {
        if (errRef.current) {
            errRef.current.focus();
        }
    }, [errRef.current]);

    const logOrRegister = () => setLogIn((logIn) => !logIn);

    return (
        <Grid container direction="column" alignItems="center" justifyItems="center">
            {success ? (
                <section>
                    <h1>you managed!</h1>
                </section>
            ) : (
                <CacheProvider value={cacheRtl}>
                    {/* <ThemeProvider theme={theme}> */}

                        <Box dir="rtl" sx={{ width: '250px' }}>
                            {!logIn ? (
                                <section>
                                    <h1>הרשמה</h1 >
                                    <TextField
                                        variant="outlined"
                                        label="שם משתמש"
                                        fullWidth
                                        ref={userRef}
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
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
                                </section>) : (<h1>התחברות</h1>
                            )}
                            <TextField
                                variant="outlined"
                                label="אמייל"
                                fullWidth
                                ref={emailRef}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
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

                            <TextField
                                variant="outlined"
                                label="סיסמא"
                                fullWidth
                                type={showPassword ? 'text' : 'password'}
                                ref={passwordRef}
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                // required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        password.length > 0 && (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    )
                                }}
                                style={{ marginBottom: "2em" }}
                                autoComplete="off"
                            />
                        </Box>

                        <Button size="large" variant="contained" onClick={handleSubmit} style={{ backgroundColor: "#164a59" }}>
                            {!logIn ? ("הרשם") : ("התחבר")}
                        </Button>
                        {/* < br color="red"/> */}
                        {!logIn ? <h3>משתמש רשום?
                              <Button size="small" variant="contained" style={{ backgroundColor: "#164a59", marginRight: "20px" }} onClick={logOrRegister}>
                                התחבר
                            </Button></h3> : null}
                    {/* </ThemeProvider> */}
                </CacheProvider>
            )}
        </Grid>
    );
}

export default LogInOrSignUp;
