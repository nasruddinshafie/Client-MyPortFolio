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
      this.toastr.error(error.error),
      console.log(error)
    }
   })
  }
  Cancel(){
    this.cancelRegsiter.emit(false);
  }
}
