// import React from 'react';
// import Link from 'next/link';
// function ServiceCard({   topic,  description }) {
//   return (
//     <div className="service-card-one">
//       <div className="sco-topic">{topic}</div>
//       <div className="sco-desc">{description}</div>
//       <div className="serviceroute1">
//         <div className="knowmore">Know More</div>
//         <svg
//           width="39"
//           className="arrowbtn"
//           height="39"
//           viewBox="0 0 39 39"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <circle cx="19.5" cy="19.5" r="19.5" fill="#FF8593" />
//           <line
//             x1="15.0312"
//             y1="8.79227"
//             x2="28.0769"
//             y2="20.7951"
//             stroke="black"
//             strokeWidth="6"
//           />
//           <line
//             x1="15.1136"
//             y1="28.5735"
//             x2="28.6004"
//             y2="17.6674"
//             stroke="black"
//             strokeWidth="6"
//           />
//         </svg>
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <div className="actionname">SERVICES</div>
//       <div className="cardarea">
//         <div className="row">
//           <ServiceCard
//             topic="Hospital Services"
//             description="Explore all the Hospitals and Services Provided By Them"
//           />
//           <ServiceCard
//             topic="Medicines & Health Products"
//             description="Purchased Specialized Medicines and Health Products"
//           />
//           <ServiceCard
//             topic="Online Appoinments"
//             description="Book Online Appoinments for second opinion, telemedicine and online consulting"
//           />
//         </div>
//         <div className="row">
//           <ServiceCard
//             topic="Health Checkup"
//             description="Get Instant Health Checkups"
//           />
//           <ServiceCard
//             topic="Insuarance"
//             description="Avail Latest Insuarance policies customized to your needs"
//           />
//           <ServiceCard
//             topic="Diagnostic Centers"
//             description="Book a all kinds of Test at Diagnostic Centers"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  topic: string;
  description: string;
}

function ServiceCard({ topic, description }: ServiceCardProps) {
  return (
    <div className="service-card-one">
      <div className="sco-topic">{topic}</div>
      <div className="sco-desc">{description}</div>
      <div className="serviceroute1">
        <div className="knowmore">Know More</div>
        <svg
          width="39"
          className="arrowbtn"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19.5" cy="19.5" r="19.5" fill="#FF8593" />
          <line
            x1="15.0312"
            y1="8.79227"
            x2="28.0769"
            y2="20.7951"
            stroke="black"
            strokeWidth="6"
          />
          <line
            x1="15.1136"
            y1="28.5735"
            x2="28.6004"
            y2="17.6674"
            stroke="black"
            strokeWidth="6"
          />
        </svg>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <div className="actionname">SERVICES</div>
      <div className="cardarea">
        <div className="row">
          <ServiceCard
            topic="Hospital Services"
            description="Explore all the Hospitals and Services Provided By Them"
          />
          <ServiceCard
            topic="Medicines & Health Products"
            description="Purchased Specialized Medicines and Health Products"
          />
          <ServiceCard
            topic="Online Appointments"
            description="Book Online Appointments for second opinion, telemedicine and online consulting"
          />
        </div>
        <div className="row">
          <ServiceCard
            topic="Health Checkup"
            description="Get Instant Health Checkups"
          />
          <ServiceCard
            topic="Insurance"
            description="Avail Latest Insurance policies customized to your needs"
          />
          <ServiceCard
            topic="Diagnostic Centers"
            description="Book all kinds of Tests at Diagnostic Centers"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
