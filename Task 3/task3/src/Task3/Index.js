import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      website: "",
      imglink: "",
      gender: "",
      skills: [],
      studentDetails: [],
    };
  }
  handleInputChange = (event) => {
    const { id, type, name, checked, value } = event.target;

    if (type === "checkbox") {
      // Handle checkbox inputs
      if (checked) {
        this.setState((prevState) => ({
          skills: [...prevState.skills, name],
        }));
      } else {
        this.setState((prevState) => ({
          skills: prevState.skills.filter((skill) => skill !== name),
        }));
      }
    } else {
      // Handle other inputs
      this.setState({ [id]: value });
    }
  };

  handleEnroll = () => {
    // Handle student enrollment logic here
    // You can access form data in this.state
    const { name, email, website, imglink, gender, skills, studentDetails } =
      this.state;

    const selectedGender =
      gender === "male" ? "Male" : gender === "female" ? "Female" : "";
    const selectedSkills = skills.join(", ");

    const newStudentDetails = [
      ...studentDetails,
      {
        name,
        email,
        website,
        imglink,
        gender: selectedGender,
        skills: selectedSkills,
      },
    ];
    console.log(newStudentDetails);
    this.setState({
      studentDetails: newStudentDetails,
      name: "",
      email: "",
      website: "",
      imglink: "",
      gender: "",
      skills: [],
    });
  };

  handleClear = () => {
    // Clear form fields here
    this.setState({
      name: "",
      email: "",
      website: "",
      imglink: "",
      gender: "",
      skills: [],
    });
  };

  render() {
    return (
      <div>
        <h1>Student Enrollment Form</h1>
        <div className="container">
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
            <label htmlFor="website">Website:</label>
            <input
              type="url"
              id="website"
              value={this.state.website}
              onChange={this.handleInputChange}
            />
            <div className="gender">
              <label htmlFor="gender" style={{ marginRight: "17px" }}>
                Gender:
              </label>
              <label htmlFor="Male">Male</label>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleInputChange}
              />
              <label htmlFor="Female">Female</label>
              <input
                type="radio"
                id="gender"
                name="gender"
                value="female"
                checked={this.state.gender === "female"}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="skill">
              <label htmlFor="skills" style={{ marginRight: "17px" }}>
                Skills:
              </label>
              <label htmlFor="html">HTML</label>
              <input
                type="checkbox"
                id="html"
                name="HTML"
                checked={this.state.skills.includes("HTML")}
                onChange={this.handleInputChange}
              />
              <label htmlFor="css">CSS</label>
              <input
                type="checkbox"
                id="css"
                name="CSS"
                checked={this.state.skills.includes("CSS")}
                onChange={this.handleInputChange}
              />
              <label htmlFor="js">JavaScript</label>
              <input
                type="checkbox"
                id="js"
                name="JavaScript"
                checked={this.state.skills.includes("JavaScript")}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="buttons">
              <button onClick={this.handleEnroll}>Enroll Student</button>
              <button onClick={this.handleClear}>Clear</button>
            </div>
          </div>
          <hr className="vertical_line" />
          <div className="result">
            <h3>Enrollment Students</h3>
            <div className="heading">
              <h4>Descriptions</h4>
            </div>
            <div id="StudentDetail">
              {/* <div id="StudentDetail" style={{ display: 'none' }}> */}
              <div className="description">
                <ul>
                  {this.state.studentDetails.map((user, index) => (
                    <li key={user.id || index}>
                      <strong>Name:</strong> {user.name}
                      <br></br>
                      {/* <strong>Web:</strong> {user.name},{" "} */}
                      <strong>Email:</strong> {user.email}
                      <br></br>
                      <strong>Website:</strong> {user.website}
                      <br></br>
                      <strong>Skills:</strong> {user.skills}
                      <br></br>
                    </li>
                  ))}
                </ul>
              </div>
              {/* image fetch using React */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
