import "./Creations.scss";

const Creations = () => {
  return (
    <div className="Creations">
      <div className="container">
        <div className="content">
          <h3>Our creations</h3>
        </div>
        <div className="actions">
          <button className="primary">See all</button>
        </div>
        <ul className="grid">
          <li className="card deep-earth">
            <h4 className="card-title">Deep Earth</h4>
          </li>
          <li className="card night-arcade">
            <h4 className="card-title">Night Arcade</h4>
          </li>
          <li className="card soccer-team">
            <h4 className="card-title">Soccer Team Vr</h4>
          </li>
          <li className="card the-grid">
            <h4 className="card-title">
              The
              <br />
              Grid
            </h4>
          </li>
          <li className="card from-up">
            <h4 className="card-title">FROM UP ABOVE VR</h4>
          </li>
          <li className="card pocket-borealis">
            <h4 className="card-title">Pocket Borealis</h4>
          </li>
          <li className="card the-curiosity">
            <h4 className="card-title">The curiosity</h4>
          </li>
          <li className="card make-fisheye">
            <h4 className="card-title">Make it fisheye</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Creations;
