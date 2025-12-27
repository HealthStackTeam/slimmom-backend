import { TIMER } from '../constants/index.js';

import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUsersSession,
} from '../services/auth.js';

import { UsersCollection } from '../db/models/users.js';

export const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);
  const session = await loginUser({
    email: req.body.email,
    password: req.body.password,
  });

  setupSession(res, session);

  res.status(201).json({
    status: 201,
    message: 'User registered successfully!',
    data: {
      user,
      accessToken: session.accessToken,
    },
  });
};

export const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);
  const user = await UsersCollection.findById(session.userId);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + TIMER.ONE_DAY),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + TIMER.ONE_DAY),
  });

  res.json({
    status: 200,
    message: 'User logged in successfully!',
    data: {
      user,
      accessToken: session.accessToken,
    },
  });
};

export const logoutUserController = async (req, res) => {
  if (req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  }

  res.clearCookie('sessionId');
  res.clearCookie('refreshToken');

  res.status(204).send();
};

const setupSession = (res, session) => {
  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + TIMER.ONE_DAY),
  });
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    expires: new Date(Date.now() + TIMER.ONE_DAY),
  });
};

export const refreshUserSessionController = async (req, res) => {
  const session = await refreshUsersSession({
    sessionId: req.cookies.sessionId,
    refreshToken: req.cookies.refreshToken,
  });
  const user = await UsersCollection.findById(session.userId);

  setupSession(res, session);

  res.json({
    status: 200,
    message: 'Session refreshed successfully!',
    data: {
      user,
      accessToken: session.accessToken,
    },
  });
};
