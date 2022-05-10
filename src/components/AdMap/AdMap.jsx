import React, { useEffect } from 'react'
import { Map, Placemark, YMaps } from 'react-yandex-maps'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { assignAdLabel } from '../../helpers/assignAdLabel'
import { getAllPetsThunk } from '../../redux/thunks/getAllPetsThunk'
import './adMap.sass'

function AdMap () {
  // перенести в родительский элемент?
  const dispatch = useDispatch()
  useEffect(() => { dispatch(getAllPetsThunk()) }, [])
  // перенести в родительский элемент?
  const DBO = useSelector((store) => store.getAllPets)
  const id = useParams()
  
  const theAd = DBO.filter((el) => el.id === Number(id.id))
  const theAdCoordinates = [theAd[0]?.latitude, theAd[0]?.longitude]
  const theAdTitle = theAd[0]?.title
  const theAdAddress = theAd[0]?.address
  return (
    <YMaps>
      <div className="admap">
        {/* необходим дизайн? */}
        <Map defaultState={{ center: theAdCoordinates, zoom: 14 }} width="70%" height="500px">
          {/* необходим дизайн? */}
          <Placemark
            key={Number(id.id)}
            modules={['geoObject.addon.balloon']}
            geometry={theAdCoordinates}
            properties={{
              balloonContentHeader: theAdTitle,
              balloonContent: theAdAddress,
            }}
            options={{
              preset: [assignAdLabel(theAd[0]?.species)],
            }}
          />
        </Map>
      </div>
    </YMaps>
  )
}

export default AdMap
