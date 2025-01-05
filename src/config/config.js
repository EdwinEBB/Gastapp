import { configDotenv } from "dotenv";
configDotenv();
export const Cluster=process.env.Cluster;
export const port=process.env.Port;