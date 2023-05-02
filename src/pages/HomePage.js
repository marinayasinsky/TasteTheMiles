import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function Home() {
  const navigate = useNavigate();
  const loggedIn = localStorage.getItem("token");

  return (
    <div className="homepage">
      <Container className="home d-flex flex-column align-items-center justify-content-center flex-wrap text-center">
        <h1 className="home-title">Marathon Training Made Easy</h1>
        <p className="home-text">
          Train smarter, not harder. Create a custom training plan, track your progress, and achieve your marathon goals with our app.
        </p>
        {loggedIn ? (
          <button className="home-btn" onClick={() => navigate("/training-plans")}>View Your Training Plan</button>
        ) : (
          <button className="home-btn" onClick={() => navigate("/workout")}>Workout</button>
        )}
      </Container>
    </div>
  );
}
