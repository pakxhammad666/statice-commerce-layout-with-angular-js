import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Banner } from './banner/banner';

@Component({
  selector: 'app-home',
  imports: [Navbar, Banner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
