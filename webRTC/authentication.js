async function getUserCredentials(formValues) {

    // cognito identity pool --> unauthorized access
    const IDENTITY_POOL_ID = "Your identity pool id";
    AWS.config.region = formValues.region;
    AWS.config.credentials = await new AWS.CognitoIdentityCredentials({IdentityPoolId: IDENTITY_POOL_ID,
        RoleArn: 'unauthenticated users assume role ARN'});
  }