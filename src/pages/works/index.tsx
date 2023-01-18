import Content from "@/components/Content";
import Layout from "@/components/Layout";
import Subject from "@/components/Subject";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <Layout>
      <Subject>프로젝트</Subject>
      <Content>
        <div className="w-full h-[480px] drop-shadow-lg hover:drop-shadow-2xl transition bg-white rounded-xl flex flex-col justify-center items-center">
          <StaticImage src="../../images/flata.png" alt="flata" width={500} />
          <span className="text-2xl font-bold mt-8">플랫타 익스체인지</span>
        </div>
        <div className="w-full h-[480px] drop-shadow-lg hover:drop-shadow-2xl transition bg-white rounded-xl"></div>
        <div className="w-full h-[480px] drop-shadow-lg hover:drop-shadow-2xl transition bg-white rounded-xl"></div>
      </Content>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Minseok Seo - Works</title>;
