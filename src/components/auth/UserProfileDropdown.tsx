import { Avatar, Button, Dropdown, MenuProps, Space, Typography } from 'antd';
import { FC } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

interface UserProfileDropdownProps {
    session: any
}

const UserProfileDropdown: FC<UserProfileDropdownProps> = ({ session }) => {
    const { Text, Link } = Typography;

    const items: MenuProps['items'] = [
        {
            label: <a href="https://www.antgroup.com">
                <p>
                    {session.user.name}
                </p>
                <p>
                    {session.user.email}
                </p>
            </a>,
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: <Link href="/profile">Profile</Link>,
            key: '1',
        },
        {
            label:  <Text type="danger" onClick={() => signOut()}>Sign out</Text>,
            key: '2',
        },
    ];
    if (session && session.user) {
        return (
            <Dropdown menu={{ items }} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Avatar src={session.user.image} icon={<UserOutlined />} />
                    </Space>
                </a>
            </Dropdown>
        )
    }
}

export default UserProfileDropdown