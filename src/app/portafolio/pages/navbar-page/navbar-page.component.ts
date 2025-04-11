import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NavBarComponent from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-navbar-page',
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './navbar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavbarPageComponent { }
