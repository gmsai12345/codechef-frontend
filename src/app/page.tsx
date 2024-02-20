// export default App;
import React from 'react';
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';

interface ServiceCardProps {
  topic: string;
  description: string;
}


function App() {
  return (
    <div>

      <LandingPage />
    </div>
  );
}

export default App;
