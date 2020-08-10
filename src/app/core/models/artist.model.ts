import { Manga } from './manga.model';

export interface Artist {
    id: number;
    name: string;
    mangas: Manga[];
}
