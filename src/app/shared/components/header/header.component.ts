import {Component, OnInit} from '@angular/core';
import {ApexService} from '../../apex.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerSubsciption: any;
  showHeader: any;
  linkActiveIndex: any;
  headerLinks = [
    {
      id: 1,
      name: 'strategy',
      link: '/strategy/overview',
      img: '../../../../assets/images/icons/strategy_map_white.png',
      imgOverlay: '../../../../assets/images/icons/strategy_map.png',
      children: [{id: 1, name: 'Organization overview', route: '/strategy/overview', class: 'active'},
        {id: 2, name: 'Organization Structure', route: '/strategy/corporateStructure'},
        {id: 3, name: 'Strategry Analysis', route: '/strategy/strategyAnalysis'},
        {id: 3, name: 'Strategry Projection', route: '/strategy/strategyProjection'},
        {id: 4, name: 'Value Gap', route: '/strategy/valueGap'},
        {id: 5, name: 'Value Gap Closer', route: '/strategy/valueGapCloser'}]
    },
    {
      id: 2,
      name: 'bsc',
      link: '/bsc/bsc',
      img: '../../../../assets/images/icons/bsc_white.png',
      imgOverlay: '../../../../assets/images/icons/bsc.png',
      children: [
        {id: 1, name: 'Balance Scorecard', route: '/bsc/bsc', class: 'active'},
        {id: 2, name: 'Perspective', route: '/bsc/perspective'},
        {id: 3, name: 'Themes', route: '/bsc/themes'},
        {id: 4, name: 'Objectives', route: '/bsc/objectives'},
        {id: 5, name: 'Measures', route: '/bsc/measures'}]
    }, {
      id: 3,
      name: 'initiatives',
      link: '/initiatives/initiative',
      img: '../../../../assets/images/icons/initiatives_white.png',
      imgOverlay: '../../../../assets/images/icons/initiatives.png',
      children: [
        {id: 1, name: 'initiative', route: '/initiatives/initiative'},
        {id: 2, name: 'milestones', route: '/initiatives/milestones'},
        {id: 3, name: 'ganttChart', route: '/initiatives/ganttChart'}]
    }, {
      id: 4,
      name: 'alignments',
      link: '/alignments/corporatesbu',
      img: '../../../../assets/images/icons/Alignment_white.png',
      imgOverlay: '../../../../assets/images/icons/Alignment.png',
      children: [
        {id: 1, name: 'Corporate-SBU', route: '/alignments/corporatesbu', class: 'active'},
        {id: 2, name: 'Corporate Unit - SBU Unit ', route: '/alignments/corporatetosbu'},
        {id: 3, name: 'Corporate-Board', route: '/alignments/corporatetoboard'},
        {id: 4, name: 'SBU-SBU', route: '/alignments/sbutosbu'},
        {id: 5, name: 'HR-Alignment', route: '/alignments/hralignment'},
        {id: 6, name: 'IT-Alignment', route: '/alignments/italignment'}]
    }, {
      id: 5,
      name: 'strategy review',
      link: '/strategyreview/themeStory',
      img: '../../../../assets/images/icons/Startegy_Reviews_white.png',
      imgOverlay: '../../../../assets/images/icons/Startegy_Reviews.png',
      children: [
        {id: 1, name: 'theme story', route: '/strategyreview/themeStory'},
        {id: 2, name: 'objective story', route: '/strategyreview/objectiveStory'},
        {id: 3, name: 'initiative story', route: '/strategyreview/initiativeStory'}]
    },
    {
      id: 6,
      name: 'action items',
      link: '/actionItems/actionItem',
      img: '../../../../assets/images/icons/Action_Items_white.png',
      imgOverlay: '../../../../assets/images/icons/Action_Items.png',
      children: [
        {id: 1, name: 'action', route: '/actionItems/actionItem'}
      ]
    }, {
      id: 7,
      name: 'risk assessment',
      link: '/riskassessments/riskassessment',
      img: '../../../../assets/images/icons/Action_Items_white.png',
      imgOverlay: '../../../../assets/images/icons/Action_Items.png',
      children: [
        {id: 1, name: 'risk', route: '/riskassessments/riskassessment'}
      ]
    }];

  constructor(private apexService: ApexService) {
  }

  ngOnInit() {
    this.headerSubsciption = this.apexService.sessionUserEvent().subscribe(data => {
      this.showHeader = data;
    });
  }

  activeLink(id: any, i) {
    this.linkActiveIndex = i;
  }
}
