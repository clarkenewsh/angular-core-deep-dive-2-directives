import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from './model/course';
import {CourseCardComponent} from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;

    // Query highlight directive when the component may have multiple custom directives applied to it
    @ViewChild(CourseCardComponent, {read: HighlightedDirective})
    highlighted: HighlightedDirective;

    @ViewChildren(CourseCardComponent, {read: ElementRef})
    cards : QueryList<ElementRef>;


    constructor() {

    }

    ngAfterViewInit() {
      console.log(this.highlighted);
    }

    onCourseSelected(course:Course) {

    }

    onToggle(isHighLighted:boolean) {
      console.log(isHighLighted);
    }

}
