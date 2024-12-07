import { DataStore } from '@aws-amplify/datastore';
import { YourModel } from './models';

// Function to save data
export async function saveData(item: YourModel) {
  try {
    await DataStore.save(item);
    console.log('Data saved successfully');
  } catch (error) {
    console.error('Error saving data', error);
  }
}

// Function to query data
export async function queryData() {
  try {
    const items = await DataStore.query(YourModel);
    console.log('Data queried successfully', items);
    return items;
  } catch (error) {
    console.error('Error querying data', error);
  }
}

// Function to delete data
export async function deleteData(item: YourModel) {
  try {
    await DataStore.delete(item);
    console.log('Data deleted successfully');
  } catch (error) {
    console.error('Error deleting data', error);
  }
}
