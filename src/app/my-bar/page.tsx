'use client';

import { useEffect, useState } from 'react';
import MenuEmpty from './components/MenuEmpty';
import { Drinks, columns } from "./drinks/columns"
import { DataTable } from './drinks/data-table';
import AddDrink from './components/AddDrink';

type FetchError = Error | null;

interface UserData {
  id: string;
  email: string;
  firstname: string;
  lastname: string;
  username: string;
}

export interface DrinkData {
  id: string;
  name: string;
  description: string;
}

interface ApiResponse {
  userData: UserData;
  drinks: DrinkData[];
}

export default function MyBar() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [drinks, setDrinks] = useState<DrinkData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<FetchError>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/bar');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result: ApiResponse = await response.json();
        console.log(result); // Log the entire result for debugging
        if (result.userData) {
          setUserData(result.userData);
          setDrinks(result.drinks);
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

  const handleAddDrink = async (newDrink: DrinkData) => {
    try {
      setDrinks((prevDrinks) => [...prevDrinks, newDrink]);
    } catch (error) {
      console.error('Error adding drink:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/delete-drink`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete drink');
      }

      // Remove the drink from the local state
      setDrinks((prevDrinks) => prevDrinks.filter((drink) => drink.id !== id));
    } catch (error) {
      console.error('Error deleting drink:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full max-w-screen-xl pt-12 pb-8">
      {userData && (
        <>
          <header className="mb-8">
            <p className="text-xl font-mono font-bold">Hey {userData.firstname}</p>
            <p>Manage all your drinks here</p>
          </header>
          {drinks.length === 0 ? (
            <MenuEmpty userId={userData.id} onAddDrink={handleAddDrink} />
          ) : (
            <>
            <AddDrink userId={userData.id} onAddDrink={handleAddDrink} />
            <DataTable columns={columns({ onDelete: handleDelete })} data={drinks} />
            </>
          )}
        </>
      )}
    </div>
  );
}
