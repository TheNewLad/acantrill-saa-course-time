export interface Section {
    title: string,
    lectures: Lecture[]
};

interface Lecture {
    name: string,
    done: boolean
};

const sections: Section[] = [
    {
        "title": "INTRODUCTION & SCENARIO",
        "lectures": [
            {
                "name": "Public Introduction (3:48)",
                "done": false
            },
            {
                "name": "Finding and Using the Course Resources (12:48)",
                "done": false
            },
            {
                "name": "Site tools and features (8:35)",
                "done": false
            },
            {
                "name": "AWS Exams (17:32)",
                "done": false
            },
            {
                "name": "Scenario - Animals4life (13:40)",
                "done": false
            },
            {
                "name": "Connect with other students and your instructor (4:06)",
                "done": false
            },
            {
                "name": "Course Upgrades (if you ever want to upgrade)",
                "done": false
            }
        ]
    },
    {
        "title": "Course Fundamentals and AWS Accounts",
        "lectures": [
            {
                "name": "[Updated 202010] AWS Accounts - The basics (11:33)",
                "done": false
            },
            {
                "name": "[Updated 202010] [DEMO] Creating an AWS Account (12:57)",
                "done": false
            },
            {
                "name": "Multi-factor Authentication (MFA) (8:25)",
                "done": false
            },
            {
                "name": "[Updated 202010] [DEMO] Securing An AWS Account (8:05)",
                "done": false
            },
            {
                "name": "[Updated 202010] [DEMO] Creating Billing Alerts (14:05)",
                "done": false
            },
            {
                "name": "[Updated 202010] [DOITYOURSELF] Creating the Production Account (4:52)",
                "done": false
            },
            {
                "name": "[Updated 202010] Identity and Access Management (IAM) Basics (13:01)",
                "done": false
            },
            {
                "name": "[Updated 202010] [DEMO] Adding an IAM Admin User - PART1 - GENERAL ACCOUNT (11:45)",
                "done": false
            },
            {
                "name": "[Updated 202010] [DEMO] Adding an IAM Admin User - PART2 - PRODUCTION ACCOUNT (6:33)",
                "done": false
            },
            {
                "name": "[Updated 202010] IAM Access Keys (7:32)",
                "done": false
            },
            {
                "name": "[Updated 202010] [DEMO] Creating Access keys and setting up AWS CLI v2 tools (17:24)",
                "done": false
            }
        ]
    },
    {
        "title": "Cloud Computing Fundamentals",
        "lectures": [
            {
                "name": "Cloud Computing - what is it...really (15:35)",
                "done": false
            },
            {
                "name": "Public vs Private vs Multi vs Hybrid Cloud (8:51)",
                "done": false
            },
            {
                "name": "Cloud Service Models (11:32)",
                "done": false
            }
        ]
    },
    {
        "title": "Tech Fundamentals [KEEP CHECKING - LESSONS ADDED AS NEEDED]",
        "lectures": [
            {
                "name": "YAML101 - YAML AINT MARKUP LANGUAGE (9:55)",
                "done": false
            },
            {
                "name": "JSON101 - JavaScript Object Notation (7:32)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 0 - INTRO (5:00)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 1 - PHYSICAL (10:02)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 2 - Data Link - Part 1 (8:47)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 2 - Data Link - Part 2 (14:24)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 3 - Network - Part 1 (12:12)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 3 - Network - Part 2 (19:13)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 3 - Network - Part 3 (15:21)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 4 - Transport - Part 1 (15:39)",
                "done": false
            },
            {
                "name": "Network Starter Pack - 4 - Transport - Part 2 (17:08)",
                "done": false
            },
            {
                "name": "Network Starter Pack - EXTRA - Network Address Translation - PART1 (11:00)",
                "done": false
            },
            {
                "name": "Network Starter Pack - EXTRA - Network Address Translation - PART2 (9:38)",
                "done": false
            },
            {
                "name": "Network Starter Pack - EXTRA - Subnetting - PART1 (14:35)",
                "done": false
            },
            {
                "name": "Network Starter Pack - EXTRA - Subnetting - PART2 (10:33)",
                "done": false
            },
            {
                "name": "Network Starter Pack - EXTRA - Distributed Denial of Service (DDOS) (14:38)",
                "done": false
            },
            {
                "name": "Secure Sockets Layer (SSL) and Transport Layer Security (TLS) (11:41)",
                "done": false
            }
        ]
    },
    {
        "title": "AWS Fundamentals",
        "lectures": [
            {
                "name": "AWS Public vs Private Services (8:48)",
                "done": false
            },
            {
                "name": "[UPDATE202010] AWS Global Infrastructure (14:53)",
                "done": false
            },
            {
                "name": "[UPDATE202010] AWS Default Virtual Private Cloud (VPC) (15:19)",
                "done": false
            },
            {
                "name": "[UPDATE202010] Elastic Compute Cloud (EC2) Basics (14:46)",
                "done": false
            },
            {
                "name": "[UPDATE202011] [DEMO] My First EC2 Instance (18:24)",
                "done": false
            },
            {
                "name": "Simple Storage Service (S3) Basics (15:58)",
                "done": false
            },
            {
                "name": "[UPDATE202011] [DEMO] My First S3 Bucket (18:17)",
                "done": false
            },
            {
                "name": "CloudFormation (CFN) Basics (12:28)",
                "done": false
            },
            {
                "name": "[UPDATE202010] [DEMO] Simple Automation With CFN (17:12)",
                "done": false
            },
            {
                "name": "CloudWatch (CW) Basics (13:45)",
                "done": false
            },
            {
                "name": "[UPDATED202102] [Demo] Simple Monitoring with Cloudwatch (14:53)",
                "done": false
            },
            {
                "name": "Shared Responsibility Model (6:24)",
                "done": false
            },
            {
                "name": "High-Availability vs Fault-Tolerance vs Disaster Recovery (17:21)",
                "done": false
            },
            {
                "name": "Domain Name System (DNS) Fundamentals - PART1 (11:40)",
                "done": false
            },
            {
                "name": "Domain Name System (DNS) Fundamentals - PART2 (10:19)",
                "done": false
            },
            {
                "name": "Route53 (R53) Fundamentals (6:29)",
                "done": false
            },
            {
                "name": "[DEMO] Registering a Domain (8:50)",
                "done": false
            },
            {
                "name": "DNS Record Types (13:25)",
                "done": false
            },
            {
                "name": "Fundamentals Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "IAM, ACCOUNTS AND AWS ORGANISATIONS",
        "lectures": [
            {
                "name": "IAM Identity Policies (15:54)",
                "done": false
            },
            {
                "name": "IAM Users and ARNs (14:45)",
                "done": false
            },
            {
                "name": "[DEMO] Simple Identity Permissions in AWS (19:09)",
                "done": false
            },
            {
                "name": "IAM Groups (8:29)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Permissions control using IAM Groups (8:51)",
                "done": false
            },
            {
                "name": "IAM Roles - The Tech (8:42)",
                "done": false
            },
            {
                "name": "When to use IAM Roles (15:45)",
                "done": false
            },
            {
                "name": "[UPDATE202010] AWS Organizations (12:56)",
                "done": false
            },
            {
                "name": "[UPDATE202010] [DEMO] AWS Organizations - PART1 (7:16)",
                "done": false
            },
            {
                "name": "[UPDATE202010] [DEMO] AWS Organizations - PART2 (14:21)",
                "done": false
            },
            {
                "name": "[UPDATE202010] Service Control Policies (SCPs) (12:43)",
                "done": false
            },
            {
                "name": "[UPDATE202010] [DEMO] Using Service Control Policies (16:22)",
                "done": false
            },
            {
                "name": "CloudWatch Logs (7:16)",
                "done": false
            },
            {
                "name": "CloudTrail (13:35)",
                "done": false
            },
            {
                "name": "[UPDATED][DEMO] Implementing an Organizational Trail (18:02)",
                "done": false
            },
            {
                "name": "IAM & Orgs Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "SIMPLE STORAGE SERVICE (S3)",
        "lectures": [
            {
                "name": "S3 Security (Resource Policies & ACLs) (18:29)",
                "done": false
            },
            {
                "name": "S3 Static Hosting (10:36)",
                "done": false
            },
            {
                "name": "[UPDATE20201101] [Demo] Creating a static website with S3 - PART1 (10:00)",
                "done": false
            },
            {
                "name": "[UPDATE20201101] [Demo] Creating a static website with S3 - PART2 (10:30)",
                "done": false
            },
            {
                "name": "Object Versioning & MFA Delete (8:12)",
                "done": false
            },
            {
                "name": "[UPDATE20201101] [DEMO] - S3 Versioning (15:48)",
                "done": false
            },
            {
                "name": "S3 Performance Optimization (11:42)",
                "done": false
            },
            {
                "name": "[DEMO] - S3 Performance (5:40)",
                "done": false
            },
            {
                "name": "Encryption 101 - Part 1 (14:13)",
                "done": false
            },
            {
                "name": "Encryption 101 - Part 2 (7:10)",
                "done": false
            },
            {
                "name": "Key Management Service (KMS) (18:30)",
                "done": false
            },
            {
                "name": "[DEMO] KMS - Encrypting the battleplans with KMS (13:58)",
                "done": false
            },
            {
                "name": "Object Encryption - PART1 (10:26)",
                "done": false
            },
            {
                "name": "Object Encryption - PART2 (11:45)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Object Encryption (18:32)",
                "done": false
            },
            {
                "name": "[NEW] S3 Object Storage Classes - PART1 (9:23)",
                "done": false
            },
            {
                "name": "[UPDATE20201110] S3 Object Storage Classes - PART2 (10:02)",
                "done": false
            },
            {
                "name": "[NEW] S3 Lifecycle Configuration (13:05)",
                "done": false
            },
            {
                "name": "S3 Replication (14:05)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Cross-Region Replication of an S3 Static Website (19:20)",
                "done": false
            },
            {
                "name": "S3 PreSigned URLs (12:17)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Creating and using PresignedURLs (19:12)",
                "done": false
            },
            {
                "name": "S3 Select and Glacier Select (5:32)",
                "done": false
            },
            {
                "name": "S3 Events (4:32)",
                "done": false
            },
            {
                "name": "S3 Access Logs (3:05)",
                "done": false
            },
            {
                "name": "S3 Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "VIRTUAL PRIVATE CLOUD (VPC) BASICS",
        "lectures": [
            {
                "name": "Networking Refresher - PART1 (14:42)",
                "done": false
            },
            {
                "name": "Networking Refresher - PART2 (11:19)",
                "done": false
            },
            {
                "name": "VPC Sizing and Structure - PART1 (11:48)",
                "done": false
            },
            {
                "name": "VPC Sizing and Structure - PART2 (11:16)",
                "done": false
            },
            {
                "name": "Custom VPCs (14:31)",
                "done": false
            },
            {
                "name": "VPC Subnets (10:42)",
                "done": false
            },
            {
                "name": "[UPDATE202011][DEMO] Implement multi-tier VPC subnets (20:34)",
                "done": false
            },
            {
                "name": "VPC Routing, Internet Gateway & Bastion Hosts (17:36)",
                "done": false
            },
            {
                "name": "[UPDATE202011][DEMO] Configuring A4l public subnets and Jumpbox - PART1 (14:09)",
                "done": false
            },
            {
                "name": "[UPDATE202011][DEMO] Configuring A4l public subnets and Jumpbox - PART2 (12:24)",
                "done": false
            },
            {
                "name": "Network Access Control Lists (NACLs) (13:13)",
                "done": false
            },
            {
                "name": "Security Groups (SG) (10:04)",
                "done": false
            },
            {
                "name": "Network Address Translation (NAT) & NAT Gateway - PART1 (13:46)",
                "done": false
            },
            {
                "name": "Network Address Translation (NAT) & NAT Gateway - PART2 (11:08)",
                "done": false
            },
            {
                "name": "[UPDATE202011][DEMO] [SETUP] Implementing private internet access using NAT Gateways - PART1 (20:51)",
                "done": false
            },
            {
                "name": "[UPDATE202011][DEMO] Implementing private internet access using NAT Gateways - PART2 (14:30)",
                "done": false
            },
            {
                "name": "VPC Basics Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "ELASTIC COMPUTE CLOUD (EC2) BASICS",
        "lectures": [
            {
                "name": "Virtualization 101 (12:27)",
                "done": false
            },
            {
                "name": "EC2 Architecture and Resilience (12:36)",
                "done": false
            },
            {
                "name": "EC2 Instance Types - PART1 (11:52)",
                "done": false
            },
            {
                "name": "EC2 Instance Types - PART2 (8:13)",
                "done": false
            },
            {
                "name": "[DEMO] EC2 SSH vs EC2 Instance Connect (18:41)",
                "done": false
            },
            {
                "name": "Storage Refresher (14:16)",
                "done": false
            },
            {
                "name": "[UPDATE202101] Elastic Block Store (EBS) Service Architecture (8:43)",
                "done": false
            },
            {
                "name": "[UPDATE202101] EBS Volume Types - General Purpose (9:23)",
                "done": false
            },
            {
                "name": "[UPDATE202103] EBS Volume Types - Provisioned IOPS (6:15)",
                "done": false
            },
            {
                "name": "[UPDATE202101] EBS Volume Types - HDD-Based (4:32)",
                "done": false
            },
            {
                "name": "[UPDATE202101] Instance Store Volumes - Architecture (9:00)",
                "done": false
            },
            {
                "name": "[UPDATE202102] Choosing between the EC2 Instance Store and EBS (8:49)",
                "done": false
            },
            {
                "name": "Snapshots, Restore & Fast Snapshot Restore (FSR) (10:55)",
                "done": false
            },
            {
                "name": "[DEMO] EBS, Snapshots and Instance Store Volumes - PART1 (16:36)",
                "done": false
            },
            {
                "name": "[DEMO] EBS, Snapshots and Instance Store Volumes - PART2 (15:49)",
                "done": false
            },
            {
                "name": "[UPDATE202102] [Theory] & [DEMO] EBS Encryption (16:41)",
                "done": false
            },
            {
                "name": "Network Interfaces, Instance IPs and DNS (15:58)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Manual Install of Wordpress on EC2 - PART1 (14:43)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Manual Install of Wordpress on EC2 - PART2 (12:36)",
                "done": false
            },
            {
                "name": "Amazon Machine Images (AMI) (13:58)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Creating an Animals4life AMI - PART1 (11:03)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Creating an Animals4life AMI - PART2 (11:12)",
                "done": false
            },
            {
                "name": "Instance Billing Models (13:25)",
                "done": false
            },
            {
                "name": "[UPDATE202101] Instance Status Checks & Auto Recovery (8:01)",
                "done": false
            },
            {
                "name": "[DEMO] Shutdown, Terminate & Termination Protection (5:40)",
                "done": false
            },
            {
                "name": "Horizontal & Vertical Scaling (11:23)",
                "done": false
            },
            {
                "name": "[UPDATE202101] Instance Metadata [THEORY & DEMO] (15:44)",
                "done": false
            },
            {
                "name": "EC2 Basics Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "CONTAINERS & ECS",
        "lectures": [
            {
                "name": "Introduction to Containers (17:13)",
                "done": false
            },
            {
                "name": "[DEMO] Creating 'container of cats' Docker Image (13:46)",
                "done": false
            },
            {
                "name": "ECS - Concepts (10:25)",
                "done": false
            },
            {
                "name": "ECS - Cluster Mode (13:09)",
                "done": false
            },
            {
                "name": "[DEMO] - Deploying 'container of cats' using Fargate (16:30)",
                "done": false
            },
            {
                "name": "Containers Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "ADVANCED EC2",
        "lectures": [
            {
                "name": "Bootstrapping EC2 using User Data (10:34)",
                "done": false
            },
            {
                "name": "[DEMO] Bootstrapping Wordpress Directly and with CFN (19:20)",
                "done": false
            },
            {
                "name": "Enhanced Bootstrapping with CFN-INIT (11:52)",
                "done": false
            },
            {
                "name": "[DEMO] CFN-INIT and CFN Creation Policies (13:50)",
                "done": false
            },
            {
                "name": "EC2 Instance Roles & Profile (4:43)",
                "done": false
            },
            {
                "name": "[202101UPDATE] [DEMO] Providing permissions and credentials to EC2 using Instance Roles (13:45)",
                "done": false
            },
            {
                "name": "SSM Parameter Store (6:16)",
                "done": false
            },
            {
                "name": "[202102UPDATE] [DEMO] Parameter Store (17:00)",
                "done": false
            },
            {
                "name": "System and Application Logging on EC2 (6:15)",
                "done": false
            },
            {
                "name": "[202101UPDATE] [DEMO] Logging and Metrics with CW Agent-PART1 (12:12)",
                "done": false
            },
            {
                "name": "[202101UPDATE] [DEMO] Logging and Metrics with CW Agent-PART2 (9:18)",
                "done": false
            },
            {
                "name": "EC2 Placement Groups - PART1 (11:05)",
                "done": false
            },
            {
                "name": "EC2 Placement Groups - PART2 (11:02)",
                "done": false
            },
            {
                "name": "Dedicated Hosts (8:56)",
                "done": false
            },
            {
                "name": "Enhanced Networking & EBS Optimized (6:57)",
                "done": false
            },
            {
                "name": "Advanced EC2 Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "Route 53 - Global DNS",
        "lectures": [
            {
                "name": "[202012UPDATE] R53 Public Hosted Zones (6:28)",
                "done": false
            },
            {
                "name": "[202012UPDATE] R53 Private Hosted Zones (5:10)",
                "done": false
            },
            {
                "name": "[202012UPDATE] CNAME vs R53 Alias (5:19)",
                "done": false
            },
            {
                "name": "[202012UPDATE] Simple Routing (2:17)",
                "done": false
            },
            {
                "name": "[202012UPDATE] R53 Health Checks (12:41)",
                "done": false
            },
            {
                "name": "[202012UPDATE] Failover Routing (1:53)",
                "done": false
            },
            {
                "name": "[202102UPDATE] [DEMO] Using R53 and Failover Routing-PART1 (16:31)",
                "done": false
            },
            {
                "name": "[202102UPDATE] [DEMO] Using R53 and Failover Routing-PART2 (6:28)",
                "done": false
            },
            {
                "name": "[202012UPDATE] Multi Value Routing (2:32)",
                "done": false
            },
            {
                "name": "[202012UPDATE] Weighted Routing (3:24)",
                "done": false
            },
            {
                "name": "[202012UPDATE] Latency Routing (2:44)",
                "done": false
            },
            {
                "name": "[202012UPDATE] Geolocation Routing (5:02)",
                "done": false
            },
            {
                "name": "[202012UPDATE] Geoproximity (4:50)",
                "done": false
            },
            {
                "name": "[202012UPDATE] R53 Interoperability (11:50)",
                "done": false
            },
            {
                "name": "Route53 Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "Relational Database Service (RDS)",
        "lectures": [
            {
                "name": "Database Refresher - PART1 (8:51)",
                "done": false
            },
            {
                "name": "Database Refresher - PART2 (14:45)",
                "done": false
            },
            {
                "name": "[UPDATE202101] ACID vs BASE (11:02)",
                "done": false
            },
            {
                "name": "Databases on EC2 (13:08)",
                "done": false
            },
            {
                "name": "[202101UPDATE] [DEMO] Migrating the Wordpress Monolith to a dedicated EC2 DB (18:32)",
                "done": false
            },
            {
                "name": "Relational Database Service (RDS) Architecture (10:36)",
                "done": false
            },
            {
                "name": "[202101UPDATE][DEMO] Migrating MariaDB database into RDS - PART1 (19:52)",
                "done": false
            },
            {
                "name": "[202101UPDATE][DEMO] Migrating MariaDB database into RDS - PART2 (13:11)",
                "done": false
            },
            {
                "name": "RDS High-Availability (Multi AZ) (9:37)",
                "done": false
            },
            {
                "name": "RDS Automatic Backup, RDS Snapshots and Restore (13:41)",
                "done": false
            },
            {
                "name": "RDS Read-Replicas (8:10)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] MultiAZ & Using a snapshot to recover from data corruption - PART1 (15:20)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] MultiAZ & Using a snapshot to recover from data corruption - PART2 (16:20)",
                "done": false
            },
            {
                "name": "RDS Data Security (PRO lesson - Topic features in SAA-C02] (7:03)",
                "done": false
            },
            {
                "name": "[202103UPDATE] Aurora Architecture (13:44)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Migrating Wordpress onto Aurora - PART1 (11:37)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Migrating Wordpress onto Aurora - PART2 (13:01)",
                "done": false
            },
            {
                "name": "Aurora Serverless (10:21)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Migrating to Aurora Serverless (14:47)",
                "done": false
            },
            {
                "name": "Aurora Global Database (5:08)",
                "done": false
            },
            {
                "name": "Multi-master writes (7:51)",
                "done": false
            },
            {
                "name": "Database Migration Service (DMS) (9:37)",
                "done": false
            },
            {
                "name": "RDS Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "NETWORK STORAGE",
        "lectures": [
            {
                "name": "EFS Architecture (9:13)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] Implementing EFS - PART1 (9:05)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] Implementing EFS - PART2 (13:06)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Using EFS with Wordpress (17:29)",
                "done": false
            },
            {
                "name": "Network Storage Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "HA & SCALING",
        "lectures": [
            {
                "name": "Load Balancing Fundamentals (9:44)",
                "done": false
            },
            {
                "name": "Application Load balancing (ALB) (16:05)",
                "done": false
            },
            {
                "name": "Launch Configuration and Templates (4:00)",
                "done": false
            },
            {
                "name": "Auto-Scaling Groups (16:32)",
                "done": false
            },
            {
                "name": "[DEMO] Elastic Cat Blog — Architecture (2:23)",
                "done": false
            },
            {
                "name": "[DEMO] Elastic Cat Blog — PART 1 — Launch Template (19:48)",
                "done": false
            },
            {
                "name": "[DEMO] Elastic Cat Blog — PART 2 — Autoscaling Group (19:57)",
                "done": false
            },
            {
                "name": "[DEMO] Elastic Cat Blog — PART 3 — Load Balancer (19:59)",
                "done": false
            },
            {
                "name": "Network Load Balancing (NLB) (6:25)",
                "done": false
            },
            {
                "name": "SSL Offload & Session Stickiness (12:11)",
                "done": false
            },
            {
                "name": "HA and Scaling Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "SERVERLESS AND APPLICATION SERVICES",
        "lectures": [
            {
                "name": "Architecture Evolution - PART 1 - Monolithic and Tiered (8:52)",
                "done": false
            },
            {
                "name": "Architecture Evolution - PART 2 - Queue Based, Microservice & Event-Driven (13:09)",
                "done": false
            },
            {
                "name": "AWS Lambda (14:59)",
                "done": false
            },
            {
                "name": "CloudWatchEvents and EventBridge (7:51)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Automated EC2 Start and Stop and Protect using Lambda and Events - PART1 - Manual Invocation (14:22)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Automated EC2 Start and Stop and Protect using Lambda and Events - PART2 - Event-Driven Invocation (18:00)",
                "done": false
            },
            {
                "name": "API Gateway (10:11)",
                "done": false
            },
            {
                "name": "Serverless Architecture (12:55)",
                "done": false
            },
            {
                "name": "Simple Notification Service (7:59)",
                "done": false
            },
            {
                "name": "Step Functions (16:33)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] - Pet-Cuddle-o-Tron - Serverless Application - PART1 (4:39)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] - Pet-Cuddle-o-Tron - Serverless Application - PART2 (8:04)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] - Pet-Cuddle-o-Tron - Serverless Application - PART3 (15:25)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] - Pet-Cuddle-o-Tron - Serverless Application - PART4 (14:11)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] - Pet-Cuddle-o-Tron - Serverless Application - PART5 (14:18)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] - Pet-Cuddle-o-Tron - Serverless Application - PART6 (2:44)",
                "done": false
            },
            {
                "name": "Simple Queue Service (15:46)",
                "done": false
            },
            {
                "name": "Kinesis & Kinesis Firehose (10:42)",
                "done": false
            },
            {
                "name": "Serverless and App Services Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "GLOBAL CONTENT DELIVERY AND OPTIMIZATION",
        "lectures": [
            {
                "name": "CloudFront Architecture Basics (15:49)",
                "done": false
            },
            {
                "name": "ACM (6:37)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Adding a CDN to a static Website using S3 and CloudFront - Part 1 (16:04)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Adding a CDN to a static Website using S3 and CloudFront - Part 2 (12:28)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Adding a Custom Domain and HTTPS to a cloudFront distribution using ACM (11:22)",
                "done": false
            },
            {
                "name": "Securing CF and S3 using OAI (4:22)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Using OAI (11:46)",
                "done": false
            },
            {
                "name": "[202007Update][New] Lambda@Edge (8:03)",
                "done": false
            },
            {
                "name": "Global Accelerator (10:37)",
                "done": false
            },
            {
                "name": "CDN and Optimisation Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "ADVANCED VPC Networking",
        "lectures": [
            {
                "name": "VPC Flow Logs (11:16)",
                "done": false
            },
            {
                "name": "Egress-Only Internet gateway (6:46)",
                "done": false
            },
            {
                "name": "VPC Endpoints (Gateway) (11:41)",
                "done": false
            },
            {
                "name": "VPC Endpoints (Interface) (11:44)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Accessing S3 Using a Gateway Endpoint (Part1/3) (11:55)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Using SNS from a private VPC using Interface Endpoints (Part2/3) (11:46)",
                "done": false
            },
            {
                "name": "[UPDATE202101] [DEMO] Implementing an Egress-Only Internet Gateway (Part3/3) (8:12)",
                "done": false
            },
            {
                "name": "VPC Peering (9:04)",
                "done": false
            },
            {
                "name": "[UPDATE202101][DEMO] VPC Peering (20:56)",
                "done": false
            },
            {
                "name": "Advanced VPC Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "HYBRID ENVIRONMENTS AND MIGRATION",
        "lectures": [
            {
                "name": "[Advanced] [Optional] Border Gateway Protocol 101 (17:29)",
                "done": false
            },
            {
                "name": "AWS Site-to-Site VPN (18:54)",
                "done": false
            },
            {
                "name": "[DEMO] VPC and On-premises VPN - PART1 (10:45)",
                "done": false
            },
            {
                "name": "[DEMO] VPC and On-premises VPN - PART2 (15:03)",
                "done": false
            },
            {
                "name": "Direct Connect (16:13)",
                "done": false
            },
            {
                "name": "Direct Connect Resilience (14:07)",
                "done": false
            },
            {
                "name": "Transit Gateway (10:59)",
                "done": false
            },
            {
                "name": "[DEMO] Implementing Advanced Hybrid Networking using Transit gateway - PART1 (17:32)",
                "done": false
            },
            {
                "name": "[DEMO] Implementing Advanced Hybrid Networking using Transit gateway - PART2 (15:56)",
                "done": false
            },
            {
                "name": "Storage gateway (16:50)",
                "done": false
            },
            {
                "name": "Snowball / Edge / Snowmobile (10:47)",
                "done": false
            },
            {
                "name": "Directory Service (15:50)",
                "done": false
            },
            {
                "name": "DataSync (9:27)",
                "done": false
            },
            {
                "name": "FSx for Windows Servers (12:02)",
                "done": false
            },
            {
                "name": "[202007Update] [NEW] FSx For Lustre (14:19)",
                "done": false
            },
            {
                "name": "Hybrid and Migration Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "SECURITY, DEPLOYMENT & OPERATIONS",
        "lectures": [
            {
                "name": "AWS Secrets Manager (7:56)",
                "done": false
            },
            {
                "name": "AWS WAF & Shield (13:09)",
                "done": false
            },
            {
                "name": "CloudHSM (15:12)",
                "done": false
            },
            {
                "name": "AWS Config (6:31)",
                "done": false
            },
            {
                "name": "[UPDATE202101] Amazon Macie (12:04)",
                "done": false
            },
            {
                "name": "Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "NOSQL Databases & DynamoDB",
        "lectures": [
            {
                "name": "DynamoDB - Architecture (11:33)",
                "done": false
            },
            {
                "name": "DynamoDB - Operations, Consistency and Performance-PART1 (13:06)",
                "done": false
            },
            {
                "name": "DynamoDB - Operations, Consistency and Performance-PART2 (11:41)",
                "done": false
            },
            {
                "name": "DynamoDB - Streams & Lambda Triggers (9:09)",
                "done": false
            },
            {
                "name": "DynamoDB Local and Global Secondary Indexes (13:08)",
                "done": false
            },
            {
                "name": "DynamoDB - Global Tables (5:20)",
                "done": false
            },
            {
                "name": "DynamoDB - Accelerator (DAX) (10:58)",
                "done": false
            },
            {
                "name": "Amazon Athena (6:51)",
                "done": false
            },
            {
                "name": "[202102UPDATE] [DEMO] Athena Demo - PART1 (13:50)",
                "done": false
            },
            {
                "name": "[202102UPDATE] [DEMO] Athena Demo - PART2 (11:21)",
                "done": false
            },
            {
                "name": "[202007Update] [NEW] Elasticache (12:51)",
                "done": false
            },
            {
                "name": "[202009Update] Redshift Architecture (11:32)",
                "done": false
            },
            {
                "name": "[202009Update] Redshift DR and Resilience (3:40)",
                "done": false
            },
            {
                "name": "NoSQL Section Quiz",
                "done": false
            }
        ]
    },
    {
        "title": "EXAM",
        "lectures": [
            {
                "name": "Exam Technique (13:49)",
                "done": false
            },
            {
                "name": "Question Technique - PART1 (14:47)",
                "done": false
            },
            {
                "name": "Question Technique - PART2 (9:33)",
                "done": false
            },
            {
                "name": "Practice Quiz #1",
                "done": false
            },
            {
                "name": "Practice Quiz #2",
                "done": false
            }
        ]
    },
    {
        "title": "Finishing Up",
        "lectures": [
            {
                "name": "Thanks! and a favour (3:15)",
                "done": false
            }
        ]
    }
];

export default sections;