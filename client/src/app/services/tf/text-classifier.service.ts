import { Injectable } from '@angular/core';

import '@tensorflow/tfjs';
import * as toxicity from '@tensorflow-models/toxicity';

@Injectable({
  providedIn: 'root',
})
export class TextClassifierService {
  threshold = 0.75;

  // Load the model. Users optionally pass in a threshold and an array of
  // labels to include.

  model: any;
  loading: boolean;

  constructor() {}

  // linearModel: toxicity.ToxicityClassifier;
  // model;
  toxicityLabels = [
    'identity_attack',
    'insult',
    'obscene',
    'severe_toxicity',
    'sexual_explicit',
    'threat',
    'toxicity',
  ];

  async textClassifier(sentences) {
    var toxicStatus = false;
    var arr = [];

    this.model = await toxicity.load(this.threshold, this.toxicityLabels);
    // .then((model) => {
    const predictions = await this.model.classify(sentences);

    predictions.forEach((element1) => {
      element1['results'].forEach((element) => {
        if (element['match'] == true) {
          toxicStatus = true;
          const percentage =
            Math.round(Math.max(...element['probabilities']) * 100) + '%';
          // console.log(element1['label'], percentage);
          arr.push({ name: element1['label'], percentage: percentage });
          // return element1['label'], percentage;
        } else {
          // console.log('Text not toxic');
          // return 'Text not toxic';
        }
      });
    });

    // });
    return { toxicStatus: toxicStatus, message: arr };
  }
}
