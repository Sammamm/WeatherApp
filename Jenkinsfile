pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        bat 'docker build -t react-docker .'
        bat 'docker run -p 5173:5173 react-docker'
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