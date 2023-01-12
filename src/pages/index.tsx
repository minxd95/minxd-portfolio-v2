import Layout from "@/components/Layout";
import { mdiPlay } from "@mdi/js";
import Icon from "@mdi/react";
import * as React from "react";

const IndexPage = () => {
  return (
    <Layout>
      <div className="text-4xl font-bold py-24 flex flex-col gap-9">
        <p className="animate-fade-in">안녕하세요.</p>
        <p className="animate-[fade-in_1s_0.5s_ease_forwards] opacity-0">
          웹개발자 서민석입니다.
        </p>
      </div>
      {/* <div className="flex flex-col items-center absolute top-[50vh] -translate-y-1/2 animate-[fade-in_1s_1s_ease_forwards] opacity-0">
        <div className="animate-bounce text-slate-800">
          <Icon path={mdiPlay} size="24px" />
        </div>
        <span className="text-sm">More</span>
      </div> */}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Minseok Seo - Introduce</title>;
