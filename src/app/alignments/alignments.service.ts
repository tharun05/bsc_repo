import {Injectable} from '@angular/core';
import {AppService} from '../shared/app.service';
import {HttpService} from '../shared/http.service';
import {HttpHeaders} from '@angular/common/http';
import {Props} from '../common/props';

@Injectable()
export class AlignmentService {
  headers: HttpHeaders;
  props: Props = Props;
  projType;

  private alignments_url = '/scorecard';

  constructor(private http: HttpService, private appService: AppService) {
  }
}
