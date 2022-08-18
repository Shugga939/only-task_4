import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import PostItem from '../components/PostItem/PostItem'
import { useFilters } from '../hooks/useFilters'
import IMockData from '../models/IMockData'
import styles from '../styles/Posts.module.css'

const Posts: NextPage<IMockData> = (mockData: IMockData) => {
    const [posts] = useState(mockData.posts)
    const [options] = useState(mockData.options)
    const sortedPosts = useFilters(posts, options)

    return (
        <div className={styles.container}>
            <Head>
                <title>Show posts</title>
                <meta name="description" content="Posts" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Posts List
                </h1>
                <div className={styles.posts}>
                    {sortedPosts.map(post => {
                        return <PostItem
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            image={post.image}
                        />
                    })}
                </div>
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts')
    const mockData: IMockData = await res.json()

    return {
        props: mockData
    }
}

export default Posts

