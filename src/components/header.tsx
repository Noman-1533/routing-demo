import './header.css';

export function Header() {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="navList">
                    <li className="navItem">
                        <a href="/users" className="navLink">Users</a>
                    </li>
                    <li className="navItem">
                        <a href="/comments" className="navLink">Comments</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
