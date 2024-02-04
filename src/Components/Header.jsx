import house from "/assets/house-solid.svg"
import github from "/assets/github.svg"
import linkedin from "/assets/linkedin.svg"

const Header = () => {
  return (
    <div className="header">
        <h1 className="title">CLOUD<span className="logo">DESIGN IT</span></h1>
      <div className="navbar">
        <a><img src={house} alt="house"/></a>
        <a href="#">CONTACT</a>
        <a href="#">ABOUT</a>
        <a href="#">RESUME</a>
        <a href="#"><img src={github} alt="github"/></a>
        <a><img src={linkedin} alt="linkedin" /></a>
      </div>
    </div>
  )
}

export default Header;