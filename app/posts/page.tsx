import React from 'react';

export interface Post{
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Posts = async() => {

  const response= await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate: 40}});
    const data: Post[] = await response.json();
  return (
    <>
      <div>Posts page</div>
        <ul>
          {data.map((post)=>{
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
    </>
  )
}

export default Posts