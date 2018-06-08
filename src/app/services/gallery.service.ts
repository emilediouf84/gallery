import { Http } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GalleryService{
    public host:string="https://pixabay.com/api";
    constructor(private http:Http){

    }
    chercher(query:string,size:number,page:number){
     return this.http.get(this.host+"?key=9183031-a9bfd33ed29da314f52a89e35&q="
      +query+"&per_page="+size+"&page="+page)

      .map(resp=>resp.json());
    }
}