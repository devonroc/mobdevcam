import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    characters: Observable<any>;
    characterId: Observable<any>
    myChars: any[];

    constructor(private router: Router, private api: ApiService) { }

    ngOnInit() {

       this.characters = this.api.loadUsers();
         //this.myChars= this.api.loadUsers();
       // this.characters.subscribe(data => {console.log('my data' , data);
   // });
    

  }


    openDetails(character) {
        let characterId = character.char_id;
        this.router.navigateByUrl(`/tabs/characters/${characterId}`);
        // this.characterId.subscribe(data => {console.log('my data' , data);

        //  });
    }
}


