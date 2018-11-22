'use strict';
/**
 * Objeto que contiene los codigos HTTP permitidos de forma estandar.
 * 
 */
exports.StatusCode = {
	Bad_Request: 400,
	Unauthorized: 401,
	Forbidden: 403,
	Not_Found: 404,
	Unprocessable_Entity: 422,
	Internal_Server_Error: 500,
	Bad_Gateway: 502,
	Gateway_Timeout: 504,
	Conflict: {
		code: 409,
		message: 'La solicitud no se pudo procesar debido a un conflicto en los recursos'
	}
}

/**
 * Fabrica que genera los mensajes de error para las funciones.
 *
 * @param {Integer} statusCode Codigo HTTP a regresar
 * @param {Any} message Mensaje de error a regresar
 * @returns Objeto estandar conforme a las convenciones de AWS
 */
exports.errorMessage = (statusCode, message) => {
	//TODO Validate message system
	return {
		statusCode: statusCode,
		body: JSON.stringify({
			message: message
		})
	}
}

/**
 * Fabrica que genera los mensajes de exito para las funciones
 *
 * @param {Any} data Datos a regresar
 * @returns Objeto estandar conforme a las convenciones de AWS
 */
exports.successMessage = (data) => {
	return {
		statusCode: 200,
		body: JSON.stringify({
			data: data
		})
	};
}