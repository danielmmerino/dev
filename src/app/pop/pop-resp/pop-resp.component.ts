import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-resp',
  templateUrl: './pop-resp.component.html',
  styleUrls: ['./pop-resp.component.css']
})
export class PopRespComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PopRespComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
