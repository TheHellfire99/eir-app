import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from 'firebase';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {
  bp: string;
  tri: string;
  chol: string;
  hemo: string;
  constructor(public af: AngularFireAuth, public fs: AngularFirestore,) { }


  bloodpressure() {
    if(this.bp != ''){

      this.fs.collection('bp/').add({
        Message: this.bp,
        
      });
      this.bp='';
    }
  }


  triglyceride() {
    if(this.tri != ''){

      this.fs.collection('tri').add({
        Message: this.tri,

      });
      this.tri='';
    }
  }

  cholesterol() {
    if(this.chol != ''){

      this.fs.collection('chol').add({
        Message: this.chol,

      });
      this.chol='';
    }
  }

  hemoglobin() {
    if(this.hemo != ''){

      this.fs.collection('hemo').add({
        Message: this.hemo,

      });
      this.hemo='';
    }
  }

  ngOnInit() {
  }

}
