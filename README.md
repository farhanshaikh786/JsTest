# JsTest

A complete Automation Testing framework built on AngularJs javascript using Node.js
Protractor Installation
Steps to get Protractor working on MAC, windows should be same.

In the Terminal
Run this command - npm install -g protractor

Everything should be green, if there is permission issue,

                                         type 'sudo npm install -g protractor'
Create a test new folder you can name it anything, inside
A) Make a file called - JsTest Inside the file copy and paste the following

     describe("Go to the Homepage ", function(){
     browser.ignoreSynchronization=true; // This allows to protractor to run on regular website, not specific to angular 
     it("Go to the Home page ", function(){
     browser.get("https://ecs-digital.co.uk/"); // Go to a specific URL
     console.log("Home Page Open succesffully") // Log a message
     });

      // From the Home Page go to the  Enterprise Devops Page 
      it("Go to Enterprise Page ", function(){
      var Enterprise = element(by.css("post-23 > section.section.alternate.pad-big.text-normal.section-text-no-shadow.section-inner-no-       shadow.section-normal.section-opaque > div.container.container-vertical-default > div > div > div.row > div:nth-child(1) >  
      div.col-text-1.text-normal.element-top-20.element-bottom-20 > h3 > a"));
      
      Enterprise.click();")); // set a variable for action
      Enterprise.click(); // Click on element
      browser.sleep(5000) // Tell Protractor to Wait for 5000 miliseconds or 5sec
      console.log("From the Enterprise page go to the Get In Touch Page "); 
      element(by.css("#post-36 > section.section.blue-row.text-normal.section-text-no-shadow.section-inner-no-shadow.section-   
      normal.section-opaque > div.container.container-vertical-default > div > div > div.vc_btn3-container.vc_btn3-center >  
      a")).click(); // Go the element and Click
      browser.sleep(5000)
      console.log("Go to specific Touch Page");
      browser.sleep(5000)
      browser.navigate().back(); // Tell the browser to go back 
      });
    });
   
   
B) Make a new file called - conf.js Inside the file copy and paste the following

      exports.config = {
      directConnect: true,
      capabilities:{
      'browserName': 'chrome'},
       framework: 'jasmine2',
       specs: ['test.js']
       };
   
Now open a new terminal > Navigate to directory you created. cd JsTest > which should have two file you just created todo-spec.js and conf.js > now just run command protractor conf.js


**This should work for everyone.. **
