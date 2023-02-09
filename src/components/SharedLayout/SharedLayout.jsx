import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "components/App/App.syled";
import Loader from "components/Loader";
import { Header, Logo, NavLinkStyled } from './SharedLayout.styled';
import OrbOverlay from "components/OrbOverlay";

const SharedLayout = () => {
  return (
    <>
       <OrbOverlay />
        <Header>
            <Container>
                <Logo to="/">
                    <span role="img" aria-label="computer icon">
                    🎥
                    </span>{" "}
                    <span className="logo-txt">
                        MovieLib
                    </span>
                </Logo>
                <nav>
                    <NavLinkStyled to="/" end>Trending</NavLinkStyled>
                    <NavLinkStyled to="/movies">Search movie</NavLinkStyled>
                </nav>
            </Container>
        </Header>
        <Container>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    </>
  )
};

export default SharedLayout;
