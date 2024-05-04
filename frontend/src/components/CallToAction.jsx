import twilio from "../assets/images/twilio.png"
import slack from "../assets/images/slack.png"
import google from "../assets/images/google.png";
import paypal from "../assets/images/paypal.png";
import pinterest from "../assets/images/pinterest.png";
import mailchimp from "../assets/images/mailchimp.png";
const CallToAction = () => {
    return (
      <section className="callToAction">
        <div
          className="row justify-content-center"
          style={{
            padding: "3rem 0",
            backgroundColor: "#2b63d9",
            color: "#fff",
            margin: "0 calc(-50vw + 50%)",
          }}
        >
          <div className="col-md-8 d-flex flex-column align-items-center">
            <p>1% OF THE INDUSTRY</p>
            <h2 className="text-center">
              Welcome to your new digital reality that which will rock your
              world truly at all.
            </h2>
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn text-primary"
                style={{ backgroundColor: "#fff", fontWeight: 500 }}
              >
                Sign Up
              </button>
              <button className="btn btn-primary" style={{ fontWeight: 500 }}>
                Log in
              </button>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center"
          style={{
            padding: "3rem 0",
            backgroundColor: "#2b63d9",
            color: "#fff",
            margin: "0 calc(-50vw + 50%)",
          }}
        >
          <div className="col-md-10 d-flex justify-content-center flex-wrap gap-5" >
            <img src={twilio} alt="not found" />
            <img src={slack} alt="not found" />
            <img src={google} alt="not found" />
            <img src={paypal} alt="not found" />
            <img src={pinterest} alt="not found" />
            <img src={mailchimp} alt="not found" />
          </div>
        </div>
      </section>
    );
};

export default CallToAction;
