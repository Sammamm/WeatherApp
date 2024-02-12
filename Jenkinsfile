pipeline {
  agent any
  stages {
    stage('Code') {
      steps {
        git(url: 'https://github.com/Sammamm/WeatherApp', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        bat 'docker build -t react-docker .'
        bat 'docker run -it react-docker'
      }
    }

    stage('Test') {
      steps {
        bat 'npm test'
      }
    }

    stage('Deploy') {
      steps {
        bat 'echo \'Deploying...\''
      }
    }

  }
}