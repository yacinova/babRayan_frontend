import { useState, useEffect } from 'react';

const useUserRole = (Id) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://localhost:7777/api/users/${Id}`, {
          method: 'GET',
        });
        const data = await response.json();
        setUserRole(data.data.role);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [Id]);

  return { userRole, loading };
};

export default useUserRole;
