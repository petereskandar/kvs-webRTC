async function getUserCredentials(formValues) {

    // cognito identity pool --> unauthorized access
    const IDENTITY_POOL_ID = "eu-west-3:8b3c9480-e3fb-4d5c-90a7-055f8d73f9a5";
    AWS.config.region = formValues.region;
    AWS.config.credentials = await new AWS.CognitoIdentityCredentials({IdentityPoolId: IDENTITY_POOL_ID,
        RoleArn: 'arn:aws:iam::250950161175:role/Cognito_demoIdPoolUnauth_Role'});

/*   const urlParams = new URLSearchParams(window.location.search);
    const cognitoidentity = new AWS.CognitoIdentity({region : 'eu-west-3'})
    const IDENTITY_POOL_ID = "eu-west-3:8b3c9480-e3fb-4d5c-90a7-055f8d73f9a5";

    const providerName = `cognito-idp.eu-west-3.amazonaws.com/${IDENTITY_POOL_ID}`
    const test = new AWS.CognitoIdentityCredentials({IdentityPoolId: IDENTITY_POOL_ID});
    let response = await cognitoidentity.getId({
      IdentityPoolId: IDENTITY_POOL_ID,
      Logins: {
        'cognito-idp.eu-west-3.amazonaws.com': 'eyJraWQiOiJHaDI3dmNNelp3MUxuMjRNTWZBeEREUk51a25SRnNLUkd5d1pwN1BOUDNFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiaTdUbWEtN21OVDlZQnplU1B3UFBTUSIsInN1YiI6IjI5NTRiOTA4LTExNGYtNDFmYS05ZmJmLWM4YWE2MThjOTY0ZSIsImF1ZCI6IjQwYmVtNGgyNWg5N2dqM3RjY3N1aHZsZWc1IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjA3MDMwNzE3LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuZXUtd2VzdC0zLmFtYXpvbmF3cy5jb21cL2V1LXdlc3QtM19LeG5jajV1VDciLCJjb2duaXRvOnVzZXJuYW1lIjoicGV0ZXJfZXNrYW5kYXIiLCJleHAiOjE2MDcwMzQzMTcsImlhdCI6MTYwNzAzMDcxNywiZW1haWwiOiJwZXRlcndhZGlkMUBnbWFpbC5jb20ifQ.GTYMJx-VzWOtC6GEELSgcKChSNFzcP39VcxT6sXilBdH97nA4xCOfYRmZP0awsHYFplAHu2L--_XuDJeS_v2sSKnJamqIzhQdG0hPVfcsEUfjwiSPJFPApNWS7D9A_IldwaPXK8PH6qk6EDbdvZInM8sLGyHU4Wq9GWKCRYJiV_kJZUNOjDNTxIcx3D6rRViB2yms4n2_3BitUON-H7ANrCWs-HQZwfR2PVW6_bU2sQZhoJL9VYQi2e5CrM4WhgpvV2Y0stjIjcHFlXmjid9lJnNaytSmKZAICzPY_VRShfDih9dmphAu9NDM7kCNI2eJa2c6HzU_Kmg9DH2R6LyIQ'
      }
    }).promise()

    const identityId = response.IdentityId
    response = await cognitoidentity.getCredentialsForIdentity({
      IdentityId: identityId,
      Logins: {
        [providerName]: idToken
      }
    }).promise()

    const credentials = new AWS.Credentials(
      response.Credentials.AccessKeyId,
      response.Credentials.SecretKey,
      response.Credentials.SessionToken
    )

    return {
      identityId,
      credentials
    } */
  }