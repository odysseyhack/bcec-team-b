import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionModel} from "./question.model";
import {ColorShifterService} from "../navigation-bar/color-shifter.service";
import set = Reflect.set;
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions-overlay',
  templateUrl: './questions-overlay.component.html',
  styleUrls: ['./questions-overlay.component.scss']
})
export class QuestionsOverlayComponent implements OnInit {
  rootCardClass = 'show';
  nextIcon = 'check';
  nextIconClass = '';

  questions: QuestionModel[];
  questionCounter = 0;

  colors: string[];

  constructor(private shifter: ColorShifterService,
              private router: Router) {
  }

  initQuestions() {
    this.questions = [];
    this.questions.push(new QuestionModel ('What is your age?', [], ['dwadwoi', 'dwkoado']));
    this.questions.push(new QuestionModel ('Do you live together with a partner?', ['Yes', 'No'], ['assets/icons/partner.svg', 'assets/icons/single.svg']));
    this.questions.push(new QuestionModel ('What kind of home do you live in?', ['Apartment', 'Townhouse', 'Corner house', 'Detached house'], ['assets/icons/home.svg', 'assets/icons/home-1.svg', 'assets/icons/home-2.svg', 'assets/icons/house.svg']));
    this.questions.push(new QuestionModel ('Do you rent or own the home?', ['Rent', 'Own'], ['assets/icons/key.svg', 'assets/icons/bookmark-1.svg']));
    this.questions.push(new QuestionModel ('How much is your rental or mortgage cost per month?', [], ['assets/icons/partner.svg', 'assets/icons/single.svg']));
    this.questions.push(new QuestionModel ('Do you own a car?', ['Yes', 'No'], ['assets/icons/car.svg', 'assets/icons/bike.svg']));
    this.questions.push(new QuestionModel ('What is your employment status?', ['Employed', 'Unemployed', 'Self-employed'], ['assets/icons/archive-2.svg', 'assets/icons/agenda.svg', 'assets/icons/briefcase.svg']));
    this.questions.push(new QuestionModel ('What is your current income?', [], ['assets/icons/partner.svg', 'assets/icons/single.svg']));
    this.questions.push(new QuestionModel ('How much are your posessions worth?', [], ['assets/icons/partner.svg', 'assets/icons/single.svg']));
    this.questions.push(new QuestionModel ('What is your field of work or expertise?', [], ['assets/icons/partner.svg', 'assets/icons/single.svg']));
    this.questions.push(new QuestionModel ('What is the main source of income?', ['Work', 'Savings account', 'Shares'], ['assets/icons/briefcase.svg', 'assets/icons/safebox-4.svg', 'assets/icons/investment.svg']));
    this.questions.push(new QuestionModel ('How much are your daily expenses?', [], ['assets/icons/partner.svg', 'assets/icons/single.svg']));

  }

  ngOnInit() {

    this.initQuestions();
    this.initColors();

    this.shifter.newColor.subscribe(colorCode => {
        document.getElementById('question-body').style.backgroundColor = colorCode;
    });

    setTimeout(() => {
      this.shifter.changeColor('#EF4136');
    }, 3);
  }

  newQuestion() {
    if (this.questionCounter === this.questions.length - 1) {
      this.nextIcon = 'autorenew';
      this.nextIconClass = 'twister';
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 2500);
      return;
    }
    this.shifter.changeColor(this.colors[this.questionCounter]);
    this.rootCardClass = 'hide';
    setTimeout(() => {
      this.questionCounter++;
      this.rootCardClass = 'show';
      if (this.questionCounter === this.questions.length - 1) {
        this.nextIcon = 'done_all';
      }
    }, 500);

  }

  initColors() {
    this.colors = [];
    this.colors.push('#F06057');
    this.colors.push('#F2726A');
    this.colors.push('#F3817A');
    this.colors.push('#F38C85');
    this.colors.push('#F59C97');
    this.colors.push('#F6ACA7');
    this.colors.push('#F8B9B5');
    this.colors.push('#FACCC9');
    this.colors.push('#FAD3D1');
    this.colors.push('#FCE6E5');
    this.colors.push('#FEFEFE');
  }


}

