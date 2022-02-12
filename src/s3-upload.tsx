import { s3 } from './env/env';
import ReactS3Client from 'react-aws-s3-typescript';
import { v4 as uuidv4 } from 'uuid';

const config = {
  bucketName: s3.S3_BUCKET,
  region: s3.REGION,
  accessKeyId: s3.ACCESS_KEY,
  secretAccessKey: s3.SECRET_ACCESS_KEY,
};

export const handleUpload = async (file: any) => {
  const s3 = new ReactS3Client(config);
  try {
    let some = await s3.uploadFile(file, uuidv4());
    if(some.status === 204){
        console.log('done')
    }
  } catch (exception) {
    console.log(exception);
  }
};
