import './App.css';

import { useEffect, useState } from 'react';

import { client } from './components/client/client';

interface Post {
  title?: string;
  slug?: string;
  mainImage?: mainImage;
}

interface mainImage {
  alt?: string;
  asset?: asset;
}

interface asset {
  _id?: number;
  url?: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>();

  //useEffect(() => {
  // (async () => {
  // const posts = await SanityService.getPosts()
  // setPosts(posts);
  // })
  //} )

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{ title, slug, mainImage{ asset->{ _id, url}, alt}}`
      )
      .then((data) => setPosts(data));
    console.log('called');
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {posts?.map((post, index) => (
        <div key={index}>
          <h1>{post?.title}</h1>
          <img src={post?.mainImage?.asset?.url} alt={post?.mainImage?.alt} />
        </div>
      ))}
    </>
  );
}

export default App;
