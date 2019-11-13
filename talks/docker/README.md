# Docker Crash Course

Presentation at the [SoCal Node.js Meetup](http://www.meetup.com/SoCal-Node-JS/events/221022035)

<iframe width="640" height="360" src="https://www.youtube.com/embed/BgDhf50Ya2s?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>


(Click on the image above to watch the video of the talk)

## Description

Docker is everywhere but nobody knows what to do with it.
The goal of this session is to provide you with everything you need to get started.

We'll discuss and demonstrate the following:

* What is Docker?
* What does docker solve?
* How to use it for development work flow?
* How to use it for deployment/production work flow?

Let's skip the boring concepts - we will look at a real-world Node.js application that uses multiple Docker containers.

## Slides

### 03:35 What is Docker?

* 04:35 Demo: Running a project with 7 containers on my laptop
* 07:56 Containers vs VMs
* 08:33 Value for Developers
* 08:46 Value for Ops
* 10:14 Terminology
* 10:37 Container Ecosystem

### 11:18 What does docker solve?

* 11:22 Strangler Application - Architecture for dealing with Legacy/Monolith
* 12:08 Conway Law - The social structure of your organization will be reflected on your software architecture
* 13:42 Inverse Conway Maneuver - Micro-services will force you to change your social structure
* 14:30 Related Points: Lean, CI, CD, Immutable Infrastructure, Culture
* 15:12 Amazon vs Google - Ownership vs Separate Ops team

### 16:57 How to use it for development work flow?

* 17:17 Multiple Containers for running a projects and a Log Server
* 18:20 Registration and Discovery with Consul and registrator
* 18:50 Demo: Android/Cordova development using Docker

### 19:13 How to use it for deployment/production work flow?

* 19:17 What components do you need for running Docker in Production? Scheduler, Registration, Discovery
* 19:26 Scheduler
* 20:05 Discovery
* 20:17 Work flow tools: Deis, Flynn, Paz, Mesos + Marathon
* 20:33 Continuous Deployment, Continuous Delivery, AWS setup, Deis setup on AWS
* 21:47 Deis workflow
* 22:55 Deis Architecture (10 Containers)
* 23:27 Demo: Scale a Micro Service using Deis
* 24:35 Demo: Deploy a Micro Service using Deis
* 25:00 Angular is Dead - Micro Virtual DOM frameworks are taking over. Mithril.js is a good one.

## References

* Strangler Application:  http://martinfowler.com/bliki/StranglerApplication.html
* Docker Ecosystem series:  https://www.digitalocean.com/community/tutorial_series/the-docker-ecosystem
* Conway Law:
http://www.thoughtworks.com/insights/blog/demystifying-conways-law
* Inverse Conway Maneuver: http://www.thoughtworks.com/radar/techniques
* The twelve-factor app - http://12factor.net/build-release-run
* Lean Enterprise: How High Performance Organizations Innovate at Scale - http://www.amazon.com/Lean-Enterprise-Performance-Organizations-Innovate/dp/1449368425

## Run this presentation

    docker run -p 3000:80 sanguinebio/docker-crash-course

open [http://localhost:3000](http://localhost:3000)

## Push this presentation to Dockerhub

    bin/push

## Deploy with Deis

    bin/deploy
