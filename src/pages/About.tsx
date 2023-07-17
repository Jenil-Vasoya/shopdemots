import { useEffect, useState } from 'react';
import axios from 'axios';

type userListType = {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
}

export function About() {
  const [userList, setUserList] = useState([]);
console.log(localStorage.getItem('Token'))

  // const config = {
  //   headers: {
  //     Authorization: "Bearer "+ localStorage.getItem('Token')
  //   }
  // };

  useEffect(() => {
    // Fetch user list on component mount
    const config = {
      headers: {
        Authorization: "Bearer "+ localStorage.getItem('Token')
      },
      params: {
        page: 1, // Replace with the desired page number
        pageSize: 10 // Replace with the desired page size
      }
      
    };
  
    axios
      .get('https://localhost:7010/User/Users', config)
      .then((response : any) => {
        const data = response.data;
        setUserList(data);
        console.log(data)
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  

  return (
    <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {userList.length > 0 ? (
  userList.map((user : userListType) => (
    <tr key={user.userId}>
      <td>{user.firstName} {user.lastName}</td>
      <td>{user.email}</td>
    </tr>
  ))
) : (
  <tr>
    <td>No users found</td>
  </tr>
)}


        </tbody>
      </table>
    </div>
  );
}

export default About;
