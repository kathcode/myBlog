import Link from 'next/link'

import Date from '../components/date'
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section>
        <h2 >Blog</h2>
        <ul >
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}