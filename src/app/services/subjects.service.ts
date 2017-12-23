import { Injectable } from '@angular/core';

const mockListData = [
  {
    id: 1,
    title: 'JavaScript',
    zone: 'client side',
    importance: 3,
    control: 2
  },
  {
    id: 2,
    title: 'Node.js',
    zone: 'server side',
    importance: 3,
    control: 1
  },
  {
    id: 3,
    title: 'git',
    zone: 'both sides',
    importance: 2,
    control: 2
  },
  {
    id: 4,
    title: 'docker',
    zone: 'both sides',
    importance: 1,
    control: 3
  },
  {
    id: 5,
    title: 'HTML',
    zone: 'client side',
    importance: 3,
    control: 2
  },
  {
    id: 6,
    title: 'Mongo.DB',
    zone: 'server side',
    importance: 2,
    control: 3
  },
  {
    id: 7,
    title: 'MySQL',
    zone: 'server side',
    importance: 3,
    control: 2
  }
];

@Injectable()
export class SubjectsService {

  constructor() { }

  getSubjects(zone:string) {
    return mockListData.filter(i => i.zone === zone);
  }

}
