import React from 'react';
interface Post{
  id: number;
  post: string;
}

const Posts = async() => {

  const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const data: Post[] = await response.json();
  return (
    <>
      <div>Posts page</div>
        <ul>
          {data.map((post)=>{
            return <li key={post.id}>{post.post}</li>
          })}
        </ul>
    </>
  )
}

export default Posts