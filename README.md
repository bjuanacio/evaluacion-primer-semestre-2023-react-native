# Evaluación Semestral 2023
Para el desarrollo del proyecto debe guiarse de los siguientes estándares.

Estándares de React: https://pichincha.atlassian.net/wiki/spaces/CDSRL/pages/2566488133/ETD+-+React<br>

Debe utilizar la metodología Atomic Design.


## API Routes

| Método | Ruta                           | Descripción                                     | Respuesta Exitosa                                                                                                                                                  |
| ------ | ------------------------------ | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | http://localhost:3100/code     | Obtiene un código                               | - Código de estado: 200 (OK)<br>- Tipo de contenido: application/json<br>- Cuerpo de respuesta: Una cadena de texto con el formato "N2X7D-1" representando el código generado. |
| POST   | http://localhost:3100/validate | Valida un código y un email                     | - Código de estado: 200 (OK)<br>- Tipo de contenido: application/json<br>- Cuerpo de la petición:<br> "code": string<br>"email": string<br>Ejemplo:<br>``` {"code":"1234","email": "email"}```<br>- Cuerpo de respuesta: Un valor booleano representando si el código y el email son válidos.   |
