

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class LoadingService {
//   private isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

//   get isLoading$() {
//     return this.isLoadingSubject.asObservable();
//   }

//   // Activa el spinner y lo desactiva después de un tiempo especificado
//   showLoading(durationInSeconds: number) {
//     this.isLoadingSubject.next(true);

//     setTimeout(() => {
//       this.isLoadingSubject.next(false);
//     }, durationInSeconds * 2000);
//   }
// }


// loading.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$: Observable<boolean> = this.isLoadingSubject.asObservable();

  constructor() {}

  mostrarCarga(durationInSeconds: number): void {
    this.isLoadingSubject.next(true);

    // Desactiva la carga después del tiempo especificado en segundos
    timer(durationInSeconds * 1000).subscribe(() => {
      this.isLoadingSubject.next(false);
    });
  }
}
