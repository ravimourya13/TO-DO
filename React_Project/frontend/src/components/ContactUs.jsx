// import React from 'react'

// const ContactUs = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default ContactUs

import React from "react";

const ContactUs = () => {
  // Sample data
  const members = [
    { name: "Vinayak Mhavarkar", role: "Owner" },
    { name: "Sahil Sharma", role: "Developer" },
    { name: "Ravi Mourya", role: "Developer" },
    { name: "Sachin Bhardwaj", role: "Developer" },
  
  ];

  return (
    <div className="container my-5">
      {/* Table Heading */}
      

      {/* Table Section */}
      <div className="table-responsive">
        <h2 className="text-center mb-4">Ezycost Solution</h2>
        <table className="table table-bordered table-striped text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>{member.name}</td>
                <td>{member.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Spacer */}
      <div className="my-5"></div>

      {/* Location Section */}
      <div className="card shadow-lg">
        <div className="card-body">
          <h4 className="text-center mb-4">Our Location</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.579040296941!2d72.82116077498684!3d19.430586181848287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9f9aa823d45%3A0x4834b0c20652210b!2sEzycost%20Solution!5e0!3m2!1sen!2sin!4v1749199626879!5m2!1sen!2sin"
              title="Google Map"
              height="200px"
              width="200px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

