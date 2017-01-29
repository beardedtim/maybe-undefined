const expect = require('chai').expect
const maybe = require('./index')

describe('maybe-undefined',()=>{
  it('returns the value from an object given a dot-seperated key string',()=>{
    const obj = {
      name: 'Tim',
      age: 28,
      location: {
        city: 'New York',
        state: 'New York',
        location: {
          lat: 123,
          lng: 123
        }
      }
    },
        value = 'location.state',
        name = 'name'
    expect(maybe(obj,value)).to.equal('New York')
    expect(maybe(obj,name)).to.equal('Tim')
    expect(maybe(obj,'location')).to.deep.equal({
      city: 'New York',
      state: 'New York',
      location: {
        lat: 123,
        lng: 123
      }
    })
  })
  
  it('returns undefined if no default value is given and it reaches an undefined value',()=>{
    const obj = {},
          query = 'name'
    expect(maybe(obj,query)).to.equal(undefined)
    expect(maybe(obj,'name.location')).to.equal(undefined)
  })
  
  it('returns the given default value if something is undefined along the way',()=>{
    const obj = {},
          query = 'name'
    expect(maybe(obj,query,'Tim')).to.equal('Tim')
    const withProps = {
      name: 'Tim',
      location: {
        city: 'New York',
        state: 'New York',
        coords: {
          lat: 123,
          lng: 123
        }
      }
    }
    expect(maybe(withProps,'location.coords.geo','default')).to.equal('default')
  })
})