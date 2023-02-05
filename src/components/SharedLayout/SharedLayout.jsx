import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link, FallbackMsg } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
        <Header>
            <Logo>
                <span role="img" aria-label="computer icon">
                🎥
                </span>{" "}
                MovieLib
            </Logo>
            <nav>
                <Link to="/" end>Home</Link>
                <Link to="/movies">Movies</Link>
            </nav>
        </Header>
        <Suspense fallback={<FallbackMsg>Loading page...</FallbackMsg>}>
            <Outlet />
        </Suspense>
    </Container>
  )
};

export default SharedLayout;
