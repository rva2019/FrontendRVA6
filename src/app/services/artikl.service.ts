import { BehaviorSubject, Observable } from 'rxjs';
import { Artikl } from '../models/artikl';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtiklService{
    private readonly API_URL = 'http://localhost:8083/artikl/'

    dataChange: BehaviorSubject<Artikl[]> = new BehaviorSubject<Artikl[]>([]);

    constructor (private httpClient: HttpClient){}

    public getAllArtikl(): Observable<Artikl[]>{
        this.httpClient.get<Artikl[]>(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        })

        return this.dataChange.asObservable();
    }
}