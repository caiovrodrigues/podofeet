import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private http = inject(HttpClient);
  private url = "https://formsubmit.co/08e9b21e26bd678b0b83b20c2e3d12c1";

  newsletter(data: any): Observable<string>{
    return this.http.post<string>(this.url, data);
  }

}
