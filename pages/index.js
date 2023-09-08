import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        
        <p>Hi , my name is Aldwin S. Española and you can just call me “ald” a 21 yrs.old and live in San Isidro Sta. Ana, Pampanga. My hobbies are listening to music, cooking, creating some arts like painting and some stuff that I really enjoy and when it comes to music i’m not that type of person that is so very specific in what genre they are into but for me as long as it makes my heart happy listening to it that’s cool. And when it comes to favorite food I really like every soup base dish like “sopas” and giving some trivia about my name “aldwin” at first mom taught me my name is “Baldwin” that means bold friend. 

Why did you take up IT?

Because I was always intrigued by how technology worked as a child and still find it fascinating today, I studied IT in college.

What career do you see yourself exploring after graduation?

As long as it is related to my course and having knowledge enough about the certain position I'm good at, I really love designing because it makes me more creative and it makes me happy. I hope that this course will help me to build myself when it comes into designing.

What do you expect to learn in this subject ?

I’m expecting a cooperative and lively class as we dive in everyday as per schedule.
</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}