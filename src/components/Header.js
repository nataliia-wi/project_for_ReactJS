import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
            <div className="container-fluid">
                <NavLink className="navbar-brand" aria-current="page" to="/">ShareNotes</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/note">Note</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/create">Create</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        // <div >
        //     <nav className="navbar">
        //         <ul>
        //             <li><NavLink className="" to="/">Home</NavLink></li>
        //             <li><NavLink className="" to="/note">Note</NavLink></li>
        //             <li><NavLink className="" to="/create">Create</NavLink></li>
        //             <li><NavLink className="" to="/about">About</NavLink></li>
        //         </ul>
        //     </nav>
        // </div>
    );
}

export default Header;