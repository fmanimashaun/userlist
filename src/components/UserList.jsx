import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from 'features/users/usersSlice';

const UserList = () => {
  const { userList, isLoading, error } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="user-container">
      <h1>User Details</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading
        && userList.map((user) => (
          <div key={user.id} className="user">
            <p>
              <span>{`${user.name.title} ${user.name.first} ${user.name.last}`}</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default UserList;
