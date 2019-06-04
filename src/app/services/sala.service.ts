import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SalaI } from './../model/sala.interface';

@Injectable({
  providedIn: 'root'
})
export class SalaSService {
  private salasCollection: AngularFirestoreCollection<SalaI>;
  private salas: Observable<SalaI[]>;

  constructor(private db:AngularFirestore) { 
    this.salasCollection = db.collection<SalaI>('salas');
    this.salas = this.salasCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      }
    ))
  }

  getSalas() {
    return this.salas;
  }

  getSala(id:string) {
    return this.salasCollection.doc<SalaI>(id).valueChanges();
  }

  update(sala:SalaI, id:string) {
    return this.salasCollection.doc(id).update(sala);
  }

  remove(id:string) {
    return this.salasCollection.doc(id).delete();
  }

  addSala(sala:SalaI) {    
    return this.salasCollection.add(sala);
  }
}
