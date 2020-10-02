import { container } from 'tsyringe';

import '@modules/users/providers/index';
import './providers';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import IApointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';

import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationsRepository';
import INotificationRepository from '@modules/notifications/repositories/INotificationRepository';

container.registerSingleton<IApointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<INotificationRepository>(
  'NotificationsRepository',
  NotificationsRepository,
);
