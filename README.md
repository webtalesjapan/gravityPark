##Steps to start
 * Make sure you have Node.js installed.
 * Clone the repo and go to the repo folder in a terminal of your choice
 * Install all node modules by using 
   ```
   npm install
   ```
 * Run the build server using
   ````
   npm run build-dev
   ````
  * Keep the previous terminal running; Open another terminal, go to the repo folder and run the node webserver using
    ```
    npm run start
    ```
    This would start a webserver on port 3000. 
    
  * Open localhost:3000/yourPath.
    The path for booking page is 
    ````
    localhost:3000/booking
    ````
  
##Setting up the env variables
This step is required to set up the config. The config files cannot be uploaded to git.
Set up a file named `.env` in project root. 
Add various env variables to it. 

The list of current env variables: 
````
MAILJET_K
MAILJET_S

FIREBASE_API_KEY
FIREBASE_AUTH_DOMAIN
FIREBASE_DATABASE_URL
FIREBASE_PROJECT_ID
FIREBASE_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID
````
