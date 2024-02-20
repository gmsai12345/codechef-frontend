// "use client"
// // pages/doctors.js
// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const doctorsData = [
//   {
//     id: 1,
//     name: "Dr. Smith",
//     rating: 4.5,
//     specialization: "Cardiology",
//     price: "$100",
//     color: "#FFD700", // Gold color
//   },
//   {
//     id: 2,
//     name: "Dr. Johnson",
//     rating: 4.2,
//     specialization: "Neurology",
//     price: "$120",
//     color: "#87CEEB", // Sky blue color
//   },
//   {
//     id: 3,
//     name: "Dr. Williams",
//     rating: 4.8,
//     specialization: "Pediatrics",
//     price: "$90",
//     color: "#90EE90", // Light green color
//   },
//   {
//     id: 4,
//     name: "Dr. Brown",
//     rating: 4.0,
//     specialization: "Orthopedics",
//     price: "$110",
//     color: "#FFA07A", // Light salmon color
//   },
//   // Add more doctors as needed
// ];

// const DoctorsPage = () => {
//   return (
//     <Container>
//       <h1 className="mt-4 mb-4 text-center">Doctors</h1>
//       <Row xs={1} md={2} lg={4} className="g-4">
//         {doctorsData.map((doctor) => (
//           <Col key={doctor.id}>
//             <Card className="h-100 shadow-sm rounded-3 mb-4" style={{ backgroundColor: doctor.color }}>
//               <Card.Body className="d-flex flex-column justify-content-between">
//                 <div>
//                   <Card.Title>{doctor.name}</Card.Title>
//                   <Card.Text>
//                     Rating: {doctor.rating} <br />
//                     Specialization: {doctor.specialization} <br />
//                     Price: {doctor.price}
//                   </Card.Text>
//                 </div>
//                 <button className="btn btn-primary mt-2">Book Now</button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default DoctorsPage;
// pages/index.js
import React from "react";
import styles from  "../styles/styles.module.css";

const doctors = [
  { name: "Dr. JayaRam K", job: "Cardiologist", location: "Kelambakkam" },
  // Add more doctors as needed
];

const IndexPage = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        {/* Your navigation bar code here */}
      </nav>
      <div className={styles.actionname}>FIND YOUR DOCTOR</div>
      <div className={styles.doccardarea}>
        {doctors.map((doctor, index) => (
          <div key={index} className={styles.doccard}>
            <div className={styles.docimg}></div>
            <div className={styles.docname}>{doctor.name}</div>
            <div className={styles.docjob}>{doctor.job}</div>
            {/* Additional doctor details */}
            <div className={styles.docloc}>
              <div className={styles.doclocicon}></div>
              <div className={styles.doclocname}>{doctor.location}</div>
            </div>
            <div className={styles.rating}>
              <div className={styles.ratecircle}></div>
              <div className={styles.ratecircle}></div>
              <div className={styles.ratecircle}></div>
              <div className={styles.ratecircle}></div>
            </div>
            <div className={styles.meetdocbtn}>Meet The Doctor</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
