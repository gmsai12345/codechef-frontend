"use client"
import { List, Space } from 'antd';
import React, { FC } from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

interface LandingPageProps {

}

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const LandingPage: FC<LandingPageProps> = ({ }) => {
    const router = useRouter();
    const data = [{
        href: '/hospitals',
        title: `Hospital Services`,
        description:
            'Explore the comprehensive hospital services available.',
        content:
            'Discover a range of hospital services including emergency care, surgery, and specialized treatments.',
        image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        href: 'https://www.apollohospitals.com/',
        title: `Medicines & Health Products`,
        description:
            'Purchase specialized medicines and health products.',
        content:
            'Browse and purchase a variety of specialized medicines and health products to meet your healthcare needs.',
        image: "https://images.unsplash.com/photo-1610740654950-070baeb919ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        href: 'https://www.apollohospitals.com/',
        title: `Online Appointments`,
        description:
            'Book appointments with healthcare professionals online.',
        content:
            'Easily schedule and manage your appointments with doctors and specialists through our online platform.',
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        href: 'https://www.apollohospitals.com/',
        title: `Health Checkup`,
        description:
            'Schedule comprehensive health checkups with ease.',
        content:
            'Book comprehensive health checkups to stay on top of your health and detect any potential issues early.',
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        href: 'https://www.apollohospitals.com/',
        title: `Insurance`,
        description:
            'Get the latest insurance policies tailored to your needs.',
        content:
            'Explore and choose from a variety of insurance policies that are customized to fit your individual needs.',
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        key={item.title}
                       
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src={item.image}
                            />
                        }
                        className='hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gray-100 p-5 rounded-lg my-5 mx-5 bg-white shadow-sm active:bg-gray-200 cursor-pointer'
                        onClick={() => router.push(`${item.href}`)}
                    >
                        <List.Item.Meta
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />

        </div>
    )
}

export default LandingPage