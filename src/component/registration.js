import React from 'react'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useForm } from "react-hook-form";



const Registration = () => {
  const currentDate = new Date().toISOString().split("T")[0];

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const handleRegistration = (data) => console.log(data);


  return (
    <Grid align='center'>
      <Paper style={ {height:'400px',width:'40%',padding:'5px',margin:'100px 0px 0px 0px'}} elevation={20}>
      <Box>
      <Typography variant='h4' align='center'>
        Registration Form
      </Typography>
      <form onSubmit={handleSubmit(handleRegistration)}>

        <TextField  size="small" style={{width:'230px',margin:'8px'}}  {...register('firstname', { required: "First Name  is required" })}
          helperText={errors?.firstname && errors.firstname.message}
          error={errors?.firstname && errors.firstname.message}

          variant='outlined' label='First Name' placeholder='Enter Your First Name' />


        <TextField  size="small" style={{width:'230px',margin:'8px'}}  {...register('lastname', { required: "Last Name is required" })}

          helperText={errors?.lastname && errors.lastname.message}
          error={errors?.lastname && errors.lastname.message}

          variant='outlined' label='Last Name' placeholder='Enter Your Last Name' />

        <TextField size="small" style={{width:'230px',margin:'8px'}}  {...register('password', {
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}

          helperText={errors?.password && errors.password.message}
          error={errors?.password && errors.password.message}

          variant='outlined' label='Password' placeholder='Enter Your Password' />

        <TextField  size="small" style={{width:'230px',margin:'8px'}}  {...register("confirmPassword", {
          'required':'Password is required',
          validate: (value) =>
            value === getValues("password"),
          
        })}
          helperText={errors.confirmPassword && errors.confirmPassword.type === "validate" && <div>Passwords do not match</div>}

          error={errors.confirmPassword && errors.confirmPassword.type === "validate" && <div>Passwords do not match</div>}


          variant='outlined' label='Confirm Password' placeholder='Confirm your password' />






        <TextField  size="small" style={{width:'230px',margin:'8px'}}  type='email' {...register('email', {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i,
            message:'Invalid Email'
          }
        })}

          helperText={errors?.email && errors.email.message}
          error={errors?.email && errors.email.message}
          variant='outlined' label='Email' placeholder='Email is required' />

        <TextField size="small" style={{width:'230px',margin:'8px'}} {...register('date', { required: "Date is required" })}
          

          helperText={errors?.date && errors.date.message}
          error={errors?.date && errors.date.message}
          InputProps={{ inputProps: { max: currentDate } }}
          


              type='date' variant='outlined' placeholder='Select Date' />
            <Button type='submit'>Submit</Button>
      </form>


    </Box>
    </Paper>
    </Grid>
  )
}

export default Registration