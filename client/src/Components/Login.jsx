import React,{useState} from 'react'
import {Container, Button, Typography,TextField, Snackbar, Alert} from "@mui/material"
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


export default function Login() {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [error,setError]=useState('');
  const [openerror,setOpenerror]=useState(false);
  const [opensuccess,setOpensuccess]=useState(false);
  const [successmessage,setSuccessmessage]=useState('');
  const navegar= useNavigate();


  const handCloseerror=()=>{
    setOpenerror(false);
  }

  const handOpensuccess=()=>{
    setOpensuccess(false);
  }


  const handleLogin= async (e)=>{
    e.preventDefault();
    try {
      const envio= await axios.post(
        "http://localhost:3001/gastapp/users/login",{username,password}
      );
      setSuccessmessage('Inicio de sesión exitoso');
      setOpensuccess(true)
      console.log(envio.data);
      navegar('/inicio')
    } catch (err) {
      if(err.response){
        setError(err.response.data.message);
        setOpenerror(true)
      }else{
        setError('ERROR DE RED');
        setOpenerror(true)
      }
    }
  }

  return (
    <Container
      maxWidth="xs"
      sx={{ backgroundColor: "rgba(3, 38, 62, 0.8)", mt: 10, borderRadius: 2 }}
    >
      <Typography
        variant="h4"
        component="h1"
        color="gray"
        align="center"
        gutterBottom
        sx={{ pt: 6, fontSize: 50 }}
      >
        Bienvenido
      </Typography>
      <form onSubmit={handleLogin}>
        <TextField
          fullWidth
          label="Username"
          variant="standard"
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          label="Contraseña"
          variant="standard"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          sx={{ mt: 2, mb: 2 }}
        >
          Iniciar sesión
        </Button>
      </form>
      <Snackbar
        open={openerror}
        autoHideDuration={3000}
        onClose={handCloseerror}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handCloseerror} severity="error" sx={{ width: "100%" }}>
          {error}
        </Alert>
      </Snackbar>
      <Snackbar
        open={opensuccess}
        autoHideDuration={6000}
        onClose={handOpensuccess}
        anchorOrigin={{ vertical: "top", horizontal:"right" }}
      >
        <Alert onClose={handOpensuccess} severity='success'>
          {successmessage}
        </Alert>
      </Snackbar>
    </Container>
  );
}
