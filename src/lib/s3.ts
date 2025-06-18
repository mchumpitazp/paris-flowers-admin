import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
    endpoint: process.env.NEXT_PUBLIC_TIMEWEB_S3_URL,
    region: "ru-1",
    credentials: {
        accessKeyId: process.env.TIMEWEB_ACCESS_KEY as string,
        secretAccessKey: process.env.TIMEWEB_SECRET_KEY as string,
    },
    forcePathStyle: true, // required for some S3-compatible providers
});
