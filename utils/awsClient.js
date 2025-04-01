import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

export const client = new DynamoDBClient({ 
    region: "us-west-2",
    credentials: {
    accessKeyId:"AKIATB3PVZXMV5776SPW",
    secretAccessKey:"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"
    }



});