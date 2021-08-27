import Head from 'next/head';

import utilStyles from '../../styles/utils.module.css'
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (<Layout>
        <Head>
            <title>
                {postData.title}
            </title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>)
};

// Gets the posible list of the IDs
export async function getStaticPaths() {
    const paths = getAllPostIds(); // Simulate API call

    return {
        paths,
        fallback: false
    }
};

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id); // Simulate get data
    return {
        props: {
            postData,
        }
    }
};