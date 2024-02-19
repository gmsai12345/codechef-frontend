import { useState, useEffect } from 'react';
import { getAllHospitals, getHospitalByName } from '../api/hospitals/page';

const HospitalsPage = () => {
  const [searchName, setSearchName] = useState('');
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const hospitalsData = await getAllHospitals();
        setHospitals(hospitalsData);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      }
    };

    fetchHospitals();
  }, []);

  const handleSearch = async () => {
    setIsLoading(true);
    try {
      const hospitalsData = await getHospitalByName(searchName);
      setHospitals(hospitalsData);
    } catch (error) {
      console.error('Error searching hospitals:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Hospitals</h1>
      <div>
        <input
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          placeholder="Enter hospital name"
        />
        <button onClick={handleSearch} disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

      <div className="hospital-cards">
        {hospitals.map((hospital) => (
          <div key={hospital.id} className="hospital-card">
            <h2>{hospital.name}</h2>
            <p>{hospital.address}</p>
            {/* Add more hospital details as needed */}
          </div>
        ))}
      </div>

      <style jsx>{`
        .hospital-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .hospital-card {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default HospitalsPage;
