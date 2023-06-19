import { remark } from 'remark';
import html from 'remark-html';

export async function getSortedPostsData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );
  return res;
}

export async function getAllPostIds() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );
  return res.map((i) => {
    return {
      params: {
        id: Number(i.id),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());
  return res;
}
