/** @format */

import mongoose from "mongoose";

export const connectMongo = async () => {
	mongoose.connect(process.env.MONGODB_URI);
};
// import { connectMongo } from '../../../../lib/connectMongo';
// connectMongo().catch((error) => res.json({ error: 'Connection Failed.... ' }));
