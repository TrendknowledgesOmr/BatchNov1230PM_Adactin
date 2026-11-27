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
When the user enters a "<firstName>" in first name field
And the user enters a "<lastName>" in last name field
And the user enters a "<billingaddress>"  in address field
And the user enters a "<creditcardNo>" in credit card no field
And the user select a "<creditcardtype>" in card type field
And the user select a "<expirymonth>" exp month field
And the user select a "<expiryyear>" exp year field
And the user enters a "<cvv>" in cvv field
When the user click the book now  button 
Then the user should navigate to the book confirmation page

Examples:
|username |password    |location|hotel         |roomType|childperroom|firstName|lastName    |billingaddress|creditcardNo    |creditcardtype|expirymonth|expiryyear|cvv|
|shalini11|Shalini@1998|Paris   |Hotel Sunshine|Double  |1 - One     |shalini  |chakravarthi|vellore       |8529637417894563|Master Card   |April      |2027       |123|
