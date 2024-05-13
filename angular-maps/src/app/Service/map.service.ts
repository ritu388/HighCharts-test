import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  dummyEmployeeData = [
    { id: 1, name: 'John', country: 'USA', city: 'New York', age: 30, gender: 'Male', headCount: 2 },
    { id: 2, name: 'Alice', country: 'UK', city: 'Chicago', age: 35, gender: 'Female', headCount: 3 },
    { id: 3, name: 'Bob', country: 'Canada', city: 'Toronto', age: 28, gender: 'Male', headCount: 1 },
    // Add more dummy data...
  ];
  constructor() { }

  getEmployees(): Observable<any[]> {
    return of(this.dummyEmployeeData);
  }
}
