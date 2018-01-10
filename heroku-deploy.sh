#!/bin/bash
mvn clean install
heroku deploy:jar backend/target/eureka-backend-0.0.1-SNAPSHOT.jar -a eureka-building-management
