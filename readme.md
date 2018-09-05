# kinesis-lambda

Simple kinesis serverless example

## Set up

Create the kinesis stack

```console
aws cloudformation create-stack --stack-name k1 --template-body file://k1.yml
```

Deploy the lambda


```console
sls deploy --aws-profile <profile>
```

Write a record to the stream

```console
aws kinesis put-record --stream-name K1Stream --data 'all work and no play makes jack a dull boy' --partition-key foo
```

View the function log to verify the processing of the record

```console
sls logs --function hello --aws-profile ds
START RequestId: 8ae8d4ee-6500-47c6-a714-e50dec8482b9 Version: $LATEST
2018-09-05 13:10:09.967 (-07:00)	8ae8d4ee-6500-47c6-a714-e50dec8482b9	doIt called with payload {"Records":[{"kinesis":{"kinesisSchemaVersion":"1.0","partitionKey":"foo","sequenceNumber":"49587981361615891374515510864421257312231838989840023554","data":"YWxsIHdvcmsgYW5kIG5vIHBsYXkgbWFrZXMgamFjayBhIGR1bGwgYm95","approximateArrivalTimestamp":1536178207.753},"eventSource":"aws:kinesis","eventVersion":"1.0","eventID":"shardId-000000000000:49587981361615891374515510864421257312231838989840023554","eventName":"aws:kinesis:record","invokeIdentityArn":"arn:aws:iam::427848627088:role/k1-dev-us-east-1-lambdaRole","awsRegion":"us-east-1","eventSourceARN":"arn:aws:kinesis:us-east-1:nnnnnnnnnnnn:stream/K1Stream"}]}
END RequestId: 8ae8d4ee-6500-47c6-a714-e50dec8482b9
REPORT RequestId: 8ae8d4ee-6500-47c6-a714-e50dec8482b9	Duration: 16.04 ms	Billed Duration: 100 ms 	Memory Size: 1024 MB	Max Memory Used: 45 MB	
```

