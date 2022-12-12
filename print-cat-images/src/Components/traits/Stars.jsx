import { useEffect } from "react"
import { useState } from "react"


function Stars( value ) {

    const [stars, setStars] = useState()

    useEffect(() => {
        setStars(value.value)
    }, [value] )

  return (
    <div>
        <>
            {stars > 0 && <> # </>}
            {stars > 1 && <> # </>}
            {stars > 2 && <> # </>}
            {stars > 3 && <> # </>}
            {stars > 4 && <> # </>}
        </>
    </div>
  )
}

export default Stars