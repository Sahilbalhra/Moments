export interface Data {
  _id: string;
  creatorId: string;
  selectedFile: string;
  tags: [string];
  message: string;
  title: string;
  comments: [string];
  likes: [string];
  updatedAt:string
}
export interface Post {
  message: string;
  data: Data;
}
export interface AllPosts {
  message: string;
  data: Data[];
}