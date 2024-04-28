import { useEffect, useState } from "react";
export default function Details ({ user }) {
  const { id } = user;
  const [userInfo, setUserInfo] = useState({});

  const loadingData = () => {
    fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    .then((response) => response.json())
    .then(res => {
      console.log(res.avatar);  
      setUserInfo(res);
    })
  } 

  useEffect(loadingData, [id])
 
  return (
    <>
      {
      userInfo.name ? 
      <div className="details">
        <img src={userInfo.avatar} alt={userInfo.name} />
        <h1>{userInfo.name}</h1>
        <h3>City: {userInfo.details.city}</h3>
        <h3>Company: {userInfo.details.company}</h3>
        <h3>Position: {userInfo.details.position}</h3>
      </div> : 
      <div className="losding">loading...</div>
    }

    </>
  );
}