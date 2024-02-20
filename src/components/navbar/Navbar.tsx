"use client"
import React from 'react';
import { Avatar, Menu } from 'antd';
import SigninButton from '../auth/SignInButton';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
const TopNavBar: React.FC = () => {
    const { data: session } = useSession();
    return (
        <Menu mode="horizontal" >
        <Menu.Item key="1"><Link href="/"> LifeCycle</Link></Menu.Item>
           <Menu.Item key="2"><Link href="/doctors"> Doctors</Link></Menu.Item>
           <Menu.Item key="3"><Link href="/hospitals">Hospitals</Link></Menu.Item>
           <Menu.Item key="4"><Link href="/diagnostics">Diagnostics</Link></Menu.Item>
            <Menu.Item key="5"><Link href="/appointment">TeleMedicines & Appoinment</Link></Menu.Item>
            <Menu.Item key="6"><Link href="/Medicines">Medicines & HealthCare Devices</Link></Menu.Item>
            <Menu.Item key="7" >
            <Link href="/profile">
                <Avatar src={'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?bg=fff&crop=faces&dpr=1&h=150&w=150&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'}  />
            </Link>
            </Menu.Item>
        </Menu>
    );
};

export default TopNavBar;