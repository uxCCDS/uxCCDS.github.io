Title: (Mobile) IA User Testing
Desc: User testing for notification and meeting list for mobile new IA
Date: 2018-01-24
Cover: prototypes/cover/IA Notification And Meeting.png
IS_DRAFT: true
---

# Summary

For the mobile prototype, we had on-site testees to test the new IA navigation. With a lot less elements available in the new IA (comparing to the existing app), some users found it took them longer to navigate through the app smoothly. We also tested the idea of jumping in and out of a spaces for different tasks. 

We also updated the latest mobile prototype (first link below) to MVVM (Model–View–ViewModel) mode. This update allows more than one user to interact with each other using the chat function.

# Links
![vpn_required](../../../img_data/prototypes/VPN.svg)

### Mobile

[https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html](https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html)

Phase 1 version

[https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html](https://uxprototype.cisco.com/projects/Reskin/wap/IA2-P1/page/spark.html)

## Sign in as different users

Change the parameter 'user' to switch user. Default value is ‘Barbara German’. Available user account list is at the buttom of the page.  
eg. sign in as ‘Linda sinu’ （％20 = space）

[https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html?**user=Linda%20Sinu**](https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html?user=Linda%20Sinu)

## Use private session to test prototype

Change the parameter 'key' to switch session. Default value is ‘public’. You can use any text string as for 'key' value. 
When using a specified session, the conversation will not be viewable to the public session (or any other sessions that don't share the same key name).

eg. use session 'private'

[https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html?user=Linda Sinu**&key=private**](https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html?user=Linda%20Sinu&key=private)

## Choose the initial data

Use the parameter 'initMode' to force the data to update

If the parameter 'initMode' equals 1, the prototype will init the data for day1  

If the parameter 'initMode' equals 2, the prototype will init the data for day2  

If you do not use the parameter 'initMode', the prototype will use the data from database or init the data for day1

eg. init the data for day1

[https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html?**initMode=1**](https://uxprototype.cisco.com/projects/Reskin/wap/IAM_P2/page/spark.html?initMode=1)

# Platform

![Mobile](../../../img_data/prototypes/Mobile-2x.png)

# Instructions

## On Mobile

1) You can visit this prototype by using Chrome(Mobile Simulator) or installing it as a web app on iOS devices (The prototype currently only works for 4.7" and 5.5" devices) 

*[How to use Chrome Mobile Simulator](https://uxccds.github.io/prototypes/faq/chrome's-mobile-simulator.html)*  
*[How to Install Web App](https://uxccds.github.io/prototypes/faq/install-web-app.html)*

* For phase 1 version

1) The users can experience the brief sign-on flow and get to the Day1 Scenario.

2) Long tap (at least 2 seconds) on the empty space in Day 1 view (or move cursor if using a browser Simulator) to get to the Day 2 flow.

3) Note to Simulator users: element alignment might be slightly off in the simuulator, as we modified the prototype to adapt to a better experience on iOS devices.


# Key Findings

1) The users knows where to find "meetings" under "My Stuff" on the mobile interface

2) Mobile navigation seemed confusing at times when the users were asked to perform out-of-space tasks (e.g. chat) during a call

## Tested Features:

1) Navigation

2) Global v.s In-Space activities

3) My Stuff and teams

## Test 1 Mobile Navigation

* [Findings Report](https://cisco.box.com/s/1hwhuw38s1yty9tqdz1thee214dfylli)

1. [https://cisco.box.com/s/bvb5bt3q12zrfj8bzeuhhrdr2tg5pf0h](https://cisco.box.com/s/bvb5bt3q12zrfj8bzeuhhrdr2tg5pf0h)  
2. [https://cisco.box.com/s/mty0mkiqdw3y9usul22pzu1nf55gzu67](https://cisco.box.com/s/mty0mkiqdw3y9usul22pzu1nf55gzu67)  
3. [https://cisco.box.com/s/zcp226m80k72s0a0avq2bhnz607dx8kp](https://cisco.box.com/s/zcp226m80k72s0a0avq2bhnz607dx8kp)  
4. [https://cisco.box.com/s/utftbss2vlnoqafi2n7huttizlzii6ko](https://cisco.box.com/s/utftbss2vlnoqafi2n7huttizlzii6ko)  
5. [https://cisco.box.com/s/pzc71oezu0zxa7r9w335ypnb1dxkoe6q](https://cisco.box.com/s/pzc71oezu0zxa7r9w335ypnb1dxkoe6q)  


## Test 2 Navigation / Meeting List / Schadule Meeting

1. [https://cisco.box.com/s/ezp9a5uhkdoayttd8wo4z0ya3iepdt12](https://cisco.box.com/s/ezp9a5uhkdoayttd8wo4z0ya3iepdt12)
2. [https://cisco.box.com/s/ladpqrebtz197keq5q5r06bukhpk0evh](https://cisco.box.com/s/ladpqrebtz197keq5q5r06bukhpk0evh)
3. [https://cisco.box.com/s/jq7uym0rcocjgbrysaqjcxwz0n9zzg0e](https://cisco.box.com/s/jq7uym0rcocjgbrysaqjcxwz0n9zzg0e)
4. [https://cisco.box.com/s/2m06w7qhvgo1w4a8cfpllvy761gsge48](https://cisco.box.com/s/2m06w7qhvgo1w4a8cfpllvy761gsge48)
5. [https://cisco.box.com/s/lvyzjubx6imc65o0u83sink22fpdpp1m](https://cisco.box.com/s/lvyzjubx6imc65o0u83sink22fpdpp1m)
6. [https://cisco.box.com/s/crwgmut8q883cb7ocranl1htf16demq3](https://cisco.box.com/s/crwgmut8q883cb7ocranl1htf16demq3)


# Available User Account list

Adrian Delamico  
Alex Narang  
Alison Casidy  
Barbara German  
Benjamin Vitali  
Benoit Lapointe  
Brandon Seeger  
Catherine Sinu  
David Liam  
Elizabeth Wu  
James Weston  
Julia Cyrus  
Kate Robertson  
Marc Brown  
Maria Rossi  
Marissa Reena  
Peter Hogan  
Sherry McKenna  
Simon Delamo  
Will Jones  
Emma Hirst  
Linda Sinu  
Brandon Smith

