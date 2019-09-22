import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, NavigationExtras} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AlignmentService} from '../alignments.service';

@Component({
  selector: 'app-corporatesbu',
  templateUrl: './corporatesbu.component.html',
  styleUrls: ['./corporatesbu.component.scss']
})
export class CorporatesbuComponent implements OnInit {

  alignemtntsForm = this.formBuilder.group({
    orgCode: [''],
    orgName: [''],
    orgType: [''],
    year: [''],
    version: [''],
    element: [''],
    toOrgType: ['']
  });

  constructor(private toasterService: ToastrService,
              private formBuilder: FormBuilder,
              private alienmentService: AlignmentService) {
  }

  ngOnInit() {
  }

}
