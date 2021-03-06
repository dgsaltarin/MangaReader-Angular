import { Artist } from './artist.model';
import { Chapter } from './chapter.model';
import { Tag } from './tag.model';

export interface Manga {
    idManga: number;
    name: string;
    description: string;
    chapters: number;
    status: boolean;
    cover: string;
    artist: Artist;
    tags: Tag[];
}
