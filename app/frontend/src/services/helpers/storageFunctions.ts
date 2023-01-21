import { IStorageUserData } from '../interfaces';

export function saveData(data: IStorageUserData): void {
  localStorage.setItem('userPreferences', JSON.stringify(data));
}

export function recoverData(): IStorageUserData | null {
  const userPreferences = localStorage.getItem('userPreferences');
  if (!userPreferences) return null;
  return JSON.parse(userPreferences) as IStorageUserData;
}
