#Java Online Projects Platform (JavaOPs)

Open source platform for online edication.
==================
Based on <a href="https://jhipster.github.io/">JHipster</a> Java framework.

Prototype:
--------

-  <a href="https://courses.edx.org/courses/edX/DemoX.1/2014/">edX platform</a>
-  <a href="https://www.coursera.org/course/reactive">Coursera.org courses</a>
-  <a href="https://university.mongodb.com/courses/M101J/about">MongoDB University</a>
-  <a href="https://www.udemy.com/learn-java-by-building-projects/?dtcode=34raEQp2OfBp">Projects in Java</a>

Resources:
-------
-  <a href="http://habrahabr.ru/post/246349/">Yeoman для новичков</a>
-  <a href="http://codemotion.ru/gulp-avtomatizaciya-processa-razrabotki-1427.html">Gulp — автоматизация процесса разработки</a>
-  <a href="http://habrahabr.ru/post/233827/">Основы работы с модулями в Node.js </a>

<a href="spec.md">Техническое задание</a>
-----------

Install 
========
For Windows 7 SP1:
-  Install cmder: http://gooseberrycreative.com/cmder/
-  Change security politics (see cmder hints)
-  Install PowerShell 4.0: 
     http://www.lazywinadmin.com/2013/10/powershell-40-is-now-available.html
     http://www.edugeek.net/forums/downloads/126017-windows-management-framework-v4-0-includes-powershell-v4-0-a.html
-  Run all "npm install" in cmder
       
https://jhipster.github.io/installation.html

mvn dependency:sources

Deploy
=======
yo jhipster:cloudfoundry
cf push -f ./deploy/cloudfoundry/manifest.yml -p target/javaops-platform-0.0.1-SNAPSHOT.war

http://stackoverflow.com/questions/27156905/jhipster-cloudfoundary-throwing-error-uploading-application-error
