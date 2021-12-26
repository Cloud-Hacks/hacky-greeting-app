![grt](https://user-images.githubusercontent.com/94980910/147413908-f86e0318-ecfe-4c24-9cd2-7d118f6c8c03.png)

## Inspiration
Inspired by Twilio API and its feats

## What it does
It allows to be able to post message to your closed one's number.

## How we built it
Our app is built upon react js on top of Twilio

## Challenges we ran into
Configuring Twilio Fetching API calls

## Accomplishments that we're proud of
Twilio setup and its configurations

## What we learned
API calls and Twilio feats

## What's next for Hacky Greeting App
To setup our new pages and add other feats provided by Twilio like voice calls etc.


# Send message with React and Twilio

This is an example of sending message using React and Twilio. It consists of a `whatsappForm` component that communicates with a server endpoint to [send messages via the Twilio REST API](https://www.twilio.com/docs/sms/send-messages).

To see how to build the project yourself, check out the blog post [How to send an SMS from React with Twilio](https://www.twilio.com/blog/send-an-sms-react-twilio).

This project was created from the [react-express-starter project](https://github.com/philnash/react-express-starter) and includes a React front end and an Express server.

## Running the project

To run the project you will need a Twilio account and a Twilio phone number that can send whatsapp messages. Gather your Twilio Account Sid and Auth Token from the [Twilio console](https://www.twilio.com/console) and the phone number.

Then, clone the project, change into the directory and install the dependencies.

```bash
git clone https://github.com/Cloud-Hacks/hacky-greet-app.git
cd send-sms-react-twilio
npm install
```

Find the `.env` and fill in your Twilio credentials and phone number.

Start the application on its own with the command:

```bash
npm run dev
```

Open the app at [localhost:3000](http://localhost:3000). You can now use the form to send SMS messages via your Twilio number.
