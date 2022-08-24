# GARAIO DevCamp 2022 Dapr/Docker track

This repository contains all the information related to the Dapr/Container track of the 2022 edition of the GARAIO DevCamp.

It aim to discover, learn and use some features supplied by Dapr and Docker containers.

## Machine monitoring simulation

It simulates a fleet of machines being operated accross the country or even furthe. They periodilcaly report their current activities and status. 

Information are gathered by a centralized controling center that, based on the reported information trigger actions.

Actions are send to mechanics or other maintenance workforce to work on the individual machines.

The employees receiving the order to act on machine will have to clock-in/clock-out their activities on the machines.

Central operators can view the state of all machines, the pending activities by machine or workforce, and the completed tasks and their associated info.

- Machines
  Periodicaly post a status message to a Queue using a Dapr Endpoint
- Logistic Center
  - Receives shippment orders through Dapr communication (pub/sub)
  - Persists spare part inventory
  - Exposes method to retrive current inventory state of spare part
- Maintenance Workforce
  - Receives intervention orders to maintain and fix machines
  - Receives confirmation spare parts have been delivered to the machine's location (unblock maintenance activities)
- Operation Centter


## How to use

_To come_

## Concept
