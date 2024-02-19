"use client"
import React from 'react';
import { Menu } from 'antd';
import SigninButton from '../auth/SignInButton';
import Link from 'next/link';
const TopNavBar: React.FC = () => {
    return (
        <Menu mode="horizontal" >
        <Menu.Item key="1">HealthHub</Menu.Item>
           <Menu.Item key="2"><Link href="/doctors"> Doctors</Link></Menu.Item>
           <Menu.Item key="3"><Link href="/hospitals">Hospitals</Link></Menu.Item>
           <Menu.Item key="4"><Link href="/diagnostics">Diagnostics</Link></Menu.Item>
            <Menu.Item key="5"><Link href="/appointment">TeleMedicines & Appoinment</Link></Menu.Item>
            <Menu.Item key="6" >
                <SigninButton />
            </Menu.Item>
        </Menu>
    );
};

export default TopNavBar;