// pages/api/hospitals.ts

import { NextApiRequest, NextApiResponse } from 'next';
import firebase from 'firebase/app';
import 'firebase/firestore';

interface Hospital {
  id: string;
  name: string;
  // Add other fields as needed
}

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();

const getAllHospitals = async (): Promise<Hospital[]> => {
  try {
    const hospitalsRef = firestore.collection('hospitals');
    const snapshot = await hospitalsRef.get();

    const hospitals: Hospital[] = [];
    snapshot.forEach(doc => {
      hospitals.push({
        id: doc.id,
        ...doc.data()
      } as Hospital);
    });

    return hospitals;
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    throw new Error('Failed to fetch hospitals');
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const hospitals = await getAllHospitals();
      res.status(200).json({ hospitals });
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      res.status(500).json({ error: 'Failed to fetch hospitals' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
