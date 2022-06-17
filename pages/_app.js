/**
 * 페이지 이동시 상태값을 유지하기 위해 App Component를 사용할 수 있다.
 * EX) global CSS
 *
 * _app.js 파일 추가시 종료하고 다시 시작해야 한다.(npm run dev)
 */

import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
