import branding from "../assets/images/branding.png";
const Branding = () => {
  return (
    <section className="branding">
      <div className="row align-items-center justify-content-between gap-3" style={{ padding: "2rem 0" }}>
        <div className="col-md-6">
          <h3>
            Demonstrate branding<br></br> consequently think outside
          </h3>
          <p style={{ color: "var(--text-color)" }}>
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque a diam tincidunt. Aenean malesuada tellus
            tellus faucibus mauris quisque mauris in.
          </p>
          <p style={{ color: "var(--text-color)" }}>
            <i style={{ color: "#437ef7" }} className="fa-solid fa-check"></i>{" "}
            Enterprise-grade security
          </p>
          <p style={{ color: "var(--text-color)" }}>
            <i style={{ color: "#437ef7" }} className="fa-solid fa-check"></i>{" "}
            99.9% guaranteed uptime SLA
          </p>
          <p style={{ color: "var(--text-color)" }}>
            <i style={{ color: "#437ef7" }} className="fa-solid fa-check"></i>{" "}
            Designated customer success team
          </p>
          <button className="btn btn-primary">
            Start now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="col-md-5">
          <img className="img-fluid" style={{ height: "30rem",width:"100%" }} src={branding} alt="not found" />
        </div>
      </div>
    </section>
  );
};

export default Branding;
