import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from 'features/users/usersSlice';

const UserList = () => {
  const { users, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="user-container">
      <h1>User Details</h1>
      {loading && !error && <p>Loading...</p>}
      {error && !loading && <p>{error}</p>}
      {users.map((user) => (
        <div key={user.id} className="user">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
