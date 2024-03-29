import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}

  id: number = this.activatedRoute.snapshot.params['id'];
  gifs: string[] = ['lain', 'lain_computer', 'lain_computer2', 'pc', 'wired'];
  file: string = '../../../assets/gif/';

  ngOnInit(): void {

    const rNumber: number = this.getRandomNumber(this.gifs.length);
    this.file = this.file.concat(this.gifs[rNumber]).concat('.gif');
    console.log(this.file);
      
  }

  getRandomNumber(maxValue: number) {
    return Math.floor(Math.random() * maxValue);
  }
}
