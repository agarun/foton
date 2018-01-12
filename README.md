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
* [Discover](#discover)

### Users
Visitors can sign up or log in to the site.

Users can view their own profile or visit and follow other users. Profiles are routed by `/:username` by overriding the User model's `to_param` method. Follow actions are available through Rails `member` routes.

Users can edit their profiles by updating their information or changing their profile and cover photos.

Profile images are related to users by `is_profile_photo` and `is_cover_photo` boolean fields. The booleans are stored in the `photos` table with PSQL partial indexes and are accessible by scoped Rails associations:
```rb
has_one :cover_photo, -> { where is_cover_photo: true }
has_one :profile_photo, -> { where is_profile_photo: true }
```

### Photo Uploads
Users can upload photos, which are stored in Amazon Web Services S3 buckets. They can add a title, description, or multiple tags when uploading.

Users can also edit their photos in their *Manage* console.


### Photo Feed
Logged in users' home page is an infinitely scrolling photo feed of their followees' recent posts.   

Users can click on any photo to visit the photo's page in a modal. Photo pages have information about the photo and let users follow the author or like the image.   
Modals are routed, so a user can send the `/photos/:photoId` link to friends and retain the photo display in a full page.


### Search
Foton uses PostgreSQL full text search scopes to enable searching photos by details and tags, or users by usernames or locations.

The photo gallery used by the search and profile pages uses a pure CSS image layout based on each image's width and height values.

### Discover
Popular tags and users are picked to be shown on the discover page. Users can browse photos from the returned tags in a carousel or choose to follow a user or visit their profile. Users can also visit an *Editors Choice* page to view a selection of photos.

### Technologies

- [react-virtualized](): Infinite scrolling and dynamically rendering photo feed & query paging
- [kaminari](): Paginating rails queries
- [react-select](): Multiselecting input fields during tag creation
- [paperclip-meta](): Extracting image width & height attributes for a responsive gallery and resizeable carousels

## Future Directions
- Elastic search, fuzzy queries and typeaheads with typeahead.js
- Google Maps API integration for searching by photo location & proximity
- Photo processing with filters & pulling image Exif data
- Drag and drop multi file uploads with Dropzone.js
