export interface Character {
  id: number,
  image?: string,
  url?: string,
  name?: string,
  location?: string,
  gender?: string,
  episodes?: string[],
}

interface Episode{
  id: number,
  titulo: string,
  fecha: string,
  episodio: string,
}