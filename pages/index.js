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
        
        <p>Hi , my name is Aldwin S. Española and you can just call me “ald” a 21 yrs.old and live in San Isidro Sta. Ana, Pampanga. 
        My hobbies are listening to music, cooking, creating some arts like painting and some stuff that I really enjoy and when it comes
        to music i’m not that type of person that is so very specific in what genre they are into but for me as long as it makes my heart happy listening to it that’s cool. 
         And when it comes to favorite food I really like every soup base dish like “sopas” and giving some trivia about my name “aldwin” at first mom taught me my name is “Baldwin” that means bold friend.</p> 
        
        <p>EXPECTATION IN THIS SUBJECT: </p>
        <ul>
          <li>My Expectation in this subject it will be fun.</li>
          <li>I also expect in this subject that it would help me to know a lot of things.</li>
          <li>My expectation in this subject it would be hard for me.</li>
        </ul>

        <ol>
        <li>Being on Time.</li>
        <li>Doing a little Extra.</li>
        <li>having a Positive Attitude.</li>
        <li>Being Coachable.</li>
        <li>Being Prepared.</li>
        <li>Being High Energy.</li>
        <li>Being Passionate.</li>
        <li>Using Good Body Language.</li>
        <li>Making an Effort.</li>
        <li>Having a Strong Work Ethic.</li>
        </ol>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}