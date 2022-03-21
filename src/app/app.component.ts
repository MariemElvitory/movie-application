import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';


// constructor(private_AuthService:AuthService)
// {
//   private_AuthService.userdata.subscribe(()=>{
//     if(private_AuthService.userdata.getValue() !=null)
//     {
//       setTimeout(() => {private_AuthService.logout() }, 10000);
//     }
//   })
// }








}



