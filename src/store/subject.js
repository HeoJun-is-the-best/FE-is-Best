import { atom } from "jotai";

export const selectedSubjectStore = atom("프로그래밍");
export const selectedSubjectTopicStore = atom("");
export const subjectStore = atom([
  {
    id: 1,
    title: "프로그래밍",
    subTopics: [
      {
        id: 1,
        majorTopicTitle: "Java",
      },
      {
        id: 2,
        majorTopicTitle: "Python",
      },
      {
        id: 3,
        majorTopicTitle: "Kotlin",
      },
    ],
  },
  {
    id: 2,
    title: "디자인",
    subTopics: [
      {
        id: 4,
        majorTopicTitle: "UI/UX",
      },
      {
        id: 5,
        majorTopicTitle: "그래픽디자인",
      },
    ],
  },
  {
    id: 3,
    title: "데이터베이스",
    subTopics: [
      {
        id: 6,
        majorTopicTitle: "MySQL",
      },
      {
        id: 7,
        majorTopicTitle: "MongoDB",
      },
    ],
  },
]);
