"use client"
import React from 'react';
import { Menu } from 'antd';
import SigninButton from '../auth/SignInButton';

const TopNavBar: React.FC = () => {
    return (
        <Menu mode="horizontal" >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">About</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
            <Menu.Item key="4" >
                <SigninButton />
            </Menu.Item>
        </Menu>
    );
};

export default TopNavBar;