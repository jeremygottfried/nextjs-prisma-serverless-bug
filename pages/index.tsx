import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from "next";
import prisma from '../lib/prisma';
// import { getSession } from 'next-auth/client'

export const getServerSideProps: GetServerSideProps = async (context) => {

  const posts = await prisma.post.findMany()
  // const session = await getSession(context);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/api/auth/signin',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: { posts },
  };
};

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Posts</h1>
      <ul>
      {posts.map((post) => <li>
        {post.title}
      </li>)}
      </ul>
    </div>
  )
}
