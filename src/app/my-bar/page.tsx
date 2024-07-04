'use client';

import { useEffect, useState } from 'react';

type FetchError = Error | null;

export default function MyBar() {
  const [data, setData] = useState(null);
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
        setData(result.data);
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
      <h1>MY BAR</h1>
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}