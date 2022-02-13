import { s3 } from './env/env';

export const config = {
  bucketName: s3.S3_BUCKET,
  region: s3.REGION,
  accessKeyId: s3.ACCESS_KEY,
  secretAccessKey: s3.SECRET_ACCESS_KEY,
};

