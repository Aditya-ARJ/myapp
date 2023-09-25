import React from "react";
import { Container, Box, Grid, Typography, TextField, Button, Avatar } from "@mui/material";//


import "../login.css";
import { useForm } from "react-hook-form";
import { LockOpenOutlined } from "@material-ui/icons";
function Login() {
    
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
    return (
        <Container maxWidth={false} disableGutters style={{

            height: '100vh', alignItems: "center",
            display: 'flex',
            justifyContent: "center"
        }}>

            <Box sx={{ height: '60vh', bgcolor: 'white', width: '30vw',padding:'8px' }}>

                <form onSubmit={handleSubmit(handleRegistration)}>
                    <Grid gridRow={5}>
                        <Grid xs={1}>
                            <Box sx={{height:'10vh',display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', }}>
                                <LockOpenOutlined></LockOpenOutlined>
                            </Avatar>
                            </Box>
                        </Grid>
                        <Grid xs={2}>
                            <Box sx={{  height: '10vh' }}>
                                <Typography variant="h5" component='h1' align="center">  Sign In</Typography>
                            </Box>
                        </Grid>
                        <Grid xs={3}>
                            <Box sx={{ height: '10vh' }}>

                                <TextField size="small" fullWidth  type='email' {...register('email', {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
                                        message: 'Invalid Email'
                                    }
                                })}

                                    helperText={errors?.email && errors.email.message}
                                    error={errors?.email && errors.email.message}
                                    variant='outlined' label='Email' placeholder='Email is required' />
                            </Box>
                        </Grid>
                        <Grid xs={4}>
                            <Box sx={{ height: '10vh' }}>

                                <TextField size="small" fullWidth required   {...register('password', {
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    }
                                })}

                                    helperText={errors?.password && errors.password.message}
                                    error={errors?.password && errors.password.message}

                                    variant='outlined' label='Password' placeholder='Enter Your Password' />
                            </Box>

                        </Grid>
                        <Grid xs={5}>
                            <Box sx={{ height: '10vh' }}>
                                <Button  type="submit" 
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>Sign In</Button>


                            </Box>
                        </Grid>

                    </Grid>
                </form>
            </Box>

        </Container>

        // <Grid
        //       align="center"
        //       justifyContent='center'
        //       alignItems={'center'}
        //       alignContent={'center'}

        //   style={{ height: "100vh", backgroundColor: "aqua" }}
        // >
        //   <Paper className="Grid-paper" elevation={20}>
        //     <Grid
        //       item
        //       xs={12}
        //       style={{
        //         backgroundColor: "yellow",
        //         alignContent: "flex-start",
        //         alignItems: "flex-start",
        //         verticalAlign: "left"
        //       }}
        //     >

        //     </Grid>
        //     <Grid item xs={12} style={{ backgroundColor: "red" }}>
        //       <form onSubmit={handleSubmit(handleLogin)}>
        //         <TextField
        //           size="small"
        //           style={{ width: "230px", margin: "8px" }}
        //           type="email"
        //           {...register("email", {
        //             required: "Email is required",
        //             pattern: {
        //               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
        //               message: "Invalid Email"
        //             }
        //           })}
        //           helperText={errors?.email && errors.email.message}
        //           error={errors?.email && errors.email.message}
        //           variant="outlined"
        //           label="Email"
        //           placeholder="Email is required"
        //         />
        //         <TextField
        //           size="small"
        //           style={{ width: "230px", margin: "8px" }}
        //           {...register("password", {
        //             required: "You must specify a password",
        //             minLength: {
        //               value: 8,
        //               message: "Password must have at least 8 characters"
        //             }
        //           })}
        //           helperText={errors?.password && errors.password.message}
        //           error={errors?.password && errors.password.message}
        //           variant="outlined"
        //           label="Password"
        //           placeholder="Enter Your Password"
        //         />
        //         <Button type="submit">Submit</Button>
        //       </form>
        //     </Grid>
        //   </Paper>
        // </Grid>
    );
}

export default Login;
