import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
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

  public goToRoute(newRoute: string) {
    this.router.navigate([newRoute], { relativeTo: this.route });
  }

}
