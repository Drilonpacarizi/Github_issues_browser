export type Issue = {
  number: number;
  title: string;
  body: string;
  url: string;
  state: string;
  id: string;
};

export type Query = {
  allCourse: Issue[];
};
