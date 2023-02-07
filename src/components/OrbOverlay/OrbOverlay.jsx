import { orbFoo } from "./orbCode";
import { useEffect } from "react";
import { CanvasStyled } from "./OrbOverlay.styled";

const OrbOverlay = () => {
    useEffect(()=>{
        orbFoo();
    }, []);

    return (
        <CanvasStyled className="orb-canvas"></CanvasStyled>
    )
}

export default OrbOverlay
