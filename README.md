#Maybe Undefined

> Because I hate 'cannot get X of undefined'

##API

```
const person = {
  name: 'Tim',
  location: {
    city: 'New York',
    state: 'New York',
    coords: {
      lat: 123,
      lng: 123
    }
  }
},
      query = 'location.coords.lat',
      badQuery = 'location.coords.geo.notExistant',
      lat = maybe(person,query), // 123
      geo = maybe(person,badQuery), // undefined
      geoDefault = maybe(person,badQuery,'default value') // 'default value'
```