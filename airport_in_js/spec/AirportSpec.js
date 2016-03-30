describe("Airport", function() {
  var airport;
  var plane;


  beforeEach(function() {
    airport = new Airport();
    plane = "plane";
  });

  it("has an empty planes array", function(){
    expect(airport.planes.length).toEqual(0);
  });

  it("is initialised with a default capacity ", function(){
    expect(airport.capacity).toEqual(20);
  });

  describe("#allowLanding",function(){
    it("calls the plane to land", function(){
      _setWeatherSunny();
      airport.allowLanding(plane);
      expect(airport.planes.length).toEqual(1);
    });

    it("Cannot land if airport is full", function(){
      _setWeatherSunny();
      for(i=1; i<=20; i++) {
        airport.allowLanding(plane);
      }
      console.log(airport.planes.length);
      expect(function() {airport.allowLanding(plane);}).toThrowError("Cannot land airport full")
    });

    it("throws error if trying to land in a storm",function(){
      _setWeatherStormy();
      expect(function() {airport.allowLanding(plane);}).toThrowError("Cannot land in a storm")
    });
  });

  describe("#allowTakeOff",function(){
    it("calls the plane to take off", function(){
      _setWeatherSunny();
      airport.allowLanding(plane);
      airport.allowTakeOff(plane);
      expect(airport.planes.length).toEqual(0);
    });
    it("throws error if trying to take off in a storm",function(){
      _setWeatherStormy();
      expect(function() {airport.allowTakeOff(plane);}).toThrowError("Cannot take off in a storm")
    });
  });

  function _setWeatherStormy() {
    spyOn(Math, "random").and.returnValue(1);
  };

  function _setWeatherSunny() {
    spyOn(Math, "random").and.returnValue(5);
  }
});
