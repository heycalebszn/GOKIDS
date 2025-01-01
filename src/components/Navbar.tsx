import { logo } from "../assets";

export const Navbar = () => {
    return(
        <nav className="flex justify-between items-center shadow-2xl px-10">
            <div className="flex">
            <img src={logo} alt="GoKids" />
            <div className="flex flex-col">
                <h1></h1>
            </div>
            </div>

            <div className="flex gap-2">
            <ul className="flex gap-2">
                <li><a href="">Home</a></li>
            </ul>
            </div>
        </nav>
    )
}