// src/components/FileManager.js
import React, { useState, useEffect } from "react";
import { addFileToLocalStorage, getFilesFromLocalStorage, deleteFileFromLocalStorage } from "./localStorage"
import { CiViewList } from "react-icons/ci";

const FileManager = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const storedFiles = getFilesFromLocalStorage();
    setFiles(storedFiles);
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      addFileToLocalStorage(file);
      setFiles([...files, { id: Date.now(), name: file.name, data: URL.createObjectURL(file) }]);
      setFile(null);
    }
  };

  const handleDelete = (id) => {
    deleteFileFromLocalStorage(id);
    setFiles(files.filter((f) => f.id !== id));
  };

  return (
    <div className="file-manager">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <p>you can store files,images,videos,audios.. related to your study</p>
      <div className="file-list">
        {files.map((f) => (
          <div key={f.id} className="file-item">
            <p>{f.name}</p>
            <div className="view">
           <div className="icon"> <CiViewList /></div>
            <a href={f.data} target="_blank" rel="noopener noreferrer">
            View
            </a>
            </div>
            <div className="delete">
            <button  onClick={() => handleDelete(f.id)}>Delete</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileManager;
