import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public questions = [{ "QnID": 17, "Qn": "Following picture represnts.", "ImageName": "q17.png", "Options": ["Full Outer Join", "Left Join", "Right Join", "Inner Join"], "answer": 3 },
  { "QnID": 3, "Qn": "Who invented the first computer ?", "ImageName": null, "Options": ["Charles Babbage", "Linus Torvalds", "Dennis Ritchie", "James sling"], "answer": 0 },
  { "QnID": 13, "Qn": "Inside which HTML element do we put the JavaScript?", "ImageName": null, "Options": ["<javascript>", "<js>", "<scripting>", "<script>"], "answer": 3 },
  { "QnID": 7, "Qn": "Which of the following is the 1's complement of 10?", "ImageName": null, "Options": ["01", "110", "11", "10"], "answer": 0 },
  { "QnID": 10, "Qn": "You can add a row using SQL in a database with which of the following?", "ImageName": null, "Options": ["ADD", "CREATE", "INSERT", "MAKE"], "answer": 2 },
  { "QnID": 15, "Qn": "How can you add a comment in a JavaScript?", "ImageName": null, "Options": ["'This is a comment", "<!--This is a comment-->", "//This is a comment", null], "answer": 2 },
  { "QnID": 8, "Qn": "The binary system uses powers of", "ImageName": null, "Options": ["2", "10", "8", "16"], "answer": 0 },
  { "QnID": 6, "Qn": "Which of the following computer language is used for artificial intelligence?", "ImageName": null, "Options": ["FORTRAN", "PROLOG", "C", "COBOL"], "answer": 1 },
  { "QnID": 9, "Qn": "A computer program that convert sassembly language to machine language is", "ImageName": null, "Options": ["Compiler", "Interpreter", "Assembler", "Comparator"], "answer": 2 },
  { "QnID": 1, "Qn": "What does HTML stand for?", "ImageName": null, "Options": ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Markup Leveler"], "answer": 2 }];
  constructor() { }

  getQuestions() {
    return this.questions;
  }



}
