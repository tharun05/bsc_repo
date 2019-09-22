import {Injectable} from '@angular/core';
import {AppService} from '../shared/app.service';
import {HttpService} from '../shared/http.service';
import {HttpHeaders} from '@angular/common/http';
import {Props} from '../common/props';

@Injectable()
export class InitiativeService {
  headers: HttpHeaders;
  props: Props = Props;
  projType;

  private initiative_url = '/initiative';
  private milestone_url = '/initiative/milestone';

  constructor(private http: HttpService, private appService: AppService) {
  }

  saveInitiative(data: any) {
    return this.http.post(this.initiative_url, data);
  }

  saveMilestone(data: any) {
    return this.http.post(this.milestone_url, data);
  }

  updateInitiative(data: any, id?: any) {
    return this.http.put(this.initiative_url + '/' + id, data);
  }

  getInitiative() {
    return this.http.get(this.initiative_url, null);
  }

  getMilestone() {
    return this.http.get(this.milestone_url, null);
  }

  deleteInitiative(id: any) {
    return this.http.delete(this.initiative_url + '/' + id, null);
  }
}
