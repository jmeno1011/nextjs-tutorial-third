import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from "../../src/component/Item";

const Post = ({ item, name }) => {
  return (
    <>
      {item && (
        <>
          <Head>
            <title>{item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
};

export default Post;

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "740" } },
      { params: { id: "730" } },
      { params: { id: "729" } }
    ],
    // false면 없는 페이지에 대한 대응을 안해준다.
    // true 면 getServerSideProps를 이용하는 것과 마찬가지로 최초 접속시 생성되고 .next 폴더에 static파일로 새로 생성되어
    // 최초 접속시에는 빈화면 후 해당 페이지가 뜨게 되지만 두번째 접속시엔 .next폴더에 static파일이 생성되어 빠르게 화면이 뜨게 된다.
    // ** fallback:true는 페이지가 굉장히 많을 경우 유용하다.(모든 페이지를 프리렌더 하고 싶지만 많을 경우 빌드 타입이 오래걸릴수 있다.)
    // 최초 유저는 빈화면 후 페이지를 보겠지만 나중 접속 유저는 굉장히 빠르게 화면을 볼 수 있다.
    fallback: false, // can also be true or 'blocking'
  };
}

// getServerSideProps는 browser 환경이 아닌 node js 환경이다.
export async function getStaticProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}
