import "./Header.scss";
import Menu from "../Menu/Menu";

const Header = () => {
  return (
    <header>
      <Menu />
      <div className="box-title">
        <h2>Immersive experiences that deliver</h2>
      </div>
    </header>
  );
};

export default Header;
