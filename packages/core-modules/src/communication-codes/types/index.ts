export interface Message {
  en: string;
  es: string;
  fr?: string;
  de?: string;
  ja?: string;
  zh?: string;
}

export interface Messages {
  [code:number]: Message 
}