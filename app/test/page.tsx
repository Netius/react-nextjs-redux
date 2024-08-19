"use client"

import { useState } from "react";

interface DataItem {
  title: string;
  id: number;
  checked: boolean;
}

const data: DataItem[] = [
  { title: 'First', id: 0, checked: false },
  { title: 'Second', id: 1, checked: false },
  { title: 'Third', id: 2, checked: false },
  { title: 'Fourth', id: 3, checked: false },
];

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function Page() {
  const [rightData, setRightData] = useState<DataItem[]>([...data]);
  const [leftData, setLeftData] = useState<DataItem[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await response.json();
      setPosts(data);
      console.log(posts);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Transfer List</h1>
      <ul>
        {rightData.map((item, index) => (
          <li key={index} onClick={() => setLeftData([...leftData, item])}>
            {item.title}
          </li>
        ))}
      </ul>

      <ul>
        {leftData.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <div className="d-flex">
        <button className="btn btn-primary me-2" onClick={fetchData}>
          Get posts
        </button>
        <button className="btn btn-danger" onClick={() => setPosts([])}>Clear</button>
      </div>
      <span>https://jsonplaceholder.typicode.com/posts</span>
      <ul className="mt-3">
        {posts && posts.map((post: Post, index: number) => (
          <li key={index}>{post.id} - {post.title}</li>
        ))}
      </ul>
    </>
  )
}

