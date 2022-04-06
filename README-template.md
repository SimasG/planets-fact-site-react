TODOS:

1.  Display only the first planet (Mercury) by default -> DONE
2.  Populate the data for one planet -> DONE
3.  Populate the data for all planets -> WIP
4.  Add click handlers for each link -> DONE
5.  Implement Overview/Surface/Structure functionality -> WIP
6.  Implement different planet dimensions -> DONE
7.  Make everything mobile-friendly

VIEWPORT SIZE -> DONE

- If vw < 768px, size => small
- If vw > 768px, size => medium
- If vw > 1250px, size => large

TABS

- If currentTab = "overview" => images.overview
- If currentTab = "structure" => images.internal
- If currentTab = "surface" => images.geology

                  background: `${
                    currentTab === "overview" &&
                    `url(${planetData[currentPlanet].images.planet}) center center / ${planetData[currentPlanet].size[currentPlanetSize]} no-repeat`
                  } ${
                    currentTab === "structure" &&
                    `url(${planetData[currentPlanet].images.internal}) center center / ${planetData[currentPlanet].size[currentPlanetSize]} no-repeat`
                  } ${
                    currentTab === "geology" &&
                    `url(${planetData[currentPlanet].images.geology}) center center / ${planetData[currentPlanet].size[currentPlanetSize]} no-repeat`
                  }`,
