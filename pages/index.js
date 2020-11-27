import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={utilStyles.headingMd}>…</section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Наши успехи:</h2>
<details>
<summary>Создание чат бота для телеграм</summary>
Чат-бот – это компьютерная программа, которая ведет разговор с помощью слуховых или текстовых методов. 
Чат-боты, или виртуальные собеседники, используются в диалоговых системах для различных практических целей, включая обслуживание клиентов или сбор информации.
</details>
<details>
<summary>Добавление программных продуктов на GitHub</summary>
GitHub — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки.
<img src="https://www.learn-it-with-examples.com/development/odev-tutorials/git/pictures/7-create-github-repository/2-create-github-repository-create.png"
/>
</details>
				
        <ul className={utilStyles.list}>
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
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
//export default function Home() {
//  return (
//    <Layout home>
//      <Head>
//        <title>{siteTitle}</title>
//      </Head>
//      <section className={utilStyles.headingMd}>
//        <p>Меня зовут Федорова Яна, я являюсь студенткой 4 курса Самарского государственного социально-педагогического универститета. 
//		Я учусь на факультете математики, физики и информатики на профиле "Прикладная информатика"</p>
//        <p>
//          (This is a sample website - you’ll be building a site like this on{' '}
//          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
//        </p>
//      </section>
//    </Layout>
//  )
//}
  