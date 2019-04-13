export class QuestionModel {

  question: string;
  answers: string[];
  icons: string[];

  constructor(question: string, answers: string[], icons: string[]) { this.question = question; this.answers = answers; this.icons = icons; }
}
