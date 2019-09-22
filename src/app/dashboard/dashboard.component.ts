import {Component, OnInit} from '@angular/core';
import {ApexService} from '../shared/apex.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  footerLinks = [
    {id: 1, name: 'Objective Story'},
    {id: 2, name: 'Theme Story'},
    {id: 3, name: 'Initiative Status'},
    {id: 4, name: 'Dashboards'},
    {id: 5, name: 'Action items'},
    {id: 6, name: 'Progress reports'},
  ];
  strategyCards = [
    {id: 1, name: 'STRATEGY', link: '/strategy/overview', img: '../../assets/images/icons/strategy.png'},
    // {id: 2, name: 'STRATEGY MAP', link: '/strategy/strategyMap', img: '../../assets/images/icons/strategy_map.png'},
    {id: 3, name: 'BSC', link: '/bsc/bsc', img: '../../assets/images/icons/bsc.png'},
    {id: 4, name: 'ALIGNMENT', link: '/alignments/corporatesbu', img: '../../assets/images/icons/Alignment.png'},
    {id: 5, name: 'INITIATIVES', link: '/initiatives/initiative', img: '../../assets/images/icons/initiatives.png'},
    {id: 6, name: 'ACTION ITEMS', link: '/actionItems/actionItem', img: '../../assets/images/icons/Action_Items.png'},
    {id: 7, name: 'STRATEGY REVIEWS', link: '/strategyreview/themeStory', img: '../../assets/images/icons/Startegy_Reviews.png'},
    {id: 8, name: 'RISK ASSESSMENT', link: '/riskassessments/riskassessment', img: '../../assets/images/icons/strategy_Planning.png'},
    // {id: 9, name: 'INDUSTRY KPIS', link: '/strategy/overview', img: '../../assets/images/icons/Industry_KPIS.png'}

  ];

  constructor(private apexService: ApexService) {

  }

  ngOnInit() {
  }
}
