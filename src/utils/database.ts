import mongoose, { ConnectOptions } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
	if (isConnected) {
		console.log('Mongo Database is already connected!');
		return;
	}

	try {
		mongoose.connect(process.env.MONGO_DATABASE_URI!, {
			dbName: 'share_prompt',
			// useNewUrlParser: true,
			// useUnifiedTopology: true,
		} as ConnectOptions);

		isConnected = true;

		console.log('Mongo Database connected');
	} catch (error) {
		console.log(error);
	}
};
