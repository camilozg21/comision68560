import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

const CartWidget = () => {
    return(
        <NavLink to="/comision68560/cart">
            <Badge badgeContent={4} color="success">
                <ShoppingCartIcon color="inherit" />
            </Badge>
        </NavLink>
    )
}

export default CartWidget