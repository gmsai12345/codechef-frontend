import AppointmentDetails from "@/components/AppointmentDetailedPage";

function ProfileAppointmentPage() {
    const appointmentData = {
        patientName: "John Doe",
        patientEmail: "demo@test.com",
        patientPhone: "123-456-7890",
        date: "2022-01-01",
        time: "10:00 AM",
        doctorName: "Dr. Jane Smith",
        specialty: "Cardiology",
        // ... other appointment details
        };

  return (
    <div>
      <AppointmentDetails appointmentData={appointmentData} />
    </div>
  );
}

export default ProfileAppointmentPage;