"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie'; // Import js-cookie

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const accessToken = Cookies.get('accessToken'); // Get accessToken from cookie


      try {
        const response = await fetch('https://near-to-you-backend.onrender.com/api/v1/users/get-user-profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${accessToken}`, // Send accessToken in header
          },
        });

        const result = await response.json();

        if (result.success) {
          setUser(result.data);
        } else {
          setError(result.message);
        }
      } catch (error) {
        setError('Failed to fetch user profile.');
      }
    };

    fetchProfile();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
