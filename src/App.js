import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./features/Users";

function App() {
  const userList = useSelector((state) => state.users.value);
  // console.log(userList[userList.length -1].id + 1)
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <div className='App'>
      <div className='addUser'>
        <input
          type='text'
          placeholder='Name...'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Username...'
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name,
                username,
              })
            )
          }
        >
          Add User
        </button>
      </div>

      <div className='displayUsers'>
        {userList.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type='text'
              placeholder='New Username...'
              onChange={(e) => setNewUsername(e.target.value)}
            />

            <button
              onClick={() => {
                dispatch(
                  updateUsername({ id: user.id, username: newUsername })
                );
              }}
            >
              Update Username
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
