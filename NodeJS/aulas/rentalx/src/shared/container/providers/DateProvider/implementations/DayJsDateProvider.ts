import 'reflect-metadata';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import {IDateProvider} from "../IDateProvider";


dayjs.extend(utc);

class DayJsDateProvider implements IDateProvider{
    compareInHours(start_date: Date, end_date: Date): number {
        return dayjs(this.convertToUTC(end_date)).diff(
            this.convertToUTC(start_date), "hours"
        );
    }

    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }

    dateNow(): Date {
        return dayjs().toDate();
    }

    compareInDays(start_date: Date, end_date: Date): number {
        return dayjs(this.convertToUTC(end_date)).diff(
            this.convertToUTC(start_date), "days"
        );
    }

    addDays(days: number, reference_date: Date = null): Date {
        const date = reference_date ? dayjs(reference_date) : dayjs();
        return date.add(days, "day").toDate();
    }

    addHours(hours: number, reference_data: Date): Date {
        const date = reference_data ? dayjs(reference_data) : dayjs();
        return date.add(hours, "hour").toDate();
    }

    checkIsBefore(start_date: Date, end_date: Date): Boolean {
        return dayjs(start_date).isBefore(end_date);
    }

}

export { DayJsDateProvider }