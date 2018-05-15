const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

//parse app/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Khai báo một engine mới tên là 'handlebars' từ 'handlebars ({defaultLayout: 'main'})'
//declare a new engine(name:'handlebars') from handlebars({default layout:'main'})
app.engine("handlebars", handlebars({ defaultLayout: 'main' }));
// Đặt view engine của app là 'handlebars' mới tạo bên trên
//set this app's view engine as handlebars
app.set("view engine", "handlebars");

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/ask', function (req, res) {
    res.render('ask');
});

app.get('/list', function (req, res) {
    let data = [
        "Nguyen Tien Thinh",
        "Phung Quoc Bao",
        "Phan Ba Khai",
        "Nguyen Thanh Hoa",
        "Quach Tuong Hoa",
        "Nguyen Thuy Duong",
        "Nguyen Tran Huyen My",
        "Kieu Anh Hera"
    ]
    res.render('list', { data });
});

app.post('/api/question/:id/vote', function (req, res) {
    let idQuestion = req.params.id;
    let type = req.query.type;
    let questionList = fs.readFileSync('./questionList.json', 'utf-8');
    questionList = JSON.parse(questionList);
    let index = questionList.findIndex(item => item.id == idQuestion);
    if (type == 'yes') questionList[index].yes += 1;
    else questionList[index].no += 1;
    fs.writeFileSync('./questionList.json', JSON.stringify(questionList), 'utf-8');
    res.redirect(`/question/${questionList[index].id}`);

});

app.get('/show', function (req, res) {
    let questionList = fs.readFileSync('./questionList.json', 'utf-8');
    questionList = JSON.parse(questionList);
    let random = Math.round(Math.random() * questionList.length);
    let questionFound = questionList[random];
    res.render('show', {
        question: questionFound
    });
});

app.post('/api/question', function (req, res) {
    let questionList = fs.readFileSync('./questionList.json', 'utf-8');
    questionList = JSON.parse(questionList);
    let newQuestion = {
        questionContent: req.body.question,
        id: questionList.length + 1,
        yes: 0,
        no: 0
    }

    questionList.push(newQuestion);

    fs.writeFileSync('./questionList.json', JSON.stringify(questionList), 'utf-8');

    res.redirect(`/question/${newQuestion.id}`);
});

app.get('/question/:id', function (req, res) {
    let idQuestion = req.params.id;
    let questionList = fs.readFileSync('./questionList.json', 'utf-8');
    questionList = JSON.parse(questionList)
    let questionFound = questionList.find(item => item.id == idQuestion);
    res.render('question', {
        question: questionFound,
        totalVote: questionFound ? questionFound.yes + questionFound.no : 0
    });
});

// app.post('/api/question', function (req, res) {
//     console.log("Create new question.");

//     console.log(req.body);

//     let questionList = fs.readFileSync('./questionList.json', 'utf-8');

//     // console.log(JSON.parse(questionList));
//     questionList = JSON.parse(questionList);

//     let newQuestion = {
//         questionContent: req.body.question,
//         id: questionList.length,
//         yes: 0,
//         no: 0
//     }
//     questionList.push(newQuestion);
//     fs.writeFileSync('./questionList.json', JSON.stringify(questionList), 'utf-8');
//     res.redirect(`/question/${newQuestion.id}`);
//     // fs.writeFileSync('./questionList.json');
//     // req.on("data", function (req, res) {
//     //     console.log('data');
//     // });
// });

// app.get('/question/:id', function (req, res) {
//     let questionId = req.params.id;
//     let questionList = JSON.parse(fs.readFileSync('./questionList.json', 'utf-8'));

//     let questionFound = questionList.filter(question => question.id == questionId)[0];
//     res.render("question", {
//         question: questionFound,
//         totalVote: questionFound ? (questionFound.yes + questionFound.no) : 0
//     });
// });


app.listen(8008, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Sever is up');
    }
});