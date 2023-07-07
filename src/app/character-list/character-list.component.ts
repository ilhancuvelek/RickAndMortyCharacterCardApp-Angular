import { ApiServiceService } from './../Service/api-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private apiService:ApiServiceService) { }

  characters: any[] = [];

  ngOnInit(): void {
    this.apiService.getAllCharacters().subscribe(response=>{
      console.log(response.results)
      this.characters = response.results;
    })
  }

}
