import React from 'react';
const fs = require('fs');

const DownloadButton = (props) => {

  return (  
      <button onClick={() => downloadImage(props.storedImageUri, props.path)} >
        <i className=" fa fa-download" aria-hidden="true"></i>
      </button>
  );
  }
const downloadImage =(async (url,path)=> {
    console.log('Download Startd',url,path,);
  const res = await fetch(url);
  res.header('Access-Control-Allow-Origin', '*');
  const fileStream = fs.createWriteStream(path);
  await new Promise((resolve, reject) => {
      res.body.pipe(fileStream);
      res.body.on("error", (err) => {
        console.log('Err',err);
        reject(err);
      });
      fileStream.on("finish", function() {
        resolve();
      });
    });
    console.log('Download Done');
  });
 
export default DownloadButton;