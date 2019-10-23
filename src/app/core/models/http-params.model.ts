export class HttpParams {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  name: string;
  id: string | null;
}
