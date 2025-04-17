import Logo from "./Logo";
import Nav_bar from "./Nav_bar";
export const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="header-text">
        <h2>Food Delivery</h2>
      </div>
      <Nav_bar />
    </div>
  );
};
export default Header;
