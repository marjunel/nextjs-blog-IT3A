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
        <p>My name is Marjunel Lagman and I spend my free time playing games. 
        I am not a picky eater and I do not have a favorite food because I am 
        usually fine with anything. I took IT because I heard that they have 
        good salaries and I am interested in computers so I can say that I also 
        took it out of interest. Ten years from now, I see myself as already 
        established in life because of the many work opportunities I have from 
        my chosen career. I expect that in this subject, it will further enhance 
        my knowledge about Information Technology by gaining new information that 
        I had not yet encountered and teach me terms that are still unfamiliar to me.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}