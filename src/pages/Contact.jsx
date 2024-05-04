import ContactForm from "../components/ContactForm";
import ContactHeader from "../components/ContactHeader";

const Contact = () => {
  return (
    <section
      className="contact"
      style={{
        width: "100vw",
        backgroundColor: "#151b28",
        margin: "0 calc(-50vw + 50%)",
        color: "#fff",
        padding:"5rem"
      }}
    >
      <ContactHeader />
      <ContactForm />
    </section>
  );
}

export default Contact