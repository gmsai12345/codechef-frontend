"use client"
import React from 'react';
import { Menu } from 'antd';
import SigninButton from '../auth/SignInButton';

const TopNavBar: React.FC = () => {
    return (
        <Menu mode="horizontal" >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Doctors</Menu.Item>
            <Menu.Item key="3">Hospitals</Menu.Item>
            <Menu.Item key="4">Diagnostics</Menu.Item>
            <Menu.Item key="5">TeleMedicines & Appoinment</Menu.Item>
            <Menu.Item key="6" >
                <SigninButton />
            </Menu.Item>
        </Menu>
    );
};

export default TopNavBar;