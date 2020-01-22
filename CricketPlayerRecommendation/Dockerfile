FROM java:8-jre
WORKDIR /usr/src

COPY ./target/CricketPlayerRecommendation-0.0.1-SNAPSHOT.jar CricketPlayerRecommendation-0.0.1-SNAPSHOT.jar
#EXPOSE 8003
ENTRYPOINT ["java","-jar","/usr/src/CricketPlayerRecommendation-0.0.1-SNAPSHOT.jar"]