import { Router } from 'express';
import { checkIfAuthenticated } from '../utils/authUtils';
import firebaseService from '../services/firebase-service';
import { logger } from '../utils/logger';

// Payment controller

const routes = Router();

const mockDescriptions = [
  'Hi! I am a counsellor, specializing in working with individuals with depression and anxiety. I am a registered Level 3 Practitioner (member no.A12345) with the Assoication of Psychotherapists and Counsellors Singapore (APACS). I have extensive experience in Cognitive Behaviour Therapy (CBT) and am passionate about helping clients build a purposeful life.',
  'Hi! I am a counsellor, specializing in working with individuals with depression and anxiety. I am a registered Level 3 Practitioner (member no.A12345) with the Assoication of Psychotherapists and Counsellors Singapore (APACS). I have extensive experience in Cognitive Behaviour Therapy (CBT) and am passionate about helping clients build a purposeful life.',
  'Hi! I am a counsellor, specializing in working with individuals with depression and anxiety. I am a registered Level 3 Practitioner (member no.A12345) with the Assoication of Psychotherapists and Counsellors Singapore (APACS). I have extensive experience in Cognitive Behaviour Therapy (CBT) and am passionate about helping clients build a purposeful life.'
];

/**
 * Retrieves all therapists
 */
routes.get('/all', checkIfAuthenticated, async (req, res) => {
  const therapistsRaw = (await firebaseService.auth().listUsers()).users;
  logger.info(JSON.stringify(therapistsRaw));
  const therapists = therapistsRaw.map(therapist => ({
    uid: therapist.uid,
    email: therapist.email,
    displayName: therapist.displayName,
    description: mockDescriptions[Math.floor(Math.random() * (mockDescriptions.length - 1))],
    photoURL:
      'https://images.squarespace-cdn.com/content/v1/570f187e59827eae9004e3f9/1570126294916-P0VVD20YN0O1TULYY96W/ke17ZwdGBToddI8pDm48kFV4GEAKsM218uhHbocVRoZZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxBtPrU6QiAuJmmiTClo1g3iBTFQath53S1oMas0HTnmBFsQ34cJH1U5ld1eynrgH4/greg.png'
  }));

  res.json(therapists);
});

/**
 * Retrieves a therapist id
 */
routes.get('/id/:therapistId', checkIfAuthenticated, async (req, res) => {
  // TODO

  res.json({
    uid: '',
    name: '',
    type: '',
    description: '',
    videoUrl: ''
  });
});

export default routes;
