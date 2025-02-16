```javascript
// pages/posts/[id].js

import { useRouter } from 'next/navigation';

export default function Post({ params }) {
  const router = useRouter();
  const id = params.id;

  // Fetch data here. Use `router.refresh()` to refetch on re-navigation.
  const data = fetchData(id); 

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Post {id}</h1>
      <p>{data.title}</p>
      <p>{data.content}</p>
    </div>
  );
}

async function fetchData(id) {
  const res = await fetch(`/api/posts/${id}`);
  return res.json();
}
```
```javascript
// pages/api/posts/[id].js

export default async function handler(req, res) {
  const { id } = req.query;

  // Simulate data fetching
  const data = {
    id: id,
    title: `Post ${id}`,
    content: `This is the content of post ${id}`
  }
  res.status(200).json(data);
}
```