import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Auth} from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private auth: Auth) {
  }

  title = 'budget-app';

  ngOnInit(): void {


  }
}
