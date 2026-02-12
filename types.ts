
export interface Job {
  id: string;
  title: string;
  wilaya: string;
  wilayaCode: string;
  category: string;
  company: string;
  logo: string;
  publishDate: string;
  content: string;
  applyUrl: string;
}

export interface Wilaya {
  code: string;
  name: string;
}
