import React,{useState} from 'react'
import './signup.css'
import img from '../../image/Group 521.png'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {Paper,Typography} from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import {Container} from '@mui/material'

const Signup = () => {
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
      <Container>
        <div className="signup-page">
          <section className="left">
            <h2 classname='para' style={{color:'white',fontSize:'25px'}}>FIRST TIME</h2>
            <h1 className='para1'style={{color:'white',fontSize:'45px',marginBlock:'auto',marginTop:'-25px'}}>THESE DETAILS</h1>
            <h2 className='para2'style={{color:'white',fontSize:'25px',marginBlock:'auto'}}>ARE REQUIRED</h2>
            <img style={{height:"380px"}} src={img}/>
          </section>
          <section className="Right">
            <Card id="card">
                <CardContent>
                  <Box sx={{textAlign:'center'}}>
                    <Typography variant='h5' >Introduce Yourself</Typography>
                    <Typography body='2'>We keep this information private</Typography>
                  </Box>
                    <Box  sx={{  width: 500, maxWidth: '100%',padding:'15px' }}>
                       <TextField fullWidth label="Fullname" id="fullWidth" />
                    </Box>
                    <Box sx={{ width: 500, maxWidth: '100%', padding:'15px',}}>
                      <TextField fullWidth label="Email Address" id="fullWidth" />
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                     <div>
                        <FormControl sx={{ m: 1, width: 500,maxWidth: '100%',padding:'5px'  }} variant="outlined">
                           <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                           <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end">
                              {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                          }
                          label="Password"/>
                        </FormControl>
                      </div>
                    </Box>
                        <FormGroup>
                          <Box sx={{display:'flex',padding:'15px'}}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label={`I Have Read and accept the `} /> 
                            <a href={'#'}>Terms and conditions</a> 
                          </Box>
                        </FormGroup>
                        <Box sx={{display:'flex',justifyContent:'space-evenly' ,padding:'15px'}}>
                           <Button className="button" variant="contained">Create Account</Button>
                           <Typography body='2'>Already a Member?<a href={'#'}>Sign In</a></Typography>
                         </Box>
                </CardContent>
                 <CardActions>
                 </CardActions>
            </Card>
          </section>
        </div>
      </Container>
    )
}
export default Signup
