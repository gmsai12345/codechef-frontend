"use client"
import React from 'react';
import { Space, Table, Tag, Typography } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
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
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
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


const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['Accepted'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['Pending'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['Done'],
    },
];

const medicineStock:MedicineType[] = [
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

const Profile: React.FC = () => (
    <>
        <Title level={3} className='text-center'>Appointments</Title>
        <Table columns={columns} dataSource={data} />

        <Title level={3} className='text-center'>Medicine stocks</Title>
        <Table columns={medicineColumns} dataSource={medicineStock} />

    </>
)

export default Profile;