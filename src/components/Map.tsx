import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import {
    useQuery,
} from '@tanstack/react-query'

const Map = () => {

    const { isPending, error, data } = useQuery({
        queryKey: ['mapdata'],
        queryFn: () =>
            fetch('https://disease.sh/v3/covid-19/countries')
                .then((res) => 
                    res.json()   
                ).then((data) => {
                    // console.log(data)
                    return data
                })
    })

    if (isPending) return <>'Loading...'</>

    if (error) return <>An error has occurred:  {error.message}</>


    return (
        <div className=' h-96  '>
            <MapContainer center={[51.505, -0.09]} zoom={5} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; 
                    <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    data.map((country: any) => (
                        <Marker position={[country.countryInfo.lat, country.countryInfo.long]}>
                            <Popup>
                                <div>
                                {country.country}
                                </div>
                                <div>
                                    Total casses: {country.cases}
                                </div>
                            </Popup>
                        </Marker>
                    ))
                }
                {/* <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </MapContainer>
        </div>
    )
}

export default Map