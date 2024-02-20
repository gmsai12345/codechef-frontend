// export default App;
import React from 'react';
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';
import DockerList from '@/components/DockerList';
import DoctorProfile from '@/components/DoctorProfile';
import { getServerSession } from 'next-auth';


async function DoctorProfilePage() {
  const  session = await getServerSession();

  return (
    <div>
      <DoctorProfile session={session!} />
    </div>
  );
}

export default DoctorProfilePage;
