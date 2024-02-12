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
        bat 'docker run -dp 5173:5173 react-docker'
      }
    }

    stage('Test') {
        steps { 
          docker.image('react-docker').inside { sh 'npm test'}
        }
    }
      

        stage('Deploy') {
          steps {
            bat 'echo \'Deploying...\''
          }
        }
    }
}
}
}
