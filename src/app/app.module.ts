import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

const config = {
  apiKey: "AIzaSyCq_8sc1_OeUBViQkmazhoyL97HqMtmrDI",
  authDomain: "chat-psybercity.firebaseapp.com",
  databaseURL: "https://chat-psybercity.firebaseio.com",
  projectId: "chat-psybercity",
  storageBucket: "chat-psybercity.appspot.com",
  messagingSenderId: "419036519980"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
