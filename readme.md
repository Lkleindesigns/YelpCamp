# YelpCamp

## Initial Setup
* Add Landing Page
* Add Campgrounds Page that lists all campgrounds
* Each campground has:
    * Name
    * Image

## Layout and Basic Styling
* Create header and footer partials
* Add in Bootstrap

## Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

## Style the campgrounds page
* Add a better header/title
* Make campgrounds display in a grid

## Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

## Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes

## Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

## Refactor Mongoose code
* Create a models dir
* use module.exports
* require everyting properly

## Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts


## Add Comments model
* Make our errors go away
* Diplay comments on campground show page


## Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form


## Comment New/Create
* Discuss nested routes
    * campgrounds/:id/comments/new  GET
    * campgrounds/:id/comments      POST
* Add the comment new and create routes
* Add the new comment form

## Style Show Page
* Add sidebar to showpage
* Display comments nicely

## Finish Styling Show Page
* Add public directory
* Add custom stylesheet

# Authorization

## Auth Pt. 1 Add User Model
* Install all packages needed for auth
* Define User model

## Auth Pt. 2 Register
* Configure Passport
* Add register routes
* Add register template

## Auth Pt. 3 Login
* Add login routes
* Add login template

## Auth Pt. 4 Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

## Auth Pt. 5 Show/Hide
* Show/Hide auth links in navbar correctly

## Refactor The Routes
* Use Express router to reorganize all routes

## Users + Comments
* Assosciate users and comments
* Save author's name to a comment automatically


## Users + Campgrounds
* Prevent a unauthenticated user from creating a campground
* Save username+id to newly created campground

## Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route

## Deleting Campgrounds
* Add Destroy Route
* Add Delete Button

# Authorization
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

## Editing Comments
* Add Edit route for comments
* Add Edit Comment button
* Add Update Comment route
  * /campgrounds/:id/edit --> req.params.id + /edit
  * /campgrounds/:id/comments/:comment_id/edit--> req.params.comment_id

## Deleting Comments
* Add Destroy Route
* Add Delete Button
    * Campgrounds Destroy Route: /campgrounds/:id                    = req.params.id
    * Comments Destroy Route: /campgrounds/:id/comments/:comment_id  = req.params.comment_id

## Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

## Adding in Flash
* Demo working version
* Install and configure connect-flash
* Add boostrap alerts to header

### RESTFUL ROUTES
name     url              verb      Description
==============================================
INDEX    /dogs            GET       Dsiplay a list of all dogs
NEW      /dogs/new        GET       Displays form to make a new dog
CREATE   /dogs            POST      Add new dog to DB
SHOW     /dogs/:id        GET       Shows info about one dog
EDIT     /dogs/:id/edit   GET       Shows edit form for specific ID
UPDATE   /dogs/:id        PUT       Updates a dog, then redirects
DESTROY  /odgs/:id        DELETE    Delete a particular dog, then redirect
