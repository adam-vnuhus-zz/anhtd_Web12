const QuestionModel = require('../models/question.model.js');
const path = require('path');
const express = require('express');
const fs = require('fs');



const Router = express.Router();
Router.get('/:id/:vote', (req, res) => {
    const vote = req.params.vote;
    const idQuestion = req.params.id;
    QuestionModel.findById(idQuestion, (err, question) => {
        if (err) {
            console.log(err);
        }
        else {
            const updatedVote = question[vote] + 1;
            if (vote == 'yes') {
                QuestionModel.findByIdAndUpdate(idQuestion, { yes: updatedVote }, (err, raw) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.redirect(`/question/${idQuestion}`)
                    }
                })
            } else {
                QuestionModel.findByIdAndUpdate(idQuestion, { no: updatedVote }, (err, raw) => {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        res.redirect(`/question/${idQuestion}`)
                    }
                })
            }
        }
    })
});

Router.get('/:id', (req, res) => {
    const idQuestion = req.params.id;
    QuestionModel.findById(idQuestion, (err, question) => {
        if (err) {
            console.log(err);
        }
        else res.render('question', {
            question,
            totalVote: question ? question.yes + question.no : 0
        });
    });
})
module.exports = Router;