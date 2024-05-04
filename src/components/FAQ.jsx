const FAQ = () => {
  return (
    <section className="faq" style={{marginBottom:"8rem"}}>
      <div className="row justify-content-center" style={{ marginTop: "8rem"}}>
        <div className="col-md-8 d-flex flex-column align-items-center">
          <h2 style={{ fontWeight: "bolder" }}>Frequently asked questions</h2>
          <p className="text-center" style={{ color: "var(--text-color)" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s,{" "}
          </p>
        </div>
      </div>
      <div
        className="row justify-content-center"
        style={{
          boxShadow: " 0 0 2px rgba(0, 0, 0, 0.3)",
          borderRadius: "5px 5px 0 0",
          padding: "1.5rem 0",
          marginTop: "2.3rem",
        }}
      >
        <div className="col-md-10">
          <div className="faq_box">
            <div>
              <p style={{ fontWeight: "bold", margin: 0 }}>
                Authentification Issues
              </p>
              <p style={{ margin: 0, color: "var(--text-color)" }}>
                Porttitor nec est nisi, id nunc.
              </p>
            </div>
            <span
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                borderRadius: "5px",
                backgroundColor: "#f5faff",
                alignSelf: "center",
              }}
            >
              New
            </span>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center "
        style={{
          boxShadow: " 0 0 2px rgba(0, 0, 0, 0.3)",
          padding: "1.5rem 0",
        }}
      >
        <div className="col-md-10">
          <div className="faq_box">
            <div>
              <p style={{ margin: 0, fontWeight: "500" }}>
                Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.
              </p>
            </div>
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                color: "var(--text-color)",
              }}
            >
              Updated last Week<i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center "
        style={{
          boxShadow: " 0 0 2px rgba(0, 0, 0, 0.3)",
          padding: "1.5rem 0",
        }}
      >
        <div className="col-md-10">
          <div className="faq_box">
            <div>
              <p style={{ margin: 0, fontWeight: "500" }}>
                Cras vitae, scelerisque tortor augue.
              </p>
            </div>
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                color: "var(--text-color)",
              }}
            >
              Updated Today<i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center "
        style={{
          boxShadow: " 0 0 2px rgba(0, 0, 0, 0.3)",
          padding: "1.5rem 0",
        }}
      >
        <div className="col-md-10">
          <div className="faq_box">
            <div>
              <p style={{ margin: 0, fontWeight: "500" }}>
                Venenatis malesuada turpis sit integer felis rhoncus dictum eget
                ut.
              </p>
            </div>
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                color: "var(--text-color)",
              }}
            >
              Updated 2 days ago<i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center "
        style={{
          boxShadow: " 0 0 2px rgba(0, 0, 0, 0.3)",
          padding: "1.5rem 0",
        }}
      >
        <div className="col-md-10">
          <div className="faq_box">
            <div>
              <p style={{ margin: 0, fontWeight: "500" }}>
                Pretium ultricies donec non mollis senectus lectus libero
                tellus.
              </p>
            </div>
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                color: "var(--text-color)",
              }}
            >
              Updated 3 days ago<i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
      <div
        className="row justify-content-center "
        style={{
          boxShadow: " 0 0 2px rgba(0, 0, 0, 0.3)",
          padding: "1.5rem 0",
          borderRadius:"0 0 5px 5px"
        }}
      >
        <div className="col-md-10">
          <div className="faq_box">
            <div>
              <p style={{ margin: 0, fontWeight: "500" }}>
                Elit massa amet aenean ultrices vitae placerat augue.
              </p>
            </div>
            <span
              style={{
                cursor: "pointer",
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                color: "var(--text-color)",
              }}
            >
              Updated 4 days ago<i className="fa-solid fa-angle-down"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
