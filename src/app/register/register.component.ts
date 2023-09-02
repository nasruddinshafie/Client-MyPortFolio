import { Component ,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegsiter = new EventEmitter();
  model: any = {}

  constructor(private accountService: AccountService){

  }

  ngOnInit(): void {
    
  }
  
  Register(){
   this.accountService.Register(this.model).subscribe({
    next : () => {
      this.Cancel()
    },
    error: error => console.log(error)
   })
  }
  Cancel(){
    this.cancelRegsiter.emit(false);
  }
}
