interface ConstructorOptions {
	datacenter?: number;
	worker?: number;
	id?: number;
	epoch?: number;
	seqMask?: number;
}

declare namespace FlakeId { }

declare class FlakeId {
	constructor(options?: ConstructorOptions);
	next(callback?: (err: Error, id: Buffer) => void): Buffer;
}

export = FlakeId;
