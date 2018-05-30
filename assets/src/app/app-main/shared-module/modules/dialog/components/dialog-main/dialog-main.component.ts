import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material";
@Component({
  selector: 'app-dialog-main',
  templateUrl: './dialog-main.component.html',
  styleUrls: ['./dialog-main.component.css']
})
export class DialogMainComponent implements OnInit{
  constructor(public dialogRef : MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data : any) { }
  ngOnInit() {
    if(this.data && this.data.body && this.data.body.done){
      this.data.body.done.subscribe((value)=>{
        if(value) this.dialogRef.close();
      });
    }

    if(this.data && this.data.body && this.data.body.cancelled){
      this.data.body.cancelled.subscribe((value)=>{
        if(value) this.dialogRef.close();
      });
    }
  }

  onConfirm(data){
    if(data && this.data && this.data.callback && this.data.callback.confirm){
      this.data.callback.confirm((result)=>{
        if(result) this.dialogRef.close();
      });
    }
  }

  onCancel(data){
    if(data){
    	this.dialogRef.close();
    }
  }
}


export class DialogRef extends MatDialog{

}


