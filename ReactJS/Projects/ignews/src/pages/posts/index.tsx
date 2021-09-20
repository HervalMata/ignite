import Head from "next/head";
import styles from './styles.module.scss'
import { GetStaticProps } from "next";
import { getPrismicClient } from "../../services/prismic";
import Prismic from '@prismicio/client'
import {RichText} from "prismic-dom";
import Link from "next/link";

type IPost = {
    slug: string;
    title: string;
    except: string;
    updatedAt: string;
}

interface IPostsProps {
    posts: IPost[];
}

export default function Posts({ posts }: IPostsProps) {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <div className={styles.posts}>
                {posts.map(post => (
                    <Link href={`/posts/preview/${post.slug}`}>
                        <a key={post.slug} href="#">
                            <time>{post.updatedAt}</time>
                            <strong>{post.title}</strong>
                            <p>{post.except}</p>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient();
    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'post')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })
    console.log('Prismic response =>', JSON.stringify(response, null, 2))
    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            except: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })
    return {
        props: {
            posts
        }
    }
}
