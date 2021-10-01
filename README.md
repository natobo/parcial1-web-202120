# NBA Players

### Configuración inicial 🔧

1. Realizar el fork del repositorio

2. Clonar el repositorio

3. Instalar npm modules
   ```bash
   npm install
   ```
4. Ejecutar servidor
   ```bash
   npm run start
   ```
5. Ir a **http://localhost:3000** para ver la pantalla inicial

## Endpoint pairPlayerInch

La url por defecto es **http://localhost:3000**

- GET {{url}}/api/pairPlayerInch/:height

Si existen dos jugadores que la suma de sus alturas sea el parametro height entonces retorna
```bash
 {
   "message":"Found 2 couples for 139 height (in inch)",
   "couples":"[[{\"first_name\":\"Brevin\",\"h_in\":\"70\",\"h_meters\":\"1.78\",\"last_name\":\"Knight\"},{\"first_name\":\"Nate\",\"h_in\":\"69\",\"h_meters\":\"1.75\",\"last_name\":\"Robinson\"}],[{\"first_name\":\"Nate\",\"h_in\":\"69\",\"h_meters\":\"1.75\",\"last_name\":\"Robinson\"},{\"first_name\":\"Mike\",\"h_in\":\"70\",\"h_meters\":\"1.78\",\"last_name\":\"Wilks\"}]]"
 }
```
Si no existen retorna el siguiente mensaje:

```bash
{
   "message":"There is no pair of players that match for height 0 (in inch) "
}
```