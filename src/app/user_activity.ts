import { Activity } from "./activity";

export interface UserActivity {
    day:string;
    totalHours:string;
    activityList:Activity[]
}