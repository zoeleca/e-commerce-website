export default function Layout() {
    return (
      <>
        <div className="">
          <div className="">
            <NavBar />
            <Container fluid>
              {/* c'est ici que les pages sont injectées lors de la navigation */}
              <Outlet />
            </Container>
            <Footer />
          </div>
        </div>
      </>
    );
  }