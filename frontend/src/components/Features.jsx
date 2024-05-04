import FeatureIcon1 from "../assets/images/FeatureIcon1.png";
import FeatureIcon2 from "../assets/images/FeatureIcon2.png";
import FeatureIcon3 from "../assets/images/FeatureIcon3.png";

const Features = () => {
  return (
    <section className="features">
      <div style={{ padding: "5rem 0" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 d-flex flex-column align-items-center gap-2">
            <h2 style={{ fontWeight: "bolder" }}>Messaging for all</h2>
            <p className="text-center" style={{ color: "var(--text-color)" }}>
              User generated content in real-time multiple touch points for
              offshoring.
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-md-4 d-flex flex-column justify-content-center gap-2">
              <img src={FeatureIcon1} alt="Feature Image" />
              <h4>Easier Work Organization</h4>
              <p style={{ color: "var(--text-color)" }}>
                Efficiently unleash cross-media information without cross-media
                value. Quickly timely deliverables for real-time schemas.
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center gap-2">
              <img src={FeatureIcon2} alt="Feature Image" />
              <h4>Fast Connection</h4>
              <p style={{ color: "var(--text-color)" }}>
                Completely pursue scalable customer cross- media through
                potentialities. Holistically quickly installed portals.
              </p>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center gap-2">
              <img src={FeatureIcon3} alt="Feature Image" />
              <h4>Easier Work Organization</h4>
              <p style={{ color: "var(--text-color)" }}>
                Objectively innovate empowered scalable manufactured products
                whereas parallel platforms predominate extensible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
