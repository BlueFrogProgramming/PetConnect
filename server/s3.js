import aws from 'aws-sdk'

const region = "eu-west-2"
const bucketName = "amplify-petconnect-dev-d1727-deployment"
const accessKeyId = ""
const secretAccessKey = ""

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: '4'
})