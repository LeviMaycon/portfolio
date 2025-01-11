import { Component } from '@angular/core';

interface Skill {
  name: string;
  level: number;
}


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills: Skill[] = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Management', level: 88 },
    { name: 'Cloud Services', level: 82 },
    { name: 'DevOps', level: 78 }
  ];
}
