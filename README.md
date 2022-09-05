### Nextjs 강좌 (출처: 코딩앙마)

```
Next js 모든 페이지 사전 렌더링 (Pre-rendering)
더 좋은 퍼포먼스
검색엔진최적화(SEO)

1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)

차이점은 언제 HTML 파일이 생성하는가

[정정 생성]
- 프로젝트가 빌드하는 시점에서 html파일 생성
- 모든 요청에 재사용
- 퍼포먼스 이유로, Next js는 정적 생성을 권고
- 정적 생성된 페이지들은 CDN에 캐시
- 사용법 : getStaticProps / getStaticPaths
- 상품리스트나 도움말, 블로그 페이지같이 데이터 패칭이 한번 이뤄지는 곳에서는 서버사이드 렌더링을 할 필요가 없다.

[Server Side Rendering]은 매 요청마다 html을 생성
- 항상 최신 상태 유지
- 사용법 : getServerSideProps

```