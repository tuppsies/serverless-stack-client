const config = {
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-upload-serverless-stack-sample-app",
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://ank8i3lqr9.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_xellsmkth",
      APP_CLIENT_ID: "3093b58k2q72kk1tos42uh9soc",
      IDENTITY_POOL_ID: "us-east-1:969ffb88-b804-466f-9cc7-8e5fc433897e",
    },
  };
  
  export default config;