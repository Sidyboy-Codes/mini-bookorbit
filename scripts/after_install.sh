#!/bin/bash
cd /home/ec2-user/project
npm run build
sudo systemctl stop nginx

