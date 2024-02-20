"use client"
import React from 'react';
import { Card, List } from 'antd';
import { Typography, Image } from 'antd';
import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

const hospitalData = [
    {
        id: 1,
        title: 'ABC Hospital',
        address: '123 Main Street, City',
        description: 'ABC Hospital is a leading healthcare provider...',
        image: 'https://picsum.photos/536/354',
        services: [
            {
                id: 1,
                name: 'Cardiology',
                price: '\$100',
                description: 'Cardiology service description...',
            },
            {
                id: 2,
                name: 'Dermatology',
                price: '\$80',
                description: 'Dermatology service description...',
            },
            // Add more services here...
        ],
    },
    // Add more hospitals here...
];

const HospitalPage = () => {
    const { Title, Paragraph } = Typography;
    const params = useParams<{ name: string; }>()
    const router = useRouter();

    const { isPending, error, data: response } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://codechef-backend.vercel.app/api/hospitals').then((res) =>
                res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const hospitalData = response.data.filter((hospital:any) => hospital.title === params.name);
    console.log(hospitalData, response.data[0].title, params.name);

    return (
        <div>
            {hospitalData.map((hospital:any) => (
                <div key={hospital.id}>
                    <div>
                        <Image src={hospital.image} alt={hospital.title} style={{ height: '30vh', width: '100vw', objectFit: 'cover' }} />
                        <div className='flex flex-col items-center'>
                        <Title level={2} style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>{hospital.title}</Title>
                        <Paragraph style={{ marginBottom: '8px' }}>{hospital.address}</Paragraph>
                        <Paragraph style={{ marginBottom: '16px' }}>{hospital.description}</Paragraph>
                        <Title level={3} style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px' }}>Services Offered</Title>
                        </div>
                    </div>
                    <Card>
                        <List
                            grid={{ gutter: 16, column: 2 }}
                            dataSource={hospital.services}
                            renderItem={(service:any) => (
                                <List.Item
                               
                                className='hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gray-100 p-5 rounded-lg my-5 mx-5 bg-white shadow-sm active:bg-gray-200 cursor-pointer'
                                onClick={()=>router.push(`/hospitals/${hospital.title}/appointment?service=${service.name}`)}
                                >
                                    <Card title={service.name}>
                                        <p>Price: {service.price}</p>
                                        <p>{service.description}</p>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default HospitalPage;
