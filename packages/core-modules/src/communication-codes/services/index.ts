import { errorMessages } from "../error";
import { successMessages } from "../success";
import { Message } from "../types";

export function getErrorMessage(code: number, language: string): string {
  const errorMessage = errorMessages[code];
  if (errorMessage) {
    return errorMessage[language as keyof Message] || errorMessage.en; 
  } else {
    return 'Error no especificado';
  }
}
  
export function logError(error: Error): void {
  console.error('Error:', error);
}

export function getSuccessMessage(code: number, language: string): string {
  const successMessage = successMessages[code];
  if (successMessage) {
    return successMessage[language as keyof Message] || successMessage.en; 
  } else {
    return 'Mensaje de éxito no especificado'; 
  }
}