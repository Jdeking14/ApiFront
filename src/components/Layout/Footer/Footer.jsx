import React, { memo } from 'react'
import { Container, Typography } from '@material-ui/core'
import { useStyles } from '../../../style/style'

const Footer = memo(() => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Container maxWidth='sm'>
                <Typography align='center'>Fuove © {new Date().getFullYear()}</Typography>
            </Container>
        </footer>
    )
})

export default Footer
