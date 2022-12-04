import {
  TAchivement,
  EPictureDescription,
} from 'src/components/Achivement'
import {
  BASE_URL, STORAGE_BASE_URL
} from 'src/constants'

function isPicture(achivement: TAchivement) {
  const {
    startTimestamp,
    endTimestamp,
    company,
    position,
    description,
    image_cid,
  } = achivement

  if (
    !endTimestamp
    && !company
    && !position
    && description
    && image_cid
  ) {
    return Object.values(EPictureDescription)
      .includes(description)
  }
  return false
}

function filterOutPictures(
  achivements: Array<TAchivement>
): Array<TAchivement> {
  return achivements.filter(isPicture)
}

function filterOutAchivements(
  achivements: Array<TAchivement>
): Array<TAchivement> {
  return achivements.filter(
    (achivement: TAchivement) => {
      return !isPicture(achivement)
    }
  )
}



export async function postGetAchivements(bodyData: {
  uid: string,
}) {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/achievements/get_owned_achievement`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const res = await response.json()

    return filterOutAchivements(res.data)
  } catch(e) {
    console.log(e)
    return null
  }
}

export async function getProfilePictures(bodyData: {
  uid: string,
}) {
  const body = JSON.stringify(bodyData)
  const url = `${BASE_URL}/achievements/get_owned_achievement`
  try {
    const response = await fetch(url, {
      method: 'POST',
      body,
    })
    const res = await response.json()

    const relatedAchivements = filterOutPictures(res.data)
    const profileAchivement = relatedAchivements
      .find(
        (achivement: TAchivement) => {
          return achivement.description
            == EPictureDescription.PROFILE
        }
      )
    const backgroundAchivement = relatedAchivements
      .find(
        (achivement: TAchivement) => {
          return achivement.description
            == EPictureDescription.BACKGROUND
        }
      )

    const pics = {
      profile: profileAchivement
        ? `${STORAGE_BASE_URL}/${profileAchivement.image_cid}`
        : null,
      background: backgroundAchivement
        ? `${STORAGE_BASE_URL}/${backgroundAchivement.image_cid}`
        : null,
    }

    return pics
  } catch(e) {
    console.log(e)
    return null
  }
}
