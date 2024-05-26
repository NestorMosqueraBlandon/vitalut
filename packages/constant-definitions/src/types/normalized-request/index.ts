
export interface RequestInterface {
  Body: Record<string, unknown>;  
  Query: Record<string, unknown>; 
  Headers: Record<string, unknown>; 
}


export interface NormalizedRequest<R extends RequestInterface = RequestInterface> {
  protocol: string;
  secure: boolean;
  subdomains: string[];
  path: string;
  hostname: string;
  headers: R['Headers'];
  body: R['Body'];
  method: string;
  query: R['Query'];
  url: string;
  ip: string;
}