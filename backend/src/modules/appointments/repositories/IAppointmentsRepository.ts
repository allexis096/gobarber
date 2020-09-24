import Appointment from '../infra/typeorm/entities/Appointment';

export default interface IApointmentsRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}
