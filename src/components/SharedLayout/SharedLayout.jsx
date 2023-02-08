import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "components/App/App.syled";
import { Header, Logo, NavLinkStyled, FallbackMsg } from './SharedLayout.styled';
import OrbOverlay from "components/OrbOverlay";

const SharedLayout = () => {
    // const [bg, setBg] = useState(true);
    // const toggleClass = !bg ? "off" : ''; 
    // <Toggle className={toggleClass} type="button" onClick={() => {setBg(!bg);}}/>
  return (
    <>
       {/* <OrbOverlay /> */}
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
                    <NavLinkStyled to="/" end>Home</NavLinkStyled>
                    <NavLinkStyled to="/movies">Movies</NavLinkStyled>
                </nav>
            </Container>
        </Header>
        <Container>
            <Suspense fallback={<FallbackMsg>Loading page...</FallbackMsg>}>
                <Outlet />
            </Suspense>
        </Container>
    </>
  )
};

export default SharedLayout;
