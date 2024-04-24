import AWS from "aws-sdk";
import fs from "fs";
import os from 'os';
import path from 'path';

export async function downloadFromS3(file_key: string) {
    // Determine the temporary directory based on the current operating system
    const tmpDir = os.tmpdir();

    

    try {
        AWS.config.update({
            accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
            secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY,
        });
        const s3 = new AWS.S3({
            params: {
                Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
            },
            region: 'ap-southeast-2'
        });
        const params = {
            Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME!,
            Key: file_key,
        };

        const obj = await s3.getObject(params).promise();
        // Construct the file path using the temporary directory
        const file_name = path.join(tmpDir, `pdf-${Date.now()}.pdf`);
        fs.writeFileSync(file_name, obj.Body as Buffer);
        return file_name
    } catch (error) {
        console.log(error)
        return null
    }
}