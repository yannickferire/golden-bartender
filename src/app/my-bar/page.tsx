'use client';

import { useEffect, useState } from 'react';
import MenuEmpty from './components/MenuEmpty';

type FetchError = Error | null;

interface UserData {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

export default function MyBar() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/bar');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        if (result.data && result.data.userData) {
          setUserData(result.data.userData);
        } else {
          throw new Error('Invalid API response format');
        }
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full max-w-screen-xl pt-12 pb-8">
      {userData && 
      <>
        <header className="mb-8">
          <p className="text-xl font-mono font-bold">Hey {userData.firstname}</p>
          <p>Manage all your drinks here</p>
        </header>
        <MenuEmpty userId={userData.id} />
      </>  
      }
    </div>
  );
}