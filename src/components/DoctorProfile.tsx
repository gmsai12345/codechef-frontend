"use client"
import React from 'react';
import { Space, Table, Tag, Typography } from 'antd';
import type { TableProps } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Session } from 'next-auth';

interface DataType {
    appointment_id: string
    description: string
    doctor_id: string
    start_datetime: string
    title: string
    user_id: string
}

interface MedicineType {
    key: string;
    name: string;
    quantity: number;
    number: string;
    tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Appointment ID',
        dataIndex: 'appointment_id',
        key: 'appointment_id',
        render: (text) => <a>{text.slice(0,5)}</a>,
    },
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a href='/profile/appointment'>Show Details</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const medicineColumns: TableProps<MedicineType>['columns'] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: (_, { tags }) => (
            <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Show Details</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const { Title } = Typography;

const medicineStock: MedicineType[] = [
    {
        key: '1',
        name: 'Paracetamol',
        quantity: 32,
        number: '5 days',
        tags: ['BP'],
    },
    {
        key: '2',
        name: 'Covid Vaccine',
        quantity: 42,
        number: '5 days',
        tags: ['Sugar'],
    },
    {
        key: '3',
        name: 'Joe Black',
        quantity: 32,
        number: '5 days',
        tags: ['BP'],
    },
    {
        key: '4',
        name: 'Joe Black',
        quantity: 32,
        number: '5 days',
        tags: ['BP'],
    }
];

interface DoctorProfileProps {
    session: Session
}

const DoctorProfile: React.FC<DoctorProfileProps> = ({ session }) => {
    const { isPending, error, data: response } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://codechef-backend.vercel.app/api/appoinments').then((res) =>
                res.json(),
            ),
    })

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    const finalData: DataType[] = response.data.filter((item: any) => item.doctor_id === session?.user?.email)
    console.log(session, finalData)
    return (
        <>
            <Title level={3} className='text-center'>Appointments</Title>
            <Table columns={columns} dataSource={finalData} />

            <Title level={3} className='text-center'>Medicine stocks</Title>
            <Table columns={medicineColumns} dataSource={medicineStock} />

        </>
    )
}

export default DoctorProfile;
