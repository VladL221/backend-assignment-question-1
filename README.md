# S3 Upload and Retrieve Project

This project contains scripts to upload a JSON file to an AWS S3 bucket and retrieve it. It's designed to work with a specific JSON file (`swagger.json`) and uses environment variables for AWS configuration.

## Project Structure

- `s3-upload-script.js`: Script to upload `swagger.json` to S3
- `s3-retrieve-script.js`: Script to retrieve the uploaded file from S3
- `swagger.json`: The JSON file to be uploaded (not included in this repository)
- `.env`: Environment variables file (not included in this repository)

## Prerequisites

- Node.js installed on your system
- An AWS account with access to S3
- AWS CLI configured with your credentials (optional, but recommended)

## Setup

1. Clone this repository:

   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install the required dependencies:

   ```
   npm install aws-sdk dotenv
   ```

3. Create a `.env` file in the project root with the following content:

   ```
   AWS_ACCESS_KEY_ID=your_access_key_id
   AWS_SECRET_ACCESS_KEY=your_secret_access_key
   AWS_REGION=your_preferred_region
   S3_BUCKET_NAME=your_bucket_name
   ```

   Replace the placeholders with your actual AWS credentials and desired S3 bucket name.

4. Ensure you have a `swagger.json` file in the project root directory.

## Usage

### Uploading a file to S3

Run the upload script:

```
node s3-upload-script.js
```

This script will read the `swagger.json` file from the project directory and upload it to the specified S3 bucket.

### Retrieving a file from S3

Run the retrieve script:

```
node s3-retrieve-script.js
```

This script will retrieve the `swagger.json` file from the specified S3 bucket and display its contents in the console.

## Error Handling

Both scripts include error handling for common issues such as:

- File not found
- Bucket does not exist
- Access denied
- Network issues

If an error occurs, an appropriate error message will be displayed in the console.

## Important Notes

- Ensure that your AWS credentials have the necessary permissions to perform S3 operations.
- The S3 bucket specified in your `.env` file must exist before running the upload script.
- Be cautious with your AWS credentials and never commit the `.env` file to version control.

## Troubleshooting

If you encounter any issues:

1. Double-check your AWS credentials in the `.env` file.
2. Ensure the specified S3 bucket exists and you have the necessary permissions.
3. Check your internet connection.
4. Verify that the `swagger.json` file is present in the project root for the upload script.

For any persistent issues, please check the AWS S3 documentation or seek support from the AWS community.
