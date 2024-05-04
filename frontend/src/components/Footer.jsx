import Logo from "./Logo"
import fb from "../assets/images/fb.png"
import googleLogo from "../assets/images/googleLogo.png";
import apple from "../assets/images/apple.png";
import insta from "../assets/images/insta.png";
import hex from "../assets/images/hex.png";

const Footer = () => {
  return (
    <section className="footer">
      <div className="row gap-2 flex-wrap" style={{ padding: "5rem 0 2rem 0" }}>
        <div className="col-md-3 col-sm-5">
          <Logo />
          <p style={{ color: "text-color", marginTop: "1rem" }}>
            Generate outside the box thinking with the possibility to targtet
            the low.
          </p>
          <div className="d-flex gap-3">
            <img src={fb} alt="not found" />
            <img src={googleLogo} alt="not found" />
            <img src={apple} alt="not found" />
            <img src={insta} alt="not found" />
          </div>
        </div>
        <div className="col-md-2 col-sm-5">
          <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>Products</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Features</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Solutions</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>
            Integrations
          </p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>
            Enterprise
          </p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Solutions</p>
        </div>
        <div className="col-md-2 col-sm-5">
          <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>Resources</p>

          <p style={{ color: "var(--text-color)", margin: "6px" }}>Partners</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Community</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>
            Developers
          </p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>App</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Blog</p>
        </div>
        <div className="col-md-2 col-sm-5">
          <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>
            Why Choose Us?
          </p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Channels</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Scale</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>
            Watch the Demo
          </p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>
            Our Competition
          </p>
        </div>
        <div className="col-md-2 col-sm-5">
          <p style={{ fontWeight: "bold", marginBottom: "1rem" }}>Company</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>About Us</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>News</p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>
            Leadership
          </p>
          <p style={{ color: "var(--text-color)", margin: "6px" }}>Media Kit</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 d-flex flex-column align-items-center" style={{ marginTop: "2rem" }}>
            <img src={hex} alt="not found" />
            <p style={{color:"var(--text-color)"}}>&copy; 2023 Lookscout. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer