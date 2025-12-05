import React, { useEffect, useState } from "react";


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getStudent") // change port if needed
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (data.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>User Information</h1>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Index</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>{user.Name}</td>
              <td>{user.Age}</td>
              <td>{user.City}</td>
              <td>{user._id}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;