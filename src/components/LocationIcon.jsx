import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const LocationIcon = ({color}) => {
    const [ hover, setHover ] = React.useState(false)
    
    return (
        <LocationOnIcon 
            style={{color: hover ? `dark${color}` : color, transform: "scale(1.3)"}} 
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        />
    )
} 

export default LocationIcon