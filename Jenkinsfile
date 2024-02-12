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
        bat 'docker run -d react-docker'
      }
    }

    stage('Test') {
      post {
        success {
          bat 'echo \'Successful Testing\''
        }

        failure {
          bat 'echo \'Failed\''
        }

      }
      steps {
        bat 'npm i vitest'
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