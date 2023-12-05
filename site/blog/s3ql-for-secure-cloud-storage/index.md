---
date_created: '2023-10-05'
date_updated: '2023-10-05'
description: S3QL can 
layout: layouts/base.njk
tags:
  - s3
  - s3ql
  - encryption
title: Using S3QL for secure cloud storage
---

# {{ title }}
_date created: {{ date_created }}_ \
_last updated: {{ date_updated }}_


&nbsp;
## Introduction 
S3QL is an open-source file system that allows you to securly store data on cloud storage providers such as Amazon S3, Google Cloud Storage, and others. It is designed to provide a reliable and efficient way to access and store data on these cloud platforms while offering features like compression, client-side encryption, and data deduplication. S3QL is particularly useful for creating scalable and cost-effective online archival systems that take advantage of cloud storage infrastructure.


&nbsp;
## Prequisites
S3QL must be ran on Linux. Windows and OS-X are not technically supported.

These instructions are specifically for Ubuntu 22.04 LTS. Commands may differ depending on your OS and CPU.


&nbsp;
## Installation


&nbsp;
## Mount on startup


&nbsp;
## Useful commands


fsck.s3ql --authfile authfile.txt s3://us-east-2/cf-prod-emulation

&nbsp;
## Backups


&nbsp;
## Unmounting



https://www.rath.org/s3ql-docs/manual.pdf