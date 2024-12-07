import { Storage } from '@aws-amplify/storage';

export const configureStorage = () => {
  // Example configuration for public access
  Storage.configure({
    level: 'public',
    bucket: 'your-bucket-name',
    region: 'your-region',
    customPrefix: {
      public: 'public/',
      protected: 'protected/',
      private: 'private/',
    },
    identityPoolId: 'your-identity-pool-id',
  });
};

// Example function to upload a file
export const uploadFile = async (file: File) => {
  try {
    const result = await Storage.put(file.name, file, {
      contentType: file.type,
    });
    console.log('File uploaded successfully:', result);
    return result;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

// Example function to get a file
export const getFile = async (key: string) => {
  try {
    const result = await Storage.get(key, { level: 'public' });
    console.log('File retrieved successfully:', result);
    return result;
  } catch (error) {
    console.error('Error retrieving file:', error);
    throw error;
  }
};

// Example function to delete a file
export const deleteFile = async (key: string) => {
  try {
    await Storage.remove(key, { level: 'public' });
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};
