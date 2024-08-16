import React from 'react';
import 'antd/dist/antd.css';
import { Button, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { config } from './s3-upload';
import { v4 as uuidv4 } from 'uuid';
import ReactS3Client from 'react-aws-s3-typescript';

function App() {

  const success = (url : any) => {
    message.success({
      content: <div><span>{url}</span> <br/><a href={url} target="_blank" rel="noopener noreferrer">Here is the Link</a></div>,
      className: 'custom-class',
      style: {
        marginTop: '20vh',
      },
    });
  };

  const upload= (file: any ) => {
    const s3 = new ReactS3Client(config);

    s3.uploadFile(file.file, uuidv4())
    .then((res : any) => {
      success(res.location)
    })
    .catch((err : any) => message.error(err))
  }
  return <div className='App'>
      <Upload maxCount={1} customRequest={upload} showUploadList={false}

>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
  </div>;
}

export default App;
