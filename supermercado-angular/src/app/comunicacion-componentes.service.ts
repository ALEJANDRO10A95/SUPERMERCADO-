import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComunicacionComponentesService {
   private miFuncionSubject = new Subject<void>();

    miFuncionLlamada$ = this.miFuncionSubject.asObservable();

    llamarMiFuncion() {
      this.miFuncionSubject.next();
    }
  }
 