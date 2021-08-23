import { useEffect, useState } from "react";
import "./Blogs.css";

function Blogs() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="Blog">
      {data.map((d) => (
        <div className="Blog-card" key={d.id}>
          <div className="Blog-header">
            <h3>{d.name}</h3>
            <h4>{d.email}</h4>
          </div>
          <div className="Blog-container">
            <h4>Address</h4>
            <p>
              {d.address.street},{d.address.suite},{d.address.city},
              {d.address.zipcode}
            </p>
            <h4>Company Name </h4>
            <p>{d.company.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
