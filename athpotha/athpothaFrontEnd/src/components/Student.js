import React, { useEffect, useState } from "react";
import StudentForm from "./ui/Form";
import Card from "./ui/Card";

function Student() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [IsLoading, setIsLoading] = useState(true);
  const [students, setStudents] = useState([]);

  const handleClicked = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
      // fetch("http://localhost:8080/student/getAll")
      //   .then((res) => res.json())
      //   .then((result) => {
      //     setStudents(result);
      //   });
    });
  };

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8080/student/getAll")
      .then((res) => res.json())
      .then((result) => {
        setIsLoading(false);
        setStudents(result);
      });
  }, []);

  if (IsLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <StudentForm title={"Student Update"}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control rounded-3"
            id="floatingInput"
            placeholder="Kumud"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control rounded-3"
            id="floatingPassword"
            placeholder="Password"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
          <label htmlFor="floatingPassword">Address</label>
        </div>
        <button
          className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
          type="submit"
          onClick={handleClicked}
        >
          Submit
        </button>
        <small className="text-muted">
          By clicking Sign up, you agree to the terms of use.
        </small>
        <hr className="my-4" />
      </StudentForm>
      <div className="row">
        <h2>Students</h2>
        {students.map((student) => (
          <Card
            key={student.id}
            studentId={student.id}
            name={student.name}
            address={student.address}
          />
        ))}
      </div>
    </div>
  );
}

export default Student;
