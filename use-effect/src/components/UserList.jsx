import { useEffect, useState } from "react";
import Details from "./Details";

export default function UserList() {
  const [users, setUsers] = useState([])
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
      .then(response => response.json())
      .then(result => {
        setUsers(result)
      })
  }, [])

  const handleUserClick = (user) => {
    setSelectedUser(user);
  }
  return (
    <div className="user-list">
      <ul>
        {users.map((user) => (
          <li 
            key={user.id}
            onClick={() => handleUserClick(user)}
            className={selectedUser && selectedUser.id === user.id ? "selected" : ""}
          >
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && <Details user={selectedUser} />}
    </div>
  )
}