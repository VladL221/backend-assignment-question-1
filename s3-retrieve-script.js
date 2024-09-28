require("dotenv").config();
const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3({ apiVersion: "2006-03-01" });

const bucketName = process.env.S3_BUCKET_NAME;
const fileName = "swagger.json";

async function retrieveFile() {
  const params = {
    Bucket: bucketName,
    Key: fileName,
  };
  try {
    const data = await s3.getObject(params).promise();
    const fileContent = JSON.parse(data.Body.toString("utf-8"));
    console.log("File content:", fileContent);
  } catch (err) {
    if (err.code === "NoSuchKey") {
      console.error("Error: The specified file does not exist in the bucket");
    } else if (err.code === "NoSuchBucket") {
      console.error("Error: The specified bucket does not exist");
    } else if (err.code === "AccessDenied") {
      console.error("Error: Access denied. Check your IAM permissions");
    } else if (err.code === "NetworkingError") {
      console.error("Error: Network issue. Check your internet connection");
    } else {
      console.error("Error retrieving file:", err);
    }
  }
}

retrieveFile();
