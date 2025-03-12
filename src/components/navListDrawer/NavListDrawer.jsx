import { List, ListItem, ListItemButton, ListItemText } from "@mui/material"

const NavListDrawer = ({pages}) => {
    return(
        <>
        <nav>
            <List>
            {
                pages.map((page, index) => (
                    <ListItem key={index}>
                        <ListItemButton
                        component="a"
                        href={page.categoria}
                        >
                            <ListItemText>{page.nombre}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))
            }
            </List>
        </nav>
        </>
    )
}

export default NavListDrawer