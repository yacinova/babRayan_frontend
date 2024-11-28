import { useState, useEffect } from 'react';

const useUserRole = (Id) => {
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5001/babrayanlocal/us-central1/api/users/${Id}`, {
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
