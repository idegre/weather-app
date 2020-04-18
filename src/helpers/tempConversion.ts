export const cToK = (temp: number, decimals?: number) =>
	(temp - 273.15).toFixed(decimals || 2);
