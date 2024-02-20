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
        href: 'https://www.bharatscans.com/',
        title: `Bharat Scans`,
        description:
            ' The arrival of  Bharat scans with its motto “service through innovative technology” radically changed the scenario. Thanks to the vision of its managing director Dr. R. Emmanuel, the city now boasts of the most advanced imaging systems on the planet.',
        content:
            'Bharatscans Presents Advanced Technology at Affordable Cost Advanced technology The Bharat Scans with its motto “Service through Innovative Technology” boasts the most Advanced Imaging Systems on the planet.',
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
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
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