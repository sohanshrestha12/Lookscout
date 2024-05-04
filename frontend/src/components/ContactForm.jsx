import axios from "axios";
import { Form, useNavigation } from "react-router-dom";
import InputText from "./InputText";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("http://localhost:5100/contact", data);
    toast.success("Contact sent successfully");
    return "/contacts";
  } catch (error) {
    console.log(error);
    return error;
  }
}

const ContactForm = () => {
   const navigation = useNavigation();
   const isSubmitting = navigation.state === "submitting";
  return (
    <>
      <ToastContainer />
      <Form method="post" className="Contact_form">
        <div
          className="row"
          style={{
            backgroundColor: "#1c2534",
            borderRadius: "px",
            padding: "2rem",
          }}
        >
          <div className="col-md-6 mb-3">
            <InputText
              labelName={"First Name"}
              InpType={"text"}
              placeholder={"Input"}
              name={"name"}
            />
          </div>
          <div className="col-md-6 mb-3">
            <InputText
              labelName={"Email address"}
              InpType={"email"}
              placeholder={"Input"}
              name={"email"}
            />
          </div>
          <div className="col-md-6">
            <InputText
              labelName={"Phone Number"}
              InpType={"number"}
              placeholder={"+000"}
              name="phone"
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="touch" style={{ marginBottom: "0.8rem" }}>
              Get in Touch With Us
            </label>
            <select
              name="touch"
              className="form-control"
              style={{
                backgroundColor: "#2c3444",
                color: "#fff",
                border: "none",
                backgroundImage:
                  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="white" d="M8 10.793l-4.146-4.147a.5.5 0 01.708-.708L8 9.293l3.438-3.438a.5.5 0 11.707.708L8 10.793z"/></svg>\')',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 5px center",
              }}
              required
            >
              <option value="" selected disabled hidden>
                Dropdown
              </option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Instagram">Instagram</option>
              <option value="Telegram">Telegram</option>
            </select>
          </div>
          <div className="col-md-12">
            <label htmlFor="message" style={{ marginTop: "0.8rem" }}>
              Message
            </label>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Hi We are Lookscout..."
              style={{
                resize: "none",
                width: "100%",
                backgroundColor: "#2c3444",
                color: "#fff",
                borderRadius: "10px",
                border: "none",
              }}
            ></textarea>
          </div>
          <div
            className="col-md-12 d-flex align-items-center gap-2"
            style={{ marginBottom: "0.8rem" }}
          >
            <input
              required
              type="checkbox"
              name="agreement"
              className="form-check-input"
            />
            <span> I agree with Lookscout Privacy Policy</span>
          </div>
          <div className="col-md-12">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "submitting" : "Submit"}
            </button>
          </div>
        </div>
      </Form>
    </>
  );
};

export default ContactForm;
