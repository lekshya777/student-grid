import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Login() {
    return (
       

       <Grid container>

<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>





</Grid>

<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
<Typography>STUDENT APP</Typography>
<TextField 
type="text"
variant="outlined"
required
fullWidth
margin="normal"
label="NAME"
/>
<TextField
type="text"
label="admission number"
variant="outlined"
required
fullWidth
margin="normal"
/>
<TextField
type="text"
label="roll number"
variant="outlined"
required
fullWidth
margin="normal"
/>
<TextField
type="text"
label="college"
required
fullWidth
variant="outlined"
margin="normal"
/>
<TextField 
type="text"
label="DOB"
variant="outlined"
margin="normal"
required
fullWidth
/>
<TextField 
type="text"
label="mobile number"
variant="outlined"
margin="normal"
required
fullWidth
/>
<TextField 
type="text"
label="email-id"
variant="outlined"
margin="normal"
required
fullWidth
/>
<TextField 
label="password"
margin="normal"
variant="outlined"
required
fullWidth
type="text"
/>
<TextField
type="text"
 variant="outlined"
 margin="normal"
 required
fullWidth
label="confirm password"
/>
<Button
color="inherit" fullWidth margin="normal"
variant="contained">SUBMIT</Button>

</Grid>
<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>





</Grid>


</Grid>











    )
}
