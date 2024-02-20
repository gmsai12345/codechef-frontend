import Profile from '@/components/Profile'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { FC } from 'react'

interface ProfileProps {
  
}

const ProfilePage: FC<ProfileProps> = async({}) => {
  const  session = await getServerSession();
  return (
    <Profile session={session!}/>
  )
}

export default ProfilePage