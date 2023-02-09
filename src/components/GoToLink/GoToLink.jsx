import { GoToLinkStyled } from "./GoToLink.styled";

const GoToLink = ({goToPath, children}) => {
  return (
    <GoToLinkStyled to={goToPath}>
      {children}
    </GoToLinkStyled>
  )
}

export default GoToLink;
