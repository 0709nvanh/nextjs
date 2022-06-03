import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import NavBarMenu from './NavBarMenu'

const Layout = ({children}) => {
  return (
    <>
        <Container>
            <Head>
                <meta charset="UTF-8" />
                <meta httpEquiv='X-UA-Compatible' content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Next App</title>
            </Head>
            <header>
                <NavBarMenu />
            </header>
            <main>
                {children}
            </main>
        </Container>
    </>
  )
}

export default Layout