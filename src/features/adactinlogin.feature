Feature: Validating the adactin Login and hotel booking Functionality

Scenario Outline: Validating login functionality using valid credentials and search hotel functionality
Given the user is on the Adactin login page
When the user enters a valid "<username>" in username field
And the user enters a valid "<password>" in password field
And the user clicks on the Login button
Then the user should navigate to search hotel page
When user select the "<location>" by clicking select location field
And  user select the "<hotel>" by clicking select hotel field
And  user select the "<roomType>" by clicking select room type field
And User select the "<childperroom>" by clicking select click per room field
When user click the search button
Then the user should navigate to select hotel page
When the user select the hotel 
And the user click the continue button
Then the user should navigate to book hotel page 


Examples:
|username |password    |location|hotel         |roomType|childperroom|
|shalini11|Shalini@1998|Paris   |Hotel Sunshine|Double  |1 - One     |
