import axios from 'axios'

const clientId =
  '55d72cd26f7da18c2b8d5d7f66e70bc8b52a556c3b4225db7f96749655c902df'

const api = () =>
  axios
    .get(
      `https://api.unsplash.com/photos?client_id=${clientId}&order_by=popular`
    )
    .then(response => {
      const photos = response.data.map(photo => ({
        name: photo.user.name,
        avatar: photo.user.profile_image.small,
        photo: photo.urls.small
      }))
      return { photos }
    })

export default api
