declare class Route {
	constructor(spec: string);
	match(pathname: string): { [i: string]: string } | false;

	reverse(params: { [i: string]: any }): string | false;
}

declare namespace Route { }
export = Route;