"use client";  // Add this line

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useRouter } from 'next/navigation'; // Updated import

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    // Updated routing logic using next/navigation
    switch (newValue) {
      case 0:
        router.push('/');
        break;
      case 1:
        router.push('/profil');
        break;
      case 2:
        router.push('/prispevok');
        break;
      case 3:
        router.push('/auth/prihlasenie');
        break;
      case 4:
        router.push('/auth/registracia');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it's above other components
      }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
      <BottomNavigationAction label="Profily" icon={<AccountCircleIcon />} />
      <BottomNavigationAction label="Prispevky" icon={<PostAddIcon />} />
      <BottomNavigationAction label="Prihlásenie" icon={<LoginIcon />} />
      <BottomNavigationAction label="Registrácia" icon={<HowToRegIcon />} />
    </BottomNavigation>
  );
}