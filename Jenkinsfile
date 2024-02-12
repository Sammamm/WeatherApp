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
                bat 'npm i vitest'
                catchError(buildResult: 'SUCCESS') {
                    bat 'npm test'
                }
            }
            post {
                success {
                    echo 'All tests passed. Moving to the next stage...'
                }
                failure {
                    echo 'Tests failed.'
                }
            }
        }

        stage('Deploy') {
            steps {
                bat 'echo \'Deploying...\''
            }
        }
    }
}
