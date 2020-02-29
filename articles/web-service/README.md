# Build HTTP Web Service on AWS
This is a recipe for an HTTP Web Service using AWS Fargate.

## 1. Setup
```bash
mkdir MyEcsConstruct
cd MyEcsConstruct
cdk init --language typescript
npm run build
cdk synth
npm install @aws-cdk/aws-ec2 @aws-cdk/aws-ecs @aws-cdk/aws-ecs-patterns
```

## 2. Write the Web service code
Open the file `lib/my_ecs_construct-stack.ts` with a text editor.

```javascript
import ec2 = require("@aws-cdk/aws-ec2");
import ecs = require("@aws-cdk/aws-ecs");
import ecs_patterns = require("@aws-cdk/aws-ecs-patterns");

const vpc = new ec2.Vpc(this, "MyVpc", {
	maxAzs: 3 // Default is all AZs in region
});

const cluster = new ecs.Cluster(this, "MyCluster", {
	vpc: vpc
});

// Create a load-balanced Fargate service and make it public
new ecs_patterns.ApplicationLoadBalancedFargateService(this, "MyFargateService", {
	cluster: cluster,
	taskImageOptions: { image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample") },
	publicLoadBalancer: true // Default is false
});
```

## 3. Deploy your Web service
```
npm run build
cdk deploy
```

## 4. Understand what you built
You just created a public HTTP Web Service. Under the hood it's a Fargate service running on an ECS cluster fronted by an application load balancer. Learn how to customize it [here](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-ecs-patterns.ApplicationLoadBalancedFargateService.html).

## 5. Clean up
If you want to clean all the AWS resources that you created run the following:
```
cdk destroy
```
