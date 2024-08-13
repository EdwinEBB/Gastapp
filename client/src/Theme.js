import {createTheme} from "@mui/material";

//creación del tema

const Themecol=createTheme({
    palette:{
        primary:{
            main:"#000028"
        },
        secondary:{
            main:"#00DD97"
        }
    },
    typography:{
        fontFamily:"Helvetica",
        h1:{
            fontSize:"100px"
        }
    }
})

export default Themecol;