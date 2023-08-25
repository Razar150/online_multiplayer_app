import { Outlet, Link } from "react-router-dom";
const GameLayout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/games">Games</Link>
                    </li>
                    <li>
                        <Link to="/players">Player</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default GameLayout;
