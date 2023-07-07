import { ApiServiceService } from './../Service/api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private apiService:ApiServiceService) { }

  character:any
  
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      const id=param["id"]
      this.apiService.getCharacterById(id).subscribe(result=>{
        this.character=result
      })
    })
  }

}
