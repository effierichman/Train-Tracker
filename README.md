# Project Overview


## Train Tracker

**Project decription:** An app that will let the user enter location either by a search bar but probably with a pin. Then the user will be able to find train station, routes, times, delays sent to them in real time.

## API Snippet

```

  "type": "FeatureCollection",
  "features": [
    {"type":"Feature","properties":{"name":"Astor Pl","url":"http://web.mta.info/nyct/service/","line":"4-6-6 Express","objectid":"1","notes":"4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"},"geometry":{"type":"Point","coordinates":[-73.99106999861966,40.73005400028978]}},{"type":"Feature","properties":{"name":"Canal St","url":"http://web.mta.info/nyct/service/","line":"4-6-6 Express","objectid":"2","notes":"4 nights, 6-all times, 6 Express-weekdays AM southbound, PM northbound"},"geometry":{"type":"Point","coordinates":[-74.00019299927328,40.71880300107709]}},{"type":"Feature","properties":{"name":"50th St","url":"http://web.mta.info/nyct/service/","line":"1-2","objectid":"3","notes":"1-all times, 2-nights"},"geometry":{"type":"Point","coordinates":[-73.98384899986625,40.76172799961419]}},{"type":"Feature","properties":{"name":"Bergen St","url":"http://web.mta.info/nyct/service/","line":"2-3-4","objectid":"4","notes":"4-nights, 3-all other times, 2-all times"},"geometry":{"type":"Point","coordinates":[-73.97499915116808,40.68086213682956]}},{"type":"Feature","properties":{"name":"Pennsylvania Ave","url":"http://web.mta.info/nyct/service/","line":"3-4","objectid":"5","notes":"4-nights, 3-all other times"},"geometry":{"type":"Point","coordinates":[-73.89488591154061,40.66471445143568]}},{"type":"Feature","properties":{"name":"238th St","url":"http://web.mta.info/nyct/service/","line":"1","objectid":"6","notes":"1-all times, exit only northbound"},"geometry":{"type":"Point","coordinates":[-73.90087000018522,40.88466700064975]}},{"type":"Feature","properties":{"name":"Cathedral Pkwy (110th St)","url":"http://web.mta.info/nyct/service/","line":"A-B-C","objectid":"7","notes":"A-nights, B-weekdays and evenings, C-all times exc nights"},"geometry":{"type":"Point","coordinates":[-73.95806670661364,40.800581558114956]}},{"type":"Feature","properties":{"name":"Kingston - Throop Aves","url":"http://web.mta.info/nyct/service/","line":"A-C","objectid":"8","notes":"A-nights, C-all other times"},"geometry":{"type":"Point","coordinates":[-73.94085899871263,40.67991899941601]}},{"type":"Feature","properties":{"name":"65th St","url":"http://web.mta.info/nyct/service/",
```

## Wireframes

<img src='Pics/20200124_130408 (1).jpg'>

### MVP  
- Find and use external api for both open data and mapbox
- Render data on page 
- get live updates for train schedules, stop, time and delays


### Post-MVP
- Allow user to choose favorites using local storage
- Advanced real time updates
- fetch user location


#### PostMVP EXAMPLE:
- live directions

## React Component Hierarchy

<img src='Pics/20200124_131029.jpg>

## Components

| Component | Description |Type |
| header | will hold logo and nav | functional |
| footer | copyright | functional |
| map | hold map data | functional |
| delay list | uupdated delay lists | functional |
| train list | every line  | functional |
| stop and station list | holds data for both station and stops | functional |


## Priority Matrix

Include an image of your Priority Matrix (X is time and Y is priority)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| header | M |  3hr | 0 | 0 |
| map | H |  10hr | 4HR | 0 |
| open data api | H |  10hr | 2HR | 0 |
| footer | L |  2hr | 0 | 0 |
| delay list | M |  10hr | 0 | 0 |
| stop and station list | H |  10hr | 0 | 0 |
| directions | M |  10hr | 0 | 0 |

| Total | H | 55hrs| 6hrs | 6hrs |

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Jan 24th| Project Pitch / Wireframes / Priority Matrix / Functional Components | Incomplete
|Jan 27th| Have complete access and control of both apis | Incomplete
|Jan 28th| Pseudocode / actual code | Incomplete
|Jan 29th| see if i can fully finish mvp  | Incomplete
|Jan 30th| MVP/post mvp | Incomplete
|Jan 31tst| Present | Incomplete

## Additional Libraries
|React Router | be able to route to different pages|
|axios| be able to get both my apis|

## Issues and Resolutions

|geting my api| going to try over the weekend to get them to work|

## Code Snippet

Use this section to include a brief code snippet you are proud of, along with a brief description of why.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made in your overall planning and the reasoning behind those changes.  