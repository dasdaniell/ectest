import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: "./welcome.template.html",
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    // this.router.navigate(['sales']);
  }

}
