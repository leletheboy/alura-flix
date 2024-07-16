import Logo from "../../assets/images/logo.png"
import Button from "../Button";

import './styles.css';

const Header = ({ openModal }) => {
    return (
        <div className="header d-flex justify-content-between align-items-center">
            <img src={Logo} alt="AluraFlix" />

            <div className="d-flex">
                <Button label="HOME" action={() => {}} />
                <Button label="NOVO VIDEO" action={openModal} color="white" />
            </div>
        </div>
    )
}

export default Header;