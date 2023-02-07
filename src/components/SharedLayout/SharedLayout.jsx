import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "components/App/App.syled";
import { Header, Logo, NavLinkStyled, FallbackMsg } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
        <Header>
            <Logo to="/">
                <span role="img" aria-label="computer icon">
                🎥
                </span>{" "}
                MovieLib
            </Logo>
            <nav>
                <NavLinkStyled to="/" end>Home</NavLinkStyled>
                <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </nav>
        </Header>
        <Suspense fallback={<FallbackMsg>Loading page...</FallbackMsg>}>
            <Outlet />
        </Suspense>
    </Container>
  )
};

export default SharedLayout;
