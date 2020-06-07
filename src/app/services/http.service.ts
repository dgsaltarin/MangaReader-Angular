import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Manga } from '../shared/models/manga.model';
import { Preview } from '../shared/models/preview.model';
import { Page } from '../shared/models/page.model';
import { Chapter } from '../shared/models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl: string = environment.BASE_API_URL;

  constructor(private readonly http: HttpClient) { }

  public getAllMangas(){
    return this.http.get<Manga[]>(this.baseUrl + '/manga');
  }

  public getMangaById(id: number){
    return this.http.get<Manga>(this.baseUrl + `/manga/${id}`);
  }

  public getRandomManga(){
    return this.http.get<Manga>(this.baseUrl + '/random');
  }

  public getAllMangasPreview(){
    return this.http.get<Preview[]>(this.baseUrl + '/mangaPreviews');
  }

  public getAllChaptersPreview(idManga: number){
    return this.http.get<Preview[]>(this.baseUrl + `/manga/${idManga}/chaptersPreview`);
  }

  public getChaperPreviews(idChapter: number){
    return this.http.get<Preview[]>(this.baseUrl + `/manga/${idChapter}/preview`);
  }

  public getChapterPage(chapterNumber: number, pageNumber: number, idManga: number){
    return this.http.get<Page>(this.baseUrl + `/${idManga}/${chapterNumber}/${pageNumber}`);
  }

  public getChapterById(idChapter: number, idManga: number){
    return this.http.get<Chapter>(this.baseUrl + `/manga/${idManga}/${idChapter}`);
  }

}
