import '../css/welcome.css';

const WelcomeSection = () => {

  return (
    <>
      <section className="welcome-section">
        <h3>Welcome</h3>
        <h2>AR Placement Consultancy PVT LTD</h2>
        <p>We are here to provide the best range of Solutions, Services or Placement to both prospective employers and employees. To provide the best quality from the talent pool to the employers, and help to place the right candidate at the right time, we provide search at all the Freshers and Experienced positions.</p>
        <div className="welcome-section-box">
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome1.png" alt="" />
                </div>
                <h2>Certified Company</h2>
                <p>Experienced and reputed placement agencies providing the unmatched services that our attained by our client.</p>
            </div>
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome2.png" alt="" />
                </div>
                <h2>Innovative Works</h2>
                <p>We help you get only the quality employees with an amazing set of skills</p>
            </div>
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome3.png" alt="" />
                </div>
                <h2>Business Solutions</h2>
                <p>Our consulting sessions has several layers and processes to suit the various needs.</p>
            </div>
            <div className="welcome-box-card">
                <div className="img-box">
                    <img src="images/welcome4.png" alt="" />
                </div>
                <h2>Client Management</h2>
                <p>We provide you with highly talented and dedicated individuals how can offer your business.</p>
            </div>
        </div>
      </section>
    </>
  )
}

export default WelcomeSection
