export interface IPost  {
  id: number,
  media_url: string,
  like_count?: number,
  comments_count?: number,
  caption?: string
}

export interface IComment  {
  id: string,
  text: string,
  timestamp: string
}
export interface IComments {
  data: {data:IComment[]}
}

export interface IPostPage  {
  media_url: string,
  caption: string
}

export interface IPostPageData {
  data: IPostPage
}

export interface IPosts {
  data: {
    username: string,
    media: {data:IPost[]}
  }
}