import { Component ,Input,Output, OnInit, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegsiter = new EventEmitter();
  model: any = {}
  isUserNameRequred: boolean = true;
  isPasswordRequired: boolean = true;
  constructor(private accountService: AccountService, private toastr:ToastrService){

  }

  ngOnInit(): void {
    
  }
  
  Register(){
   this.accountService.Register(this.model).subscribe({
    next : () => {
      this.Cancel()
    },
    error: error => {
     for(var error of error){
      if(error.toString().includes("username")){
       this.isUserNameRequred = false;
      }
      if(error.toString().includes("password")){
       this.isPasswordRequired = false;
      }
     }
    }
   })
  }
  Cancel(){
    this.cancelRegsiter.emit(false);
  }
}
