export const FETCH_MODELS_PENDING = "catalog/FETCH_MODELS_PENDING";
export const FETCH_MODELS_FULLFILLED = "catalog/FETCH_MODELS_FULLFILLED";
export const FETCH_MODELS_REJECTED= "catalog/FETCH_MODELS_REJECTED";
export const FETCH_MAKES_PENDING = "catalog/FETCH_MAKES_PENDING";
export const FETCH_MAKES_FULLFILLED = "catalog/FETCH_MAKES_FULLFILLED";
export const FETCH_MAKES_REJECTED= "catalog/FETCH_MAKES_REJECTED";
export const FETCH_CAROF_WEEK_PENDING = "catalog/FETCH_CAROF_WEEK_PENDING";
export const FETCH_CAROF_WEEK_FULLFILLED = "catalog/FETCH_CAROF_WEEK_FULLFILLED";
export const FETCH_CAROF_WEEK_REJECTED = "catalog/FETCH_CAROF_WEEK_REJECTED";


export type Action =
	| { type: FETCH_MODELS_PENDING, data: Object }
	| { type: FETCH_MODELS_FULLFILLED, data: Object }
	| { type: FETCH_MODELS_REJECTED, data: Object }
	| { type: FETCH_MAKES_PENDING, data: Object }
	| { type: FETCH_MAKES_FULLFILLED, data: Object }
	| { type: FETCH_MAKES_REJECTED, data: Object }
	| { type: FETCH_CAROF_WEEK_PENDING, data: Object }
	| { type: FETCH_CAROF_WEEK_FULLFILLED, data: Object  }
	| { type: FETCH_CAROF_WEEK_REJECTED, data: Object  }
	;