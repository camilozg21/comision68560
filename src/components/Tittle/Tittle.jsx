import { Box } from "@mui/material"
import logo from "../../assets/img/logo.webp"

const Tittle = () =>{
    return(
        <Box display={"flex"}textAlign={"center"}>
            <img src={logo} width={150}/>
            <h1>FRUVECINO</h1>
        </Box>
    )
}

export default Tittle