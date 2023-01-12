import Layout from "@/components/Layout";
import { mdiPlay } from "@mdi/js";
import Icon from "@mdi/react";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <Layout>
      <div className="text-4xl font-bold py-24 flex flex-col gap-9">
        <p className="animate-fade-in">안녕하세요.</p>
        <p className="animate-[fade-in_1s_0.5s_ease_forwards] opacity-0">
          프론트엔드 개발자
          <span className="inline-block text-center w-36 h-16 leading-[4rem] text-5xl bg-primary text-white rounded-lg mx-4">
            서민석
          </span>
          입니다.
        </p>
      </div>
      {/* <p className="animate-[fade-in_1s_0.5s_ease_forwards] opacity-0">
        생일 : 1995년 10월 24일
        <div
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            border: "3px solid var(--grey)",
            background:
              "url(https://seom.in/assets/images/me.jpeg) 40% 40% / 130% no-repeat",
            marginBottom: "24px",
            boxShadow: "rgb(0 0 0 / 20%) 0px 0px 8px",
          }}
        ></div>
        <div className="w-[150px] h-[150px] rounded-[50%] border-[3px] mb-6 shadow-[rgb(0_0_0_/_20%)_0px_0px_8px] bg-me bg-[40%_40%] bg-[length:130%] bg-no-repeat"></div>
      </p> */}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Minseok Seo - Introduce</title>;
