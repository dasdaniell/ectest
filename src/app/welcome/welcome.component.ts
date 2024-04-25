import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./welcome.template.html",
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit() {
    this.router.navigate(['sales'], { relativeTo: this.route });
  }

}
