import { FooterAdote } from "../components/footerAdote/FooterAdote";
import { HeaderAdote } from "../components/headerAdote/HeaderAdote";
import { AdotePet } from "../pages/adotePet/AdotePet";

function Adotepet(){
    return(
        <>
            <HeaderAdote/>
                <AdotePet/>
            <FooterAdote />
        </>
    )
}

export default Adotepet