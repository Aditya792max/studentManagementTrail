import React, { useState } from "react";

function SearchStudentByAge() {
     const [Age, setAge] = useState("");
     const [results, setResults] = useState([]);
     const [error, setError] = useState("");

     const handleSearch = async (e) => {
          e.preventDefault();
          setError("");
          setResults([]);

          try {
               const response = await fetch("http://localhost:8080/searchByAge", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ Age: Number(Age) }), // CAPITAL "A" for consistency
               });

               const data = await response.json();

               if (!response.ok) {
                    setError(data.message || "Something went wrong");
                    return;
               }

               setResults(data);
          } catch (err) {
               console.error("Error:", err);
               setError("Network error");
          }
     };

     return (
          <div>
               <h2>Search Student by Age</h2>

               <form onSubmit={handleSearch}>
                    <input
                         type="number"
                         placeholder="Enter age"
                         value={Age}
                         onChange={(e) => setAge(e.target.value)}
                         required
                    />
                    <button type="submit">Search</button>
               </form>

               {error && <p style={{ color: "red" }}>{error}</p>}

               {results.length > 0 && (
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
                              {results.map((user, index) => (
                                   <tr key={index}>
                                        <td>{user.Name}</td>
                                        <td>{user.Age}</td>
                                        <td>{user.City}</td>
                                        <td>{user._id}</td>
                                   </tr>
                              ))}
                         </tbody>
                    </table>
               )}
          </div>
     );
}

export default SearchStudentByAge;