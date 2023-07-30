import "./Home.css";
const Home = () => {
  const info = {
    name: "Mbote-Joseph",
    occupation: "Angular Developer",
    course: "BSc. Computer Science",
  };

  return (
    <div>
      <div className="hero">
        <div className="welcome">
          <h1>Hi, {info.name} </h1>
          <h2>Welcome Back,</h2>
        </div>
        <div className="card">
          <h1>{info.name}</h1>
          <p>{info.occupation}</p>
          <p>{info.course}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
