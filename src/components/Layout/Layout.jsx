import React, { useMemo, useState } from 'react'
import { Container } from '@material-ui/core'
import { useStyles } from '../../style/style'
import Header from './Header'
import MainMenu from './MainMenu'
import Footer from './Footer'

const Layout = ({ children }) => {
    const classes = useStyles()
    const [open, setOpen] = useState(false)

    const containerClass = useMemo(() => classes.container, [classes.container])

    return (
        <>
            <Header setOpen={setOpen} />
            <MainMenu open={open} setOpen={setOpen} />
            <Container maxWidth='lg' className={containerClass}>
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default Layout
