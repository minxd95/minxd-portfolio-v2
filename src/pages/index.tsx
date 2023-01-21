import Content from "@/components/Content";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import Subject from "@/components/Subject";
import { mdiCellphone, mdiEmail, mdiHome, mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import * as React from "react";

const educationList = [
  "2014년 한국디지털미디어 고등학교 졸업",
  "2021년 상명대학교 경영학과 졸업",
];
const careerList = ["2021.01 ~ 06 (주)나이비", "2021.07 ~ (주)플랫타이엑스"];
const mainSkillList = [
  "JavasScript",
  "TypeScript",
  "React",
  "Next",
  "Recoil",
  "Styled-Component",
  "Node",
  "Git",
];

const IndexPage = () => {
  return (
    <Layout>
      <Subject>
        <p>안녕하세요.</p>
        <p>
          프론트엔드 개발자
          <span className="inline-block text-center w-36 h-16 leading-[4rem] text-5xl bg-primary text-white rounded-lg mx-4">
            서민석
          </span>
          입니다.
        </p>
      </Subject>
      <Content>
        <Profile />
        <Career />
        <Skill />
      </Content>
    </Layout>
  );
};

const Profile = () => {
  return (
    <div>
      <span className="text-xl font-bold">Profile</span>
      <ul>
        <li className="[&:not(:first-child)]:mt-4 [&:first-child]:mt-5">
          <div className="flex gap-2">
            <Icon path={mdiCellphone} size="16px" />
            <span>010-2441-6661</span>
          </div>
        </li>
        <li className="[&:not(:first-child)]:mt-4 [&:first-child]:mt-5">
          <div className="flex gap-2">
            <Icon path={mdiEmail} size="16px" />
            <a
              href="mailto:newobj95@gmail.com"
              target="_blank"
              className="flex"
            >
              <span>newobj95@gmail.com</span>
              <Icon
                path={mdiOpenInNew}
                size="16px"
                style={{ transform: "translate(0px, 1px)" }}
              />
            </a>
          </div>
        </li>
        <li className="[&:not(:first-child)]:mt-4 [&:first-child]:mt-5">
          <div className="flex gap-2">
            <Icon path={mdiHome} size="16px" />
            <span>서울특별시 강동구</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

const Career = () => {
  return (
    <div className="flex gap-4">
      <List title="Education" items={educationList} />
      <List title="Career" items={careerList} />
    </div>
  );
};

const Skill = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <span className="text-xl font-bold">Skill</span>
        <div className="mt-4 flex gap-2 flex-wrap">
          {mainSkillList.map((skill, idx) => (
            <Capsule key={idx} text={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

const List = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <div className="flex-1">
      <span className="text-xl font-bold">{title}</span>
      <ul>
        {items.map((item, idx) => (
          <li
            key={idx}
            className="[&:not(:first-child)]:mt-4 [&:first-child]:mt-5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Capsule = ({ text }: { text: string }) => {
  return (
    <div className="px-2 py-1 bg-slate-500 rounded-full text-xs text-white font-bold">
      {text}
    </div>
  );
};

export const Head = () => <Seo title="Introduce" />;

export default IndexPage;
