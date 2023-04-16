import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from 'features/users/usersSlice';

const UserList = () => {
  const { users, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='user-container'>
      <h1>User Details</h1>
    </div>
  )
}

export default UserList
