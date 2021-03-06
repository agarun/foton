<a href="https://fotons.herokuapp.com"><img width=11% src="https://i.imgur.com/oeMTlZq.png"></a>
&nbsp;&nbsp;
<a href="https://fotons.herokuapp.com"><img width=18% src="https://i.imgur.com/nDoJ5zp.png"></a>

[Foton](https://fotons.herokuapp.com) is a single-page application clone of [500px](https://500px.com/), a website for sharing and discovering photos.  
Foton uses Ruby on Rails with a PostgreSQL database on the back end, and React together with Redux on the front end.

<p align="center">
<a href="https://fotons.herokuapp.com"><img width=91% src="https://i.imgur.com/SPb2a3R.png" /></a>
</p>

## Key Features
* [User Profiles](#users)
* [Photo Uploads](#photo-uploads)
* [Photo Feed](#photo-feed)
* [Search & Tags](#search)
* [Discover Photos & Users](#discover)

### Users
Visitors can sign up or log in to the site.

Users can view their own profile or visit and follow other users. Profiles are routed by `/:username` by overriding the User model's `to_param` method. Follow actions are available through Rails `member` routes.

<p align="center">
<img width=85% src="https://i.imgur.com/1U1ssM1.png" />
</p>

Users can edit their profiles by updating their information or changing their profile and cover photos.

<p align="center">
<img width=85% src="https://i.imgur.com/1Hfkj5I.png" />
</p>

Profile images are related to users by `is_profile_photo` and `is_cover_photo` boolean fields. The booleans are stored in the `photos` table with PSQL partial indexes. These photos are accessible by scoped Rails associations:
```rb
has_one :cover_photo, -> { where is_cover_photo: true }
has_one :profile_photo, -> { where is_profile_photo: true }
```

Users can see their followers & following list in small modals from their profile page. The data is only fetched *if* a user chooses to open either display, and the data will persist in Redux state should they click on another list on the site with some of the same users.

### Photo Uploads
Users can upload photos, which are stored in Amazon Web Services S3 buckets. They can add a title, description, or multiple tags when uploading.

Users can also edit their photos in their *Manage* console.

<p align="center">
<img width=85% src="https://i.imgur.com/tXYWzMn.png" />
</p>

### Photo Feed
The user home page is an infinitely scrolling photo feed of their own & their followees' recent posts. Several React virtualized higher-order components are used to handle rendering each photo on the feed. Scrolling past the threshold sends an AJAX request to the Rails API with the next index, which then returns the next page of photos in JSON.

<p align="center">
<img src="https://media.giphy.com/media/3ohc0QaTzNSePJw1W0/giphy.gif" />
</p>

Users can click on any photo on the site to visit the photo's page in a modal. Photo pages have information about the photo and let users follow the author or like the image.   

Photo modals are routed - clicking a photo on the site opens the modal in place with its URL - so a user can copy and send the `/photos/:photoId` link to friends and retain the photo display in a full page instead. Each Modal is rendered based on `showModal` Redux state managed with a `ModalRoot` component.

<p align="center">
<img width=85% src="https://i.imgur.com/B9C9t5Q.png" />
</p>

### Search
Foton uses PostgreSQL full text search scopes to enable searching photos by details and tags, or users by usernames or locations.

<p align="center">
<img width=45% src="https://i.imgur.com/pqr1RZb.png" />

<img width=45% src="https://i.imgur.com/tiuVVMi.png" />
</p>

The photo gallery used by the search, discover, and profile pages is a reusable component that implements a pure CSS image layout based on each image's width and height.

### Discover
Popular tags and users are picked to be shown on the discover page. Users can browse a random selection of photos for each tag in a carousel or click on a recommended user. Users can also visit an *Editors Choice* page to view a predetermined selection of photos.

<p align="center">
<img width=85% src="https://i.imgur.com/0bWmgQ5.png" />
</p>

## Technologies

- [react-virtualized](https://github.com/bvaughn/react-virtualized) - Infinite scrolling and dynamically rendering photos of different heights
- [kaminari](https://github.com/kaminari/kaminari) - Paginating rails queries
- [react-select](https://github.com/JedWatson/react-select) - Multiselecting input fields in tag creation
- [paperclip-meta](https://github.com/teeparham/paperclip-meta) - Extracting image width & height attributes for a responsive gallery and resizeable carousels
  - [CSS responsive gallery layout article](https://github.com/xieranmaya/blog/issues/6)

## Future Directions
- Elasticsearch integration, fuzzy queries and typeaheads with typeahead.js
- Google Maps API integration for searching by photo location & proximity
- Image lazy loading, photo processing with filters, and pulling image Exif data
- Drag and drop multi file uploads with Dropzone.js
- Favoriting photos & building albums
