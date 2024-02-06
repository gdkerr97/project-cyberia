import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThreadsComponent implements OnInit{

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
