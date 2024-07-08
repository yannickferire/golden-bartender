'use client';

import { useEffect, useState } from 'react';

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
    <div className="grid w-full flex-1 flex-grow py-8 items-center px-4 sm:justify-center">
      {userData && <p>Hello {userData.firstname}</p>}
    </div>
  );
}