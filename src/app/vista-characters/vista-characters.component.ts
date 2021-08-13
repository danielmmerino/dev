import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';

import {MatDialog} from '@angular/material/dialog';
import { PopRespComponent } from '../pop/pop-resp/pop-resp.component';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-vista-characters',
  templateUrl: './vista-characters.component.html',
  styleUrls: ['./vista-characters.component.css']
})
export class VistaCharactersComponent implements OnInit {
  idForm: FormGroup;
  id = new FormControl('');
  idSearched: any;
  character: any ="";
  constructor(
    public formBuilder: FormBuilder,
    private srvApi: ServiceApiService,
    public dialog: MatDialog,
    
  ) { 
    this.idForm = this.formBuilder.group({
      
      id: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]+$'),
        Validators.minLength(1),
        Validators.maxLength(3),
      ])),
    });
  }

  ngOnInit(): void {
    this.srvApi.GetCharacter().subscribe(resp=>{
      this.character = JSON.parse(resp)
      
      
    })
  }
  searchCharacter(){
    if(this.idForm.valid){
      if(this.idForm.value['id']<100){
        this.searchObjet();
      }else{
        alert("El id debe ser un número entre 1 y 100")
      }
    }
    
    
  }
  searchObjet(){
    this.idForm.value
    this.idSearched = this.character.results.find(x=> x.id == this.idForm.value['id'])
    
    let dialogRef = this.dialog.open(PopRespComponent,{
      width: '50%',
      data: this.idSearched
    })
    dialogRef.afterClosed().subscribe(resp=>{
      this.idForm.reset();
    })
    
  }

}
