The idea of this project is to study and implement an Event Driven Architecture system.

# Stack

## Services: 

### Orders
- Go
- PostgreSQL

### Tenants 
- Bun
- TypeScript
- PostgreSQL
- Redis

### Payment
- Bun
- TypeScript
- PostgreSQL or MongoDB (still deciding)

## Event Broker
- Apacha Kafka

Architecture Principles: The services dont know about the existence of any other, they will throw events inside the Event Broker(Kafka) and the other services will do what they need to do based on the event, but the creator of the event doesn't know about the existence of anything that is dealing with that event

# First Idea: 

## Tenants
Tenants microsservice will be responsbile for the information from each specific tenant, Items, Revenue, Expenses, Historic of number of orders. 

## Orders
Orders microsservice will be responsible for sending events about Orders with their Tenant's respective id

## Payments

Payments microsservice will be responsible for storing all payments history (that's why Im thinking of having a MongoDB) and for processing the payment when a OrderCreated Event is launched.