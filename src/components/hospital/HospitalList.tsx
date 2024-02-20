"use client"
import React, { useState } from 'react';
import { AutoComplete, Avatar, Card, Col, Flex, Input, Layout, List, Row, Skeleton, Space } from 'antd';
import type { SelectProps } from 'antd';
import Meta from 'antd/es/card/Meta';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Header } from 'antd/es/layout/layout';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { SearchProps } from 'antd/es/input';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            Found {query} on{' '}
                            <a
                                href={`https://s.taobao.com/search?q=${query}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {category}
                            </a>
                        </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const HospitalList: React.FC = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const { Search } = Input;
    const router = useRouter();

    const data = Array.from({ length: 23 }).map((_, i) => ({
        href: 'https://www.apollohospitals.com/',
        title: `Apollo Hospitals ${i}`,
        description:
            'Established by Dr Prathap C Reddy in 1983, Apollo Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Apollo Hospitals has touched more than 200 million lives from over 120 countries',
        content:
            'Apollo Group constitutes the best hospital in India with over 10,000 beds across 73 hospitals, 5000+ pharmacies, over 300 clinics, 1100+ diagnostic centres and 200+ Telemedicine units.',
            image:"https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }));

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);



    return (
        <div className='container mx-auto'>
            <AutoComplete
                popupMatchSelectWidth={252}
                style={{ width: 300 }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                size="large"
                className='flex justify-center mx-auto my-5'

            >
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    className='bg-blue-600 rounded-lg'
                />
            </AutoComplete>

            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 3,
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
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src={item.image}
                                />
                            }
                            className='hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gray-100 p-5 rounded-lg my-5 mx-5 bg-white shadow-sm active:bg-gray-200 cursor-pointer'
                            onClick={()=>router.push(`/hospitals/${item.title}`)}
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
    );
};

export default HospitalList;