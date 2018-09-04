import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Message } from '../message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @Input() userAuth: string;
  messages: Observable<any[]>;
  private msgRef: AngularFirestoreCollection<Message>;

  constructor(private db: AngularFirestore) {
    this.msgRef = db.collection<Message>('messages', ref => ref.orderBy('timestamp'));
  }

  ngOnInit() {
    this.messages = this.msgRef.valueChanges();
  }

}
