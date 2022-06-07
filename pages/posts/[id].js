import Link from 'next/link'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { getOnePost, getPostById } from '../../lib/posts'

export default function Detail({ post }) {
  return <Layout>
        <h2>Detail post </h2>
        <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.description}</Card.Text>
            <Link href={`/posts`}>
                <Button variant="primary">Back</Button>
            </Link>
      </Layout>
}

export const getStaticPaths = async () => {
    const paths = await getOnePost()

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const post = await getPostById(params.id)

    return {
        props: {
            post
        }
    }

}
