import { HttpHeaders } from '@angular/common/http';

export const headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
export const summariesPageSize = 50;
export const summariesUrl = 'http://pujiinternational.com/api/getSummaries';
export const postByIdUrl = 'http://pujiinternational.com/api/articleById';


