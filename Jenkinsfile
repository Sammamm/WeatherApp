pipeline {
  agent any
  stages {
    stage('Code') {
      steps {
        git(url: 'https://github.com/Sammamm/WeatherApp.git', branch: 'main')
      }
    }

    stage('Build') {
      steps {
        bat 'docker build -t react-docker .'
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

    stage('Code Analyze') {
      steps {
        bat 'npm run format'
      }
    }

    stage('Deploy') {
      steps {
        bat 'docker-compose up -d'
      }
    }

  }
}