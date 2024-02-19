"use client"
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, Button } from "antd";
import UserProfileDropdown from "./UserProfileDropdown";

const SigninButton = () => {
  const { data: session } = useSession();
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  if (session && session.user) {
    return (
      <UserProfileDropdown session={session} />
    );
  }

  const loginWithGoogle = async () => {
    setIsLoadingGoogle(true)

    try {
      await signIn('google')
    } catch (error) {
      console.error('Failed to login with Google', error)
    } finally {
      setIsLoadingGoogle(false)
    }
  }

  return (
    <Button onClick={loginWithGoogle} className="text-green-600 ml-auto">
      Sign In
    </Button>
  );
};

export default SigninButton;