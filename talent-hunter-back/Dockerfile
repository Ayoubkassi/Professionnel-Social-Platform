# Fetching latest version of Java
FROM openjdk:17

# Setting up work directory
WORKDIR /app

# Copy the jar file into our app
COPY ./target/talent-hunter-0.0.1-SNAPSHOT.jar /app

# Exposing port 6000
EXPOSE 6000

# Starting the application
CMD ["java", "-jar", "talent-hunter-0.0.1-SNAPSHOT.jar"]