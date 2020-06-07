import { Manga } from './manga.model';

export interface Chapter {
    id: number;
    pages: number;
    date: Date;
    chapterNumber: number;
    manga: Manga;
}
