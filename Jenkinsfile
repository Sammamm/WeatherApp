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
        bat 'echo \'building...\''
      }
    }

    stage('Test') {
      steps {
        bat 'echo \'Testing...\''
      }
    }

    stage('Deploy') {
      steps {
        bat 'echo \'Deploying...\''
      }
    }

  }
}