pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/YauhenEp/it-academy-24-1.git']])
            }
        }

        stage('Dependencies') {
            steps {
                dir('lesson_13') {
                    bat "npm i"
                }
            }
        }

        stage('Tests') {
            steps {
                dir('lesson_13') {
                    bat "npm run test"
                }
            }
        }
    }
}