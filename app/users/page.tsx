import React from 'react';

interface User{
  id: number;
  name: string;
  email: string;
}

const UsersPage = async() => {
    // const response= await fetch("https://jsonplaceholder.typicode.com/users", {cache: "no-store"});
    const response= await fetch("https://jsonplaceholder.typicode.com/users", {next:{revalidate: 10}});
    const data: User[] = await response.json();

  return (
    <>
      <div>USERS PLACEHOLODER DATA FROM THIRD PARTY API</div>
        <table>
          <thead>
            <tr>
              <th>Names</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user)=>{
              return  <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
            })}
           
          </tbody>
        </table>
    </>
  )
}

export default UsersPage