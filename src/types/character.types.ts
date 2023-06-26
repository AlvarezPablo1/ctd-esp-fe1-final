export interface Character {
  id: number,
  image?: string,
  url?: string,
  name?: string,
  location?: string,
  gender?: string,
  episodes?: string[],
}

export interface Episode{
  id: number,
  title: string,
  date: string,
  episode: string,
}