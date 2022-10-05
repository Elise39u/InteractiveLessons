# InteractiveLessons
An Interactive lesson application guided by an avatar on screen, web based 

## The idea
The idea of the application is to help teachers in their lessons.    
Also to help studentens in their learing process.  
The goal is to create a web based application where a teacher can bring in their own lesson.  
The student can then on its own pace go through the lessons and complete them.  
The idea is also the student can configure the application to its own desire learing pattern  
I highly recommend to read the requirment list i leave in `documentation/requirements_list` for a full understanding of the application  

# Documents  
All the nesscarry documents can be found in the folder `documentation` for the project.  
But i will provide a short list what you can find in there. Please keep in mind every document is in pdf version their!  
 - Code Conduct -> Known as the code rules to follow in the project  
 - Requirment_List -> List with all the given requirements. Be aware this is from when i got the job.  
 - How to Contribute -> A document that will help you guid on how to contribute to the application.  
 
# Branches  
The branches setup is designed as followed. But first keep in mind that this is the branch design at the start of the project.  
Its highly possible that there are maby more of multiple branches.  
If you make a new branch please name it as followed: `what_your_making+Name` to easly keep track of what others are doning in the project.  
### Master Branch  
The main branch that we try to maintain bug and issue free.  
Here is where worked out "Beta" release are pushed to from the branch called Main  
Its smart that if you want to Contriubte to make a branch from the Master or Main. Only dont to read the contributing part here after  
### Main or called Beta Branch  
After a version has been tested and all the required test has been passed you end up in this branch.  
This branch is designed to be the branch where a version from can be made and tested by either yourself or testers.
This with the underling thought that users dont always use the application as we plan.  
So they often find bugs or issues. Make sure that if there are found to use the template provided in ISSUE_TEMPLATE:  
`ISSUES_TEMPLATE/bug_report` and `ISSUES_TEMPLATE/issue-report`  
### Test branch 
The branch where most of the versions go after the devs are done with programming.  
`CI Support is still coming` but keep in mind that:  
You can push with a request to the Main branch only after all of the test in the application are passed.  
Also highly keep in mind to also test by other people. This with the idea that they often find issues that test don`t.  
This also saves times in any beta release versions  
### Dev Branch  
You can see this as the branch im working in. I simply called it Dev branch since at the start i will be the only one working on the project.  
So there was no need for me to name it for example: `Login_by_api_Elise`  
Keep in mind that my branch with a high chance contains issues.  
If you want to contribute make sure to read Contributing and make a branch from the master or main.  
This with the given template name at the start of this section  
# Contributing  
# Testing and how to do it 
# Submitting Bugs and what are they  
Before i start on how to submit bug i want to explain what is a bug considerd in this project.  
I want to consider bugs as things that break the application or code. So for example here a few bugs that could occuer  
 - Login form submit button not working  
 - When you click on profile page in menu and nothings happends  
 - Clicking on the profile page from within lesson maker sends me back to the home page.  
 #### Bug report  
 As you can see that are few examples of what could happend as bug. As i said earlier i want to clearify bugs as things that break the code or application.  
 In case you find a bug and want to submite a report than please:  
 Follow the template giving in `ISSUES_TEMPLATE/bug_report` So that everyone is one line of report and submitting bugs.  
 As long those criteria are met, than i allow other version of submits. 
# Submitting Issues and what are they  
So we are coming to issues. I wanted to separete issues and bugs and categorize them more. Lets first start by declaring what an issue is.  
I consider a issue as a problem with the application that doesnt nescarrly breaks it. This can be a request of a problem.  
To start lets give you also a few examples.  
 - When i click on submit button in the login form i get logged in and not redirected to somewhere  
 - When i enter my lessons i see that you can enter names into a time field.  
 - Can we make the submit lessons more streamlined by making them more clear?  
 - Can the house theme of the website be updated to Red/Lavendel color plaette.  
#### Issue Reports.
As i said earlier these are a few examples of what issues could be. To repeat: Issues are not something that breaks but more like the words says.  
Issues with the website this can be in form of problemes or requests  
Also for issues the same thing applies as for bugs. Use the template in `ISSUES_TEMPLATE/issues-report` with the idea that everyone is on one line for submittng and reporting issues.  
Also for this case i allow different versions of submitted issues as long as the information is present from the issues-report.  
# Releases version  
For release we are aming to follow the X.Y.Z Rule. With it working as follows:  
 - X standing for a major release  
 - Y standing for a minior release  
 - Z standing for a patch release  
