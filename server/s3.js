import aws from 'aws-sdk'

const region = "eu-west-2"
const bucketName = "amplify-petconnect-dev-d1727-deployment"
const accessKeyId = "AKIA2HVQ47W3CSN4QODK"
const secretAccessKey = "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"

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: '4'
})