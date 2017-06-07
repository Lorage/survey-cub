// API Helper methods
import 'whatwg-fetch';

const questionData = [
    {
        id: 1,
        text: "Which of these pictures is of a Gopher?",
        type: "image",
        options: [
            {
                id: 1,
                type: "image",
                content: "http://stratumsecurity.ghost.io/content/images/2016/08/gopher.jpeg"
            },
            {
                id: 2,
                type: "image",
                content: "https://s-media-cache-ak0.pinimg.com/736x/3f/09/85/3f098507df7d7b2cd63181b2034ae24d.jpg"
            },
            {
                id: 3,
                type: "image",
                content: "https://www.desertusa.com/dusablog/wp-content/uploads/gopher.jpg"
            }
        ],
        correctOptionIds: [1, 3]
    },
    {
        id: 2,
        text: "How great is this UI/UX?",
        type: "text-multiselect",
        options: [
            {
                id: 1,
                content: "Very good!"
            },
            {
                id: 2,
                content: "Mind blowing."
            },
            {
                id: 3,
                content: "Meh."
            }
        ],
        correctOptionIds: [1, 2]
    },
    {
        id: 3,
        text: "Why is React the best?",
        type: "free-response",
        options: [],
        correctOptionIds: []
    },
];

// A class dedicated to container HTTP logic
// Could be used as an access point for middleware and other utilities
class API {
    GET(path) {
        // Normally would use fetch(path) api, but instead return hard coded JSON response
        return {
            body: [
                {
                    name: "Hiring 101", 
                    questions: questionData
                }
            ]
        };
    }

    POST() {

    }

    PUT() {

    }

    DELETE() {

    }
}

export default new API;