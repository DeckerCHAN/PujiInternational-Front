import { HttpHeaders } from '@angular/common/http';

export const summariesPageSize = 2;
export const summariesUrl = 'http://localhost:8080/api/getSummaries';
export const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
