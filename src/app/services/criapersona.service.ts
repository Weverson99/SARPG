import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CriapersonaI } from './../model/criapersona.interface';

@Injectable({
  providedIn: 'root'
})
export class CriapersonasService {
  private criapersonasCollection: AngularFirestoreCollection<CriapersonaI>;
  private criapersonas: Observable<CriapersonaI[]>;

  constructor(private db:AngularFirestore) { 
    this.criapersonasCollection = db.collection<CriapersonaI>('criapersonas');
    this.criapersonas = this.criapersonasCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }
    ))
  }

  getCriapersonas() {
    return this.criapersonas;
  }

  getCriapersona(id:string) {
    return this.criapersonasCollection.doc<CriapersonaI>(id).valueChanges();
  }

  update(criapersona:CriapersonaI, id:string) {
    return this.criapersonasCollection.doc(id).update(criapersona);
  }

  remove(id:string) {
    return this.criapersonasCollection.doc(id).delete();
  }

  addCriapersona(criapersona:CriapersonaI) {    
    return this.criapersonasCollection.add(criapersona);
  }
}
