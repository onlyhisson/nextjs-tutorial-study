/**
 * 파일명 - 라우트
 * file name : pages/posts/first-post.js
 * route url : /posts/first-post
 *
 * 컴포넌트 네이밍은 상관없음
 * `default` 로 export 해야함
 *
 * URL 은 따로 설정 없이 path 대로 아래와 같이 접속이 바로 가능
 * http://localhost:3000/posts/first-post
 *
 * Head Component 를 사용하면
 * index 페이지 이외에도 해당 컴포넌트를 사용하는 페이지에서
 * <head></head> 내부 내용 변경 가능
 */

import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
