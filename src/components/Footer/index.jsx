import { GoHomeFill } from "react-icons/go";
import { RiAddCircleLine } from "react-icons/ri";

import Logo from "../../assets/images/logo.png"

import Button from "../Button"

import "./styles.css"

const Footer = ({ openModal }) => {
    return (
        <>
            <footer className="d-flex justify-content-center align-items-center">
                <img src={Logo} alt="AluraFlix" />
            </footer>

            <footer className="footer-mobile d-flex justify-content-center align-items-center">
                <button className="btn btn-blue d-flex">
                    <GoHomeFill fontSize={25} />
                    <span>HOME</span>
                </button>

                <RiAddCircleLine onClick={openModal} color="white" fontSize={45} />
            </footer>
        </>
    )
}

export default Footer;