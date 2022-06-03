import React from 'react'
import { getOnePost, getPostById } from '../../lib/posts'

export default function Detail({ post }) {
  return <div>Detail post {post.title}</div>
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
