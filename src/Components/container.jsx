import {Header} from "./Header/header.jsx";
import {Description} from "./Description/description.jsx";
import {Services} from "./Services/services.jsx";
import {Footer} from "./Footer/footer.jsx";
import {Choose} from "./Choose/choose.jsx";
import {Technologies} from "./Technologies/tech.jsx";

export const LandingPage = ()=>{
    return(<>
        <Header/>
        <Description/>
        <Services />
        <Choose />
        <Technologies />
        <Footer />
    </>)
}