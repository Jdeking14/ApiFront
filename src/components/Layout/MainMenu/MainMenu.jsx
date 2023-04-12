import React, { useCallback } from 'react'
import { Drawer, Paper, IconButton, Divider } from '@material-ui/core'
import { useStyles } from '../../../style/style'
import { Menu as MenuIcon } from '@material-ui/icons'
import Logo from './gatillo.gif'

const MainMenu = ({ open, setOpen }) => {
    const classes = useStyles()

    const handleClose = useCallback(() => {
        setOpen(false)
    }, [setOpen])

    return (
        <Drawer anchor='left' open={open} onClose={handleClose}>
            <Paper className={classes.paper} elevation={0}>
                <div className={classes.div}>
                    <IconButton edge='start' color='inherit' onClick={handleClose}>
                        <MenuIcon />
                    </IconButton>
                    <img src={Logo} alt='...' className={classes.logo} />
                </div>
                <Divider />
            </Paper>
        </Drawer>
    )
}

export default MainMenu
