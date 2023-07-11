// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Link } from "react-router-dom" 
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './Login.css';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="white" align="center" {...props}>
      
//     </Typography>
//   );
// }


// const defaultTheme = createTheme();

// export default function SignInSide() {
//    const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     // Reset previous error messages
//     setEmailError('');
//     setPasswordError('');

//     // Perform form validation
//     let isValid = true;

//     if (!email) {
//       setEmailError('Email is required');
//       isValid = false;
//     }

//     if (!password) {
//       setPasswordError('Password is required');
//       isValid = false;
//     }

//     if (isValid) {
//       // Form is valid, proceed with submission
//       console.log('Form submitted:', {
//         email,
//         password
//       });
//     }
//   };

//   return (
    
//     <ThemeProvider theme={defaultTheme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid className='img'
//           item
//           xs={false}
//           sm={4}
//           md={7}
//         />
//         <Grid className="color" md={5}   >
//           <Box noValidate onSubmit={handleSubmit}
//             sx={{
//               my: 18,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              
//             </Avatar>
//             <Typography className='txt' component="h1" variant="h5">
//               Login 
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1, color:'black'}}>
//               <TextField className='cl' 
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//                 autoFocus
//               />
//               <TextField className='cl'
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="passwords"
//                 autoComplete="current-password"
//               />
//               <FormControlLabel className='txt'
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//       <Link to="/Navbar">
//       <Button
//   className='bo'
//   type="submit"
//   fullWidth
//   variant="contained"
//   sx={{ mt: 3, mb: 2, backgroundColor: 'brown' }} 
// >
//   Sign In
// </Button> </Link> <Grid container>
//                 <Grid item xs>
//                   <Link href="#" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="" variant="body2">
//                     <Link to="/Signup">
//                     {"Don't have an account? Sign Up"}
//                     </Link>
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }
import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom" 
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Login.css';
function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      
    </Typography>
  );
}
function SignInSide() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Reset previous error messages
    setEmailError('');
    setPasswordError('');

    // Perform form validation
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (isValid) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', {
        email,
        password
      });
    }
  };
 
  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
        <Grid className='img'
          item
          xs={false}
          sm={4}
          md={7}
        />
        <Grid className="color" md={5}   >
          <Box noValidate onSubmit={handleSubmit}
            sx={{
              my: 18,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              
            </Avatar>
            <Typography className='txt' component="h1" variant="h5">
              Login 
            </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, color: 'black' }}>
          <TextField
            className='cl'
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            className='cl'
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="passwords"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
           <FormControlLabel className='txt'
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
      <Link to="/Navbar">
      <Button
  className='bo'
  type="submit"
  fullWidth
  variant="contained"
  sx={{ mt: 3, mb: 2, backgroundColor: 'brown' }} 
>
  Sign In
</Button> </Link> <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="" variant="body2">
                    <Link to="/Signup">
                    {"Don't have an account? Sign Up"}
                    </Link>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
