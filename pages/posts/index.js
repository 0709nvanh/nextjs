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
          <Link href={`/posts/${item.id}`}>
            <Button variant="primary">See more</Button>
          </Link>
        </Card.Body>
        </Card>
      )}
    </Layout>
  )
}
export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts
    }
  };
}