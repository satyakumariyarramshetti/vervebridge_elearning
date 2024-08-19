// src/utils/localStorage.js

// Function to add a file to local storage
export const addFileToLocalStorage = (file) => {
    const storedFiles = JSON.parse(localStorage.getItem('studentFiles')) || [];
    
    const reader = new FileReader();
    reader.onload = () => {
      const fileData = {
        id: Date.now(), // unique ID based on timestamp
        name: file.name,
        data: reader.result, // Base64 encoded file data
      };
      
      storedFiles.push(fileData);
      localStorage.setItem('studentFiles', JSON.stringify(storedFiles));
    };
    
    reader.readAsDataURL(file);
  };
  
  // Function to get all files from local storage
  export const getFilesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('studentFiles')) || [];
  };
  
  // Function to delete a file from local storage by ID
  export const deleteFileFromLocalStorage = (id) => {
    let storedFiles = JSON.parse(localStorage.getItem('studentFiles')) || [];
    storedFiles = storedFiles.filter((file) => file.id !== id);
    localStorage.setItem('studentFiles', JSON.stringify(storedFiles));
  };
  