import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('Create Appointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123156156',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123156156');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 8, 30, 11);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123156156',
    });

    expect(
      createAppointment.execute({
        date: appointmentDate,
        provider_id: '123156156',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
