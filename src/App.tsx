import React from 'react';
import 'antd/dist/antd.css';
import { Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { handleUpload } from './s3-upload';

function App() {

  const props : any = {
    listType: 'picture',
    async previewFile (file : any) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      await handleUpload(file)
      .then((res : any) => console.log(res))
      .catch((err : any) => console.log(err))
    },
  };
  return <div className='App'>
      <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
  </div>;
}

export default App;
