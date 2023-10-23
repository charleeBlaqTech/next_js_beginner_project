import React from 'react';
import {User} from '../page';
import {Post} from '../../posts/page';

type Params ={
    params:{
        userId: string
    }
}

const SingleUser = async ({params: {userId}}:Params) => {
    const singleUserData   = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    const userPostsData     = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next:{revalidate: 40}});
  

  const [user, userPosts] = await Promise.all([singleUserData.json(), userPostsData.json()])
  return (
    <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>

        <table className='mt-6'>
          <thead>
            <tr>
              <th>Names</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userPosts.map((post:Post)=>{
              return  <tr key={post.id}>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                      </tr>
            })}
           
          </tbody>
        </table>

    </div>
  )
}

export default SingleUser