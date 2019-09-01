import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Owner } from '../../_interface/owner.model';
import { ErrorHandlerService } from '../../shared/error-handler.service';
import { Router } from '@angular/router';
import { NgxSpinnerService,NgxSpinnerModule } from "ngx-spinner";

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit, AfterViewInit {

  public displayedColumns = ['emp_id', 'emp_name', 'treatment', 'approval_status', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Owner>(); 

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private repoService: RepositoryService, private errorService: ErrorHandlerService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    this.repoService.getData('/approval_list')
    .subscribe(res => {
      console.log(res);
      this.dataSource.data = res as Owner[];
      this.spinner.hide();
    },
    (error) => {
      console.log(error);
      this.errorService.handleError(error);
      this.spinner.hide();
    })
    //this.dataSource.data=[{"emp_id":"eufbuj","treatment":"No","approval_status":"pending","emp_name":"ducbuj"},{"emp_id":"djdb","treatment":"No","approval_status":"pending","emp_name":"bfdj"}];
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    let url: string = `/owner/details/${id}`;
    //this.router.navigate([url]);
  }

  public redirectToUpdate = (id: string) => {
    this.spinner.show();
    this.repoService.getData(`/accept_approval/${id}`)
    .subscribe(res => {
      console.log(res);
      this.getAllOwners();
      
    },
    (error) => {  
      console.log(error);
      this.errorService.handleError(error);
      this.spinner.hide();
    })
  }

  public redirectToDelete = (id: string) => {
    this.spinner.show();
    this.repoService.getData(`/reject_approval/${id}`)
    .subscribe(res => {
      console.log(res);
      this.getAllOwners();
      
    },
    (error) => {
      console.log(error);
      this.errorService.handleError(error);
      this.spinner.hide();
    })  }
}
