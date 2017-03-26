'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = "amzn1.ask.skill.0f11504d-28e1-49a8-8830-4f6eb9a4171a";  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en": {
        "translation": {
            "FACTS": [
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Sadaf is Hassan's love."
            ],
            "SKILL_NAME" : "Persian Calendar",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a space fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Sadaf is Hassan's love."
            ],
            "SKILL_NAME" : "Persian Calendar"
        }
    },
    "en-GB": {
        "translation": {
            "FACTS": [
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Sadaf is Hassan's love."
            ],
            "SKILL_NAME" : "Persian Calendar"
        }
    },
    "de": {
        "translation": {
            "FACTS": [
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Hassan loves Sadaf.",
                "Sadaf is Hassan's love."
            ],
            "SKILL_NAME" : "Persian Calendar",
            "GET_FACT_MESSAGE" : "Hier sind deine Fakten: ",
            "HELP_MESSAGE" : "Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?",
            "HELP_REPROMPT" : "Wie kann ich dir helfen?",
            "STOP_MESSAGE" : "Auf Wiedersehen!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can ask me to tell you the Persian calendar date";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};