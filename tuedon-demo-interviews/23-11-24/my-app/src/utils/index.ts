import { DisplayType } from "./types";

export const fetchItems:()=>  Promise<DisplayType[]> = () =>
    new Promise((resolve: (value: DisplayType[]) => void, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Dashboard', description: 'A dashboard overview' },
          { id: 2, name: 'Analytics', description: 'Detailed analytics data' },
          { id: 3, name: 'Reports', description: 'Generate custom reports' },
        ]);
        // Uncomment to simulate an error
        reject('Failed to fetch data');
      }, 1000);
    });