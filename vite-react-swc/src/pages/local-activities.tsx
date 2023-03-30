import { useEffect, useState } from 'react';

import { client } from '../components/client/client';
import { Post } from '../models/Post';

export const LocalActivities: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>();
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
      <div> Lokale Aktiviteter</div>

      {posts?.map((post, index) => (
        <div key={index}>
          <h1>{post?.title}</h1>
          <img
            src={post?.mainImage?.asset?.url}
            width="1000"
            alt={post?.mainImage?.alt}
          />
        </div>
      ))}
    </>
  );
};
