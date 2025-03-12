import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import CarWidget from "../CartWidget/CartWidget";
import logo from "../../assets/img/logo.webp"
import { useNavigate } from 'react-router-dom';
import NavListDrawer from '../navListDrawer/NavListDrawer';


const pages = [
    {nombre:'Hombres',
    categoria: "men's clothing"}, 
    {nombre:'Mujeres',
    categoria: "women's clothing"}, 
    {nombre:'Joyería',
    categoria: "jewerly"}, 
    {nombre:'Tecnología',
    categoria: "electronics"}]

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <IconButton
                color="inherit"
                size='large'
                onClick={() => navigate("/comision68560")}
                >
                    <img src={logo} width={50}/>
                </IconButton>
                <Box sx={{display: {xs:"none", sm:"block"},
                        flexGrow:1}}>
                    {
                        pages.map((page,index) => (
                            <Button 
                            color="inherit" 
                            key={index}
                            component="a"
                            href={`/comision68560/category/${page.categoria}`}
                            >
                                {page.nombre}
                            </Button>
                        ))
                    }
                </Box>
                {/* <NavListDrawer pages={pages}/> */}
                <CarWidget/>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar