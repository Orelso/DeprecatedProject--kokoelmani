export function toUnixTS(data: Date): number {
	return Math.floor(data.getTime() / 1000);
}

export const sleep = (time: number): Promise<void> => {
	return new Promise((resolve) => setTimeout(resolve, time));
};
