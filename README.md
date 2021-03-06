# Larnaca Places


### Contents:

- [Description](#description).
- [App URL](#app-url).
- [React App Hierarchy](#react-app-hierarchy).
- [Dependencies](#dependencies).
- [App Characteristics](#app-characteristics).
- [Installation](#installation).
- [License](#license).


## Description

- This is a React project from Udacity Front-End Nanodegree.
- It is a neighborhood map shows some places, attractions, service location in this neighborhood area.
- It consists of two major sections:
  1. Side menu section.
  2. Map section.
- Side menu section:
  - It contains a text box filter that filter places in the list below it and filter markers on map.
  - The list contains all places by default when loaded (before filtration).
  - Clicking an item in the list produce a marker animation and shows an info windo with some data about the place.
- Map section:
  - Shows a map of the neighborhood with all the markers displayed (before filtration)
  - Clicking any marker shows an info window with some data about the place.
  
## App URL

- https://larnaca-places.netlify.com/
  
## React App Hierarchy
  
  ```bash
├── <App />
        ├── <Places />
        |       ├── <Header />
        |       └── <SearchForm />
        ├──<Burger />
        |
        ├──<Map />
        |
        ├──<FailedRequest />
        |
        └──<FailedMapRequest />
```


## Dependencies

- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial).
  - For loading map. 
  - displaying map markers
  - displaying info windows.
- [Foursquare Places API](https://developer.foursquare.com/places-api).
  - For fetching places in a neighborhood.
  - get place details: name, location, category, photo, likes, and rating.
  
  
## App Characteristics

### Responsive Design:

 - It can be displayed and used with full functionality over different view ports of different devices from the smallest mobile device to the widest screen.
 
 ![mobile view](https://github.com/Islam888/larnaca-places/blob/master/mobile-view2.png)
 
 ![ipad view](https://github.com/Islam888/larnaca-places/blob/master/mobile-view.png)
 
 ![Desktop view](https://github.com/Islam888/larnaca-places/blob/master/desktop.png)
 
 
### Accessibility:
  1. *Tab order*: organized and logically ordered.
  2. *Focus*: is clear, trapped inside side menu when it is full screen, and added to unfocusable elements.
  3. *Semantic elements*: are used where possible.
  4. *Aria roles*: are present for non semantic elements.
  5. *Aria labels*: are present for labeling elements like text box.
  6. *Sectioning and Land mark elements*: are used where possible.
  7. *Accessible images*: that use alternative text.
  8. *Assessitive devices friendly*.
  
### Offline Use:
 - Application is available offline in production mood, not in development mood.
 
 
## Installation
 
  - Download a compressed version from [here](https://github.com/Islam888/larnaca-places/archive/master.zip).
  - Decompress the app.
  - In your terminale locate the app directory and run `npm install`.
  - To run development mood:
    1. After finishing run `npm start`.
    2. A browser tab will open at a localhost port 3000.
  - To run production mood:
    1. run `npm run build`.
    2. Then to serve it with a static server run `npm install -g serve`.
    3. Then run `serve -s build`.

  
  
## License

- This project is licensed under the terms of the [MIT](https://github.com/Islam888/larnaca-places/blob/master/LICENSE.md).
 
