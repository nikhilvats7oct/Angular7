//import { Injectable } from '@angular/core';
import { Department } from './employee.model';
//import { HttpClient } from "@angular/common/http";

// @Injectable({
//   providedIn: 'root'
// })
export class DepartmentService {
  deptList:Department[];
  
    getDepartmentList():Department[]{
      return this.deptList=
      [
          {DepartmentId:1,DeptName:"IT"},
          {DepartmentId:2,DeptName:"ADMIN"}
        
      ];
    }
  }

