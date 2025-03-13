import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav" style={{ padding: "10px", backgroundColor: "#333", color: "white" }}>
      {/* Navigation Links */}
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/randomcharacter" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Random Character</Link>

    </div>
  );
}

export default NavBar