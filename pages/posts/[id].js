import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

/**
 * https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-false
 *
 * 현재의 페이지 파일에서 getStaticPaths를 export하면 paths를 리턴한다, i18n 처리도.
 * Next.js 는 정적으로 각 path를 page 컴포넌트에서 빌드시 생성한다.
 */
export async function getStaticPaths() {
  const paths = getAllPostIds();

  // fallback: false, 빌드시 생성되지 않은 path url 요청일 경우 404 page return
  // fallback: true, 404 page 리턴안함, 해당 url 의 첫 요청에 fallback version 을 제공
  return {
    paths, // paths key, pre-rendered
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
