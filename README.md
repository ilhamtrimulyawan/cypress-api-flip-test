# cypress-api-flip-test
Structure
<img width="571" alt="image" src="https://user-images.githubusercontent.com/103343341/162727194-c1ad9691-8f75-4665-a378-35677db07c68.png">

Video Demo : 

Creating a Cypress project
npm init -y

npm install cypress cypress-cucumber-preprocessor          

npm install -D cypress-xpath

npm i cypress -D

To start the Cypress project run the command:
npm run cypress open

Running
npx cypress run

Report :  
Install mochawesome : npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

Export Report :  
npx mochawesome-merge cypress/reports/*.json -o merged-report.json 
npx mochawesome-report-generator merged-report.json
![image](https://github.com/user-attachments/assets/a7258f54-2f82-4949-acb1-54f8b32c2d4a)
![image](https://github.com/user-attachments/assets/9678e063-a335-4bed-bc6e-9fcd613174c2)
![image](https://github.com/user-attachments/assets/d7e13f36-9979-4895-9927-67d9c5304740)
![image](https://github.com/user-attachments/assets/34107217-d6bc-4d58-ad73-43e9fc1578cb)
![image](https://github.com/user-attachments/assets/a7f3cd33-6104-4b56-b740-b9319c738ac7)


Library :
https://www.npmjs.com/package/cypress-xpath

For UI, sorry I haven't been able to get to it until it works, but I've tried to script all the problem cases. I hope it can be taken into consideration

I didn't do question number 2 because when I created a new account there was an error 500 (explain in https://docs.google.com/document/d/1xIqzR9hCJ2oIUeMpckcnS-zzO12DREAWfLmPyYpZqXU)




