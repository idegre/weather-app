export type IMainData = {
	temp: number;
	pressure: number;
	humidity: number;
	temp_min: number;
	temp_max: number;
};

export type IWData = {
	coord: {
		lon: number;
		lat: number;
	};
	weather: {
		id: number;
		main: string;
		description: string;
		icon: string;
	}[];
	base: string;
	main: IMainData;
	visibility: number;
	wind: {
		speed: number;
		deg: number;
	};
	clouds: {
		all: number;
	};
	dt: number;
	sys: {
		sunrise: number;
		sunset: number;
	};
	id: number;
	name: string;
	cod: number;
};
