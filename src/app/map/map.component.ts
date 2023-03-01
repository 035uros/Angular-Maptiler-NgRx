  import { Component, OnInit } from '@angular/core';
  import { environment } from 'src/environments/environment';
  import maplibregl from 'maplibre-gl';
  import { Store, select } from '@ngrx/store';
  import { Observable } from 'rxjs';
  import { setMap, centerAllPins, setListOfPins } from '../reducers/counter.actions';
  import { MapState } from '../reducers/counter.reducer';

  @Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
  })
  export class MapComponent implements OnInit{

    listOfPins: any;
    map: any;

  ngOnInit(){

    const key = environment.mapboxKey;
    this.map = new maplibregl.Map({
      container: 'mapa-mapbox', 
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${key}`,
      center: [20.89813600, 44.01888800], 
      zoom: 14, 
    });

    // @ts-ignore
    var nav = new maplibregl.NavigationControl();
    this.map.addControl(nav, 'top-left');
    

    this.listOfPins = [
        { name: 'Faculty of Engeneering', lat: 44.01877669559832, lng: 20.905223246772806, map:this.map },
        { name: 'Faculty of Economics', lat: 44.023206888641596, lng: 20.922320746765365, map:this.map },
        { name: 'Faculty of Science', lat: 44.01750850, lng: 20.90733160, map:this.map },
        { name: 'Faculty of Pharmacy', lat: 44.01604956166719, lng: 20.907552282333114, map:this.map },
        { name: 'Faculty of Art', lat: 44.02323820, lng: 20.92147880, map:this.map }
      ];

    

    for(let i=0; i<this.listOfPins.length; i++){
      this.setPin(this.listOfPins[i].name, this.listOfPins[i].lng, this.listOfPins[i].lat, this.listOfPins[i].map);
    }

    this.centerAll();

      /*this.map = this.store.pipe(select(state => state.map.map));

      this.store.dispatch(setListOfPins({listOfPins: this.listOfPins}));
      this.store.dispatch(setMap({ map: this.map }));*/
    }

    handleClick() { 
      this.centerAll();
    } 
  
    setPin(name: string, lng: number, lat: number, map) {
      var marker = new maplibregl.Marker({
          draggable:true
        })
        .setLngLat([lng, lat])
        .setPopup(new maplibregl.Popup().setHTML("<h3>" +  name  + "</h3>"))
        .addTo(map);

        marker.on('drag', () => {
          const obj = this.listOfPins.findIndex((x: { name: any; }) => x.name === name);
            this.listOfPins[obj].lat = marker.getLngLat().lat;
            this.listOfPins[obj].lng = marker.getLngLat().lng;
        })

      let markerel = marker.getElement()
      markerel.addEventListener('click', (e) => {
        map.flyTo({
          center: [marker.getLngLat().lng, marker.getLngLat().lat],
          zoom: 18
          });
      })
    }

    centerAll(){
      let lng=0;
      let lat=0;
      for(let i=0; i<this.listOfPins.length; i++){
        lng=lng+this.listOfPins[i].lng;
        lat=lat+this.listOfPins[i].lat;
        }
      this.map.flyTo({
        center: [lng/this.listOfPins.length, lat/this.listOfPins.length],
        zoom: 13
      });
    }
  }