This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

### `Run the demo`

1. Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Change ip address "http://192.168.1.12" to your own computer IP address in file /deploy/dev/nginx.conf and then:
Run docker run --name appen-app -p 3003:80 -v `pwd`:/usr/share/nginx/html:ro -v `pwd`"/deploy/dev/nginx.conf":/etc/nginx/conf.d/default.conf  -d nginx
to enable axios call of the UI page, open http://127.0.0.1:3003 to view it.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `API`

Get praise list:
  http://orca.emotibot.com:8136/appen/getPraiseList
  
Add a praise: 
  http://orca.emotibot.com:8136/appen/addPraise?token=gIkuvaNzQIHg97ATvDxqgjtO
  &team_id=T0001
  &team_domain=example
  &enterprise_id=E0001
  &enterprise_name=Globular%20Construct%20Inc
  &channel_id=C2147483705
  &channel_name=test
  &user_id=U2147483697
  &user_name=Steve
  &command=/appenpraise
  &text='hello world'
  &response_url=https://hooks.slack.com/commands/1234/5678
  &trigger_id=13345224609.738474920.8088930838d88f008e0
  
Clear praise: 
  http://orca.emotibot.com:8136/appen/clearPraiseList
  

### `Scenario`

1. Login Slack with workspace "ZhuJianTechnoglogy.slack.com", user: fionali092951@gmail.com/ Fiona092951
    https://app.slack.com/client/TMZRLCZEE/CN66X75GR/app_profile/A0F82E8CA
    
2. In Channel '#appenpraise', write command "/appenpraise @FionaLi did something great" and send the message
   message "ok" will be responsed.
   
3. The praise will be added, and can be fetched by API and displayed on UI page.

