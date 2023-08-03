export interface Mappable {
    location:{
        lat:number,
        lng:number
    }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(mappable:Mappable) {
    addUserMaker(){}
    addCompanyMarker(){
        
    }
  }
}
