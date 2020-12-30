pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install nodejs
'''
        sh 'npm install'
      }
    }

  }
}