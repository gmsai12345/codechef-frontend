"use client"
import { List, Space } from 'antd';
import React, { FC } from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

interface DockerListProps {

}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const DockerList: FC<DockerListProps> = ({ }) => {
    const router = useRouter();
    const data = [
        
            {
              "firstName": "Amelia",
              "lastName": "Rodriguez",
              "specialty": "Cardiology",
              "hospital": "Hopewell Medical Center",
              "city": "Seattle",
              "state": "WA",
              "education": "Harvard Medical School",
              "yearsOfExperience": 15,
              "bio": "Dr. Rodriguez is a highly regarded cardiologist specializing in preventive cardiology and electrophysiology. She is passionate about empowering patients to manage their heart health through lifestyle changes and personalized treatment plans.",
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
              "firstName": "Benjamin",
              "lastName": "Chen",
              "specialty": "Dermatology",
              "hospital": "Sunshine Dermatology Clinic",
              "city": "Miami",
              "state": "FL",
              "education": "Yale University School of Medicine",
              "yearsOfExperience": 10,
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "bio": "Dr. Chen is a board-certified dermatologist with a focus on medical and cosmetic dermatology. He is committed to providing compassionate care and cutting-edge treatment options for a wide range of skin conditions."
            },
            {
              "firstName": "Claire",
              "lastName": "Singh",
              "specialty": "Neurology",
              "hospital": "Northwestern Memorial Hospital",
              "city": "Chicago",
              "state": "IL",
              "education": "Johns Hopkins School of Medicine",
              "yearsOfExperience": 20,
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "bio": "Dr. Singh is a respected neurologist specializing in stroke care and neurodegenerative diseases. She is a strong advocate for research and clinical trials to advance the field of neurology."
            },
            {
              "firstName": "David",
              "lastName": "Walker",
              "specialty": "Pediatrics",
              "hospital": "Children's Healthcare of Atlanta",
              "city": "Atlanta",
              "state": "GA",
              "education": "Stanford University School of Medicine",
              "yearsOfExperience": 12,
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "bio": "Dr. Walker is a dedicated pediatrician with a passion for building strong relationships with his patients and their families. He enjoys providing comprehensive care for children from birth through adolescence."
            },
            {
              "firstName": "Emily",
              "lastName": "Kim",
              "specialty": "Psychiatry",
              "hospital": "Massachusetts General Hospital",
              "city": "Boston",
              "state": "MA",
              "education": "University of Pennsylvania School of Medicine",
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "yearsOfExperience": 18,
              "bio": "Dr. Kim is a compassionate psychiatrist specializing in adult and geriatric mental health. She is committed to providing evidence-based treatment and building therapeutic relationships with her patients."
            },
            {
              "firstName": "Frank",
              "lastName": "Garcia",
              "specialty": "Rheumatology",
              "hospital": "Cleveland Clinic",
              "city": "Cleveland",
              "state": "OH",
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "education": "Columbia University College of Physicians and Surgeons",
              "yearsOfExperience": 14,
              "bio": "Dr. Garcia is a board-certified rheumatologist with expertise in diagnosing and treating inflammatory conditions like arthritis and autoimmune diseases. He is a strong advocate for patient education and empowerment."
            },
            {
              "firstName": "Grace",
              "lastName": "Jones",
              "specialty": "Oncology",
              "hospital": "Memorial Sloan Kettering Cancer Center",
              "city": "New York City",
              "state": "NY",
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "education": "University of California, San Francisco School of Medicine",
              "yearsOfExperience": 25,
              "bio": "Dr. Jones is a renowned oncologist with extensive experience in treating various types of cancer. She is dedicated to providing compassionate care and innovative treatment options for her patients."
            },
            {
              "firstName": "Henry",
              "lastName": "Lee",
              "specialty": "Pulmonology",
              "hospital": "Mayo Clinic",
              image:"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              "city": "Rochester",
              "state": "MN",
              "education": "Duke University School of Medicine",
              "yearsOfExperience": 16,
              "bio": "Dr. Lee is a pulmon"
            },
];
    return (
        <div className='container mx-auto'>

            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 10,
                }}
                dataSource={data}
                // footer={
                //     <div>
                //         <b>ant design</b> footer part
                //     </div>
                // }
                renderItem={(item) => (
                    <List.Item
                        key={item.firstName}
                       
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.image}
                            />
                        }
                        className='hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gray-100 p-5 rounded-lg my-5 mx-5 bg-white shadow-sm active:bg-gray-200 cursor-pointer'
                        onClick={() => router.push(`/hospitals`)}
                    >
                        <List.Item.Meta
                            title={<a href={item.firstName}>{item.specialty}</a>}
                            description={item.education}
                        />
                        {item.bio}
                    </List.Item>
                )}
            />

        </div>
    )
}

export default DockerList