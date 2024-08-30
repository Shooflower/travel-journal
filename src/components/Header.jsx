import "./Header.css"
import globe from "../assets/globe.png"

export default function Header() {
    return (
        <nav>
            <img src={globe} className="header--icon"/><h2 className="header">my travel journal.</h2>
        </nav>
    )
}