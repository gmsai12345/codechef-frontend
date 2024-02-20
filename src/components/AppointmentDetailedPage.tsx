// import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Form, Button, Space, Avatar } from 'antd';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useQuery } from 'react-query';

const AppointmentDetails = async ({ appointmentData }:any) => {
    const  session = await getServerSession();
    // const [videoChatActive, setVideoChatActive] = useState(false);

  const handleStartVideoChat = () => {
    // Implement logic to start the video conference based on your chosen platform/provider
    console.log('Start video chat');
    // setVideoChatActive(true);
  };

  // ... other code for rendering appointment details

  return (
    <Card title="Appointment Details">
      {/* Display appointment details using Card */}
      <Row>
        <Col span={12}>
          <h4 style={{ marginBottom: 8 }}>Patient Information</h4>
          <div>
            <Avatar size={64} src={session?.user?.image}/>
            <div style={{ marginLeft: 8 }}>
              {/* <p>{session.user?.name}</p> */}
              <p>{session?.user?.email}</p>
              <p>{appointmentData.patientPhone}</p>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <h4 style={{ marginBottom: 8 }}>Appointment Information</h4>
          <div>
            <p>Date: {appointmentData.date}</p>
            <p>Time: {appointmentData.time}</p>
            <p>Doctor: {appointmentData.doctorName}</p>
            <p>Specialty: {appointmentData.specialty}</p>
          </div>
        </Col>
      </Row>
      {/* ... other sections for diagnosis notes, prescriptions, etc. (if applicable) */}
      <Space size={16} style={{ marginTop: 24 }}>
        <Link href="https://mercedz.azurewebsites.net/room">
            <Button type="default">Join Appointment</Button>
        </Link>
      </Space>
    </Card>
  );
};

export default AppointmentDetails;
