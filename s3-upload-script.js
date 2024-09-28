require("dotenv").config();
const AWS = require("aws-sdk");
const fs = require("fs");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3({ apiVersion: "2007-03-01" });

const filePath = "swagger.json";
const bucketName = process.env.S3_BUCKET_NAME;

async function uploadFile() {
  try {
    const fileContent = await fs.promises.readFile(filePath);

    const params = {
      Bucket: bucketName,
      Key: "swagger.json",
      Body: fileContent,
    };

    const data = await s3.upload(params).promise();
    console.log(`File uploaded successfully. ${data.Location}`);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("Error: File not found");
    } else if (err.code === "NoSuchBucket") {
      console.error("Error: The specified bucket does not exist");
    } else if (err.code === "AccessDenied") {
      console.error("Error: Access denied. Check your IAM permissions");
    } else if (err.code === "NetworkingError") {
      console.error("Error: Network issue. Check your internet connection");
    } else {
      console.error("Error uploading file:", err);
    }
  }
}

uploadFile();
