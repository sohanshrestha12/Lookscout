// eslint-disable-next-line react/prop-types
const Hero = () => {
  return (
    <section className="Hero">
      <div
        className="row justify-content-center "
        style={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "var(--secondary-backgroundColor)",
          width: "100vw",
          margin: "0 calc(-50vw + 50%)",
        }}
      >
        <div className="col-md-7 col-sm-10 d-flex flex-column p-5 justify-content-center align-items-center">
          <span
            className="text-primary"
            style={{ marginBottom: "1rem", fontWeight: "500" }}
          >
            1% OF THE INDUSTRY
          </span>
          <h1 className="text-center" style={{ fontWeight: "bolder" }}>
            Hype got you here.
          </h1>
          <h1 className="text-center" style={{ fontWeight: "bolder" }}>
            Stay for the support.
          </h1>
          <p
            className="text-center"
            style={{ color: "var(--text-color)", marginTop: "1rem" }}
          >
            We’ve been told it is possible to revolutionize the payment
            industry. We have not reinvented the wheel, we decided to build upon
            it - successfully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
