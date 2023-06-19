import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData?.title}</title>
      </Head>
      {postData?.id}
      <br />
      {postData?.title}
      <br />
      {postData?.body}
    </Layout>
  );
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
