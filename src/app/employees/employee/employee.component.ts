import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import {  DepartmentService } from '../../shared/department.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private deptService : DepartmentService;
  constructor(private service: EmployeeService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      EmployeeID: null,
      FullName: '',
      Position: '',
      EMPCode: '',
      Mobile: '',
      Gender:'',
      isActive:true,
      deptId:null
    }
    this.deptService=new DepartmentService();
    this.deptService.deptList=this.deptService.getDepartmentList();
    
  }


  onSubmit(form: NgForm) {
    if (form.value.EmployeeID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form: NgForm) {
    this.service.putEmployee(form.value).subscribe(res => {
      this.toastr.info('Updated successfully', 'EMP. Register');
      this.resetForm(form);
      this.service.refreshList();
    });

  }

}