# 📚 Documentação da API

## Base URL
```
http://localhost:3001/api
```

## Autenticação
Todas as requisições autenticadas devem incluir o header:
```
Authorization: Bearer <token>
```

## Endpoints

### 🔐 Autenticação

#### POST /auth/register
Registrar novo usuário
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123",
  "userType": "driver" // "driver" | "transportadora"
}
```

#### POST /auth/login
Login de usuário
```json
{
  "email": "joao@email.com",
  "password": "senha123"
}
```

### 🏷️ TAGs

#### GET /tags
Listar TAGs do usuário

#### POST /tags
Cadastrar nova TAG
```json
{
  "number": "TAG123456",
  "balance": 100.00,
  "vehicleId": "vehicle-id"
}
```

#### PUT /tags/:tagId
Atualizar TAG

#### DELETE /tags/:tagId
Deletar TAG

### 🚗 Veículos

#### GET /vehicles
Listar veículos

#### POST /vehicles
Cadastrar novo veículo
```json
{
  "plate": "ABC1234",
  "model": "Volvo FH",
  "category": "truck",
  "tagId": "tag-id"
}
```

#### PUT /vehicles/:vehicleId
Atualizar veículo

#### DELETE /vehicles/:vehicleId
Deletar veículo

### 💳 Pagamentos

#### POST /payments
Realizar pagamento
```json
{
  "tollId": "toll-id",
  "amount": 25.50,
  "method": "pix", // "pix" | "card" | "tag" | "advance"
  "vehicleId": "vehicle-id"
}
```

#### GET /payments/history
Histórico de pagamentos

#### GET /payments/:paymentId
Detalhes do pagamento

### 📍 Pedágios

#### GET /tolls
Listar pedágios próximos
```
Query params:
- latitude: number
- longitude: number
- radius: number (km)
```

#### GET /tolls/:tollId
Detalhes do pedágio

### 🚦 Filas

#### GET /queues/:tollId
Status da fila em tempo real
```json
{
  "tollId": "toll-id",
  "status": "free", // "free" | "moderate" | "intense"
  "waitTime": 5,
  "vehicles": 12
}
```

### 🧾 Comprovantes

#### GET /receipts/:paymentId
Obter comprovante

#### POST /receipts/:paymentId/download
Download do comprovante

#### POST /receipts/:paymentId/share
Compartilhar comprovante

## Códigos de Status

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Tratamento de Erros

Todas as respostas de erro seguem este formato:
```json
{
  "error": "Descrição do erro",
  "code": "ERROR_CODE",
  "details": {}
}
```
