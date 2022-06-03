import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getAllPosts } from '../../lib/posts'

export default function Posts({posts}) {
  console.log(posts)
  return (
    <Layout>
        {posts?.map((item) => 
        <Card key={item.id}>
          <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {/* <Card.Text>
            {item.description}
          </Card.Text> */}
          <Link href={`/post/${item.id}`}>
            {/* <Card.Link>See more</Card.Link> */}
            <Button variant="primary">See more</Button>
          </Link>
        </Card.Body>
        </Card>
      )}
      {/* {posts.map((item) => item.title)} */}
    </Layout>
  )
}
export async function getStaticProps() {
  // const res = await fetch('https://616e3423a83a850017caa863.mockapi.io/post')
  const res = await getAllPosts()
  const posts = await res.json()
  return {
    props: {
      posts
    }
  };
}
// export default Posts