import React, { useCallback } from 'react'
import { AppBar, IconButton, Typography, Button, Toolbar } from '@material-ui/core'
import { useHistory } from 'react-router'
import { Menu as MenuIcon } from '@material-ui/icons'

const Header = ({ setOpen }) => {
    const history = useHistory()

    const handleLogout = useCallback(() => {
        localStorage.clear()
        history.push('/login')
    }, [history])

    return (
        <AppBar  style={{ backgroundColor: '#1A73E8' }}>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={() => setOpen(true)}>
                    <MenuIcon />
                </IconButton>
                <Typography style={{ flexGrow: 1 }}>Mi aplicación</Typography>
                <Button variant='text' style={{ color: 'white', backgroundColor: '#1A73E8' }} onClick={handleLogout}>Log out</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Header
