# GARAIO DevCamp 2022 Dapr/Docker track

This repository contains all the information related to the Dapr/Container track of the 2022 edition of the GARAIO DevCamp.

It aim to discover, learn and use some features supplied by Dapr and Docker containers.

## Variant A

We simulate a small grid where multiple energy producing systems are controlled to ensure a constant energy production.

Miight be too complex...

### Components

- Energy Meters located by the consumer
- Energy Producing Installation Control Unit
- Grid controling Unit
- Production Control Center

#### Energy Meters

Those device report periodically their measured consomation. They are passive and it cannot be operated remotely.

Implemented by a small piece of code reporting energy consumption every X-minutes over a REST-Api request. This is simplified, normaly the meters devices report over the electrical network their consumption to a concentrator. This one will report all the received consumption to the central system through a traditional Ethernet-based communication.

Sample request: `HTTP.POST`

```json
{
    "deviceId":"07b2b4f5-7b72-455d-9904-8ca9a0f71040"
    "samplingDate": "2017-09-08T19:01:55.714942+03:00"
    "counters":{
        "energy":123145133
        "tension":230
    }
}
```

#### Energy Producer Control Unit
This device can receive commands to control the energy production of a given power source. Known commands:
- Connect / Disconnect installation from/to the grid
- Increase / Decrease energy production (within the supported ranges)

The device exposes the following information about its state
- Current energy production (MW)
- Energy Production ranges (min and max)
- Status of the energy source (e.g. Water dam's reservoir)

The device might raises alarms emited to the grid control
- Energy production interupted (failure)
- Secondary energy source is empty


## Variant B

It simulates a fleet of machines being operated accross the country or even furthe. They periodilcaly report their current activities and status. 

Information are gathered by a centralized controling center that, based on the reported information trigger actions.

Actions are send to mechanics or other maintenance workforce to work on the individual machines.

The employees receiving the order to act on machine will have to clock-in/clock-out their activities on the machines.

Central operators can view the state of all machines, the pending activities by machine or workforce, and the completed tasks and their associated info.



## How to use

_To come_

## Concept
