export type TPost = {
  id: number,
  media_url: string,
  like_count?: number,
  comments_count?: number,
  caption?: string
}

export type TComment = {
  id: string,
  text: string,
  timestamp: string
}
export interface IComments {
  data: {data:TComment[]}
}

export type TPostPage = {
  media_url: string,
  caption: string
}

export interface IPostPage {
  data: TPostPage
}

export interface IPosts {
  data: {
    username: string,
    media: {data:TPost[]}
  }
}