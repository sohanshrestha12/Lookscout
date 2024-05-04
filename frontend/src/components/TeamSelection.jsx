import Team1 from '../assets/images/Team1.png'
import Team2 from '../assets/images/Team2.png'
import Team3 from '../assets/images/Team3.png'
const TeamSelection = () => {
  return (
    <section className="TeamSelection">
      <div
        className="row d-flex justify-content-center"
        style={{ padding: "2rem 0", marginTop: "5rem" }}
      >
        <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
          <h3 style={{ fontWeight: "bolder" }}>The Core of Our Team</h3>
          <p style={{ color: "var(--text-color)", textAlign: "center" }}>
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment of people and great talent
            that truly rocks.
          </p>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-md-4 mb-5 d-flex flex-column align-items-center">
          <img className='img-fluid' style={{ width: "100%", marginBottom: "1rem" }} src={Team1}></img>
          <h5 style={{ margin: 0 }}>Morgan Drew</h5>
          <p style={{ color: "var(--text-color)" }}>Manager</p>
          <div className="icons d-flex gap-3" style={{ fontSize: "1.5rem" }}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
        <div className="col-md-4 mb-5 d-flex flex-column align-items-center">
          <img className='img-fluid' style={{ width: "100%", marginBottom: "1rem" }} src={Team2}></img>
          <h5 style={{ margin: 0 }}>Jeffery Walker</h5>
          <p style={{ color: "var(--text-color)" }}>Lead Designer</p>
          <div className="icons d-flex gap-3" style={{ fontSize: "1.5rem" }}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>

        <div className="col-md-4 mb-5 d-flex flex-column align-items-center">
          <img className='img-fluid' style={{ width: "100%", marginBottom: "1rem" }} src={Team3}></img>
          <h5 style={{ margin: 0 }}>Andrew Steve</h5>
          <p style={{ color: "var(--text-color)" }}>UI/UX Designer</p>
          <div className="icons d-flex gap-3" style={{ fontSize: "1.5rem" }}>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-telegram"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSelection;
