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

// const HospitalList: React.FC = () => {
//     const [options, setOptions] = useState<SelectProps<object>['options']>([]);
//     const { Search } = Input;
//     const router = useRouter();

//     const data = Array.from({ length: 23 }).map((_, i) => ({
//         href: 'https://www.bharatscans.com/',
//         title: `Bharat Scans`,
//         description:
//             ' The arrival of  Bharat scans with its motto “service through innovative technology” radically changed the scenario. Thanks to the vision of its managing director Dr. R. Emmanuel, the city now boasts of the most advanced imaging systems on the planet.',
//         content:
//             'Bharatscans Presents Advanced Technology at Affordable Cost Advanced technology The Bharat Scans with its motto “Service through Innovative Technology” boasts the most Advanced Imaging Systems on the planet.',
//     }));

//     const handleSearch = (value: string) => {
//         setOptions(value ? searchResult(value) : []);
//     };

//     const onSelect = (value: string) => {
//         console.log('onSelect', value);
//     };
//     const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);



//     return (
//         <div className='container mx-auto'>
//             <AutoComplete
//                 popupMatchSelectWidth={252}
//                 style={{ width: 300 }}
//                 options={options}
//                 onSelect={onSelect}
//                 onSearch={handleSearch}
//                 size="large"
//                 className='flex justify-center mx-auto my-5'

//             >
//                 <Search
//                     placeholder="input search text"
//                     allowClear
//                     enterButton="Search"
//                     size="large"
//                     onSearch={onSearch}
//                     className='bg-blue-600 rounded-lg'
//                 />
//             </AutoComplete>

//             <List
//                 itemLayout="vertical"
//                 size="large"
//                 pagination={{
//                     onChange: (page) => {
//                         console.log(page);
//                     },
//                     pageSize: 3,
//                 }}
//                 dataSource={data}
//                 // footer={
//                 //     <div>
//                 //         <b>ant design</b> footer part
//                 //     </div>
//                 // }
//                 renderItem={(item) => (
//                         <List.Item
//                             key={item.title}
//                             actions={[
//                                 <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
//                                 <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
//                                 <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
//                             ]}
//                             extra={
//                                 <img
//                                     width={272}
//                                     alt="logo"
//                                     src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                                 />
//                             }
//                             className='hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gray-100 p-5 rounded-lg my-5 mx-5 bg-white shadow-sm active:bg-gray-200 cursor-pointer'
//                             onClick={()=>router.push(`/hospitals/${item.title}`)}
//                         >
//                             <List.Item.Meta
//                                 title={<a href={item.href}>{item.title}</a>}
//                                 description={item.description}
//                             />
//                             {item.content}
//                         </List.Item>
//                 )}
//             />

//         </div>
//     );
// };

// export default HospitalList;
const HospitalList: React.FC = () => {
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const { Search } = Input;
    const router = useRouter();

    const data = [
        {
            href: 'https://www.bharatscans.com/',
            title: 'Bharat Scans',
            description: 'The arrival of Bharat scans with its motto “service through innovative technology” radically changed the scenario. Thanks to the vision of its managing director Dr. R. Emmanuel, the city now boasts of the most advanced imaging systems on the planet.',
            content: 'Bharatscans Presents Advanced Technology at Affordable Cost Advanced technology The Bharat Scans with its motto “Service through Innovative Technology” boasts the most Advanced Imaging Systems on the planet.',
        },
        {
            href: 'https://www.apollodiagnostics.in/',
            title: 'Apollo Diagnostics',
            description: 'Apollo Diagnostics brings in the latest technology in diagnostics. With a chain of state-of-the-art laboratories and collection centres, we ensure timely and accurate test results.',
            content: 'Apollo Diagnostics offers comprehensive diagnostic services with advanced technology and a network of laboratories and collection centres.',
        },
        {
            href: 'https://www.lalpathlabs.com/',
            title: 'Dr. Lal PathLabs',
            description: 'Dr. Lal PathLabs is a renowned name in the diagnostics industry, providing a wide range of tests with accurate results and timely reports.',
            content: 'Dr. Lal PathLabs offers a broad spectrum of diagnostic tests with advanced equipment and technology.',
        },
        {
            href: 'https://www.thyrocare.com/',
            title: 'Thyrocare',
            description: 'Thyrocare is a leading diagnostic chain offering preventive healthcare packages and advanced diagnostics at affordable prices.',
            content: 'Thyrocare focuses on preventive care with a range of diagnostic tests and health packages.',
        },
        {
            href: 'https://www.srlworld.com/',
            title: 'SRL Diagnostics',
            description: 'SRL Diagnostics is a trusted name with a network of laboratories offering comprehensive diagnostic services and reliable test results.',
            content: 'SRL Diagnostics provides extensive diagnostic services with cutting-edge technology and a vast network of laboratories.',
        },
        {
            href: 'https://www.metropolisindia.com/',
            title: 'Metropolis Healthcare',
            description: 'Metropolis Healthcare offers a wide range of diagnostic services with a commitment to accurate and timely results.',
            content: 'Metropolis Healthcare is known for its extensive diagnostic services and advanced laboratory technology.',
        },
        {
            href: 'https://www.suburbandiagnostics.com/',
            title: 'Suburban Diagnostics',
            description: 'Suburban Diagnostics offers reliable and accurate diagnostic services with a focus on customer care and convenience.',
            content: 'Suburban Diagnostics provides comprehensive diagnostic services with a customer-centric approach.',
        },
        {
            href: 'https://www.pathkindlabs.com/',
            title: 'Pathkind Labs',
            description: 'Pathkind Labs offers a wide range of diagnostic tests with advanced technology and a focus on quality and accuracy.',
            content: 'Pathkind Labs is committed to providing high-quality diagnostic services with state-of-the-art technology.',
        },
        {
            href: 'https://www.vistadiagnostics.in/',
            title: 'Vista Diagnostics',
            description: 'Vista Diagnostics offers a variety of diagnostic services with a focus on precision and timely reporting.',
            content: 'Vista Diagnostics provides accurate diagnostic services with advanced technology and efficient processes.',
        },
        {
            href: 'https://www.healthians.com/',
            title: 'Healthians',
            description: 'Healthians offers home sample collection and a wide range of diagnostic tests with fast and accurate results.',
            content: 'Healthians is a pioneer in home diagnostics with a wide range of tests and convenient sample collection.',
        }
    ];

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
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        // extra={
                        //     <img
                        //         width={272}
                        //         alt="logo"
                        //         src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        //     />
                        // }
                        className='hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-md hover:bg-gray-100 p-5 rounded-lg my-5 mx-5 bg-white shadow-sm active:bg-gray-200 cursor-pointer'
                        onClick={() => router.push(`/hospitals/${item.title}`)}
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
