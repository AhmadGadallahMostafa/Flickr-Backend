define({ "api": [
  {
    "type": "get",
    "url": "/user/about/:userid",
    "title": "Get about user.",
    "version": "0.0.0",
    "name": "GetAbout",
    "group": "About",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userid",
            "description": "<p>Id given to the created user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of profile written by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "secondName",
            "description": "<p>Second name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "getPro",
            "description": "<p>tell the account is pro or not.</p>"
          },
          {
            "group": "Success 200",
            "optional": true,
            "field": "object[]",
            "description": "<p>followers Array of followers ids.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "following",
            "description": "<p>Array of following ids.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "occupation",
            "description": "<p>Occupation entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "hometown",
            "description": "<p>Hometown entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "currentCity",
            "description": "<p>Currentcity entered by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Website that belongs to user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "facebook",
            "description": "<p>Link to the user profile on facebook.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "profilePic",
            "description": "<p>Id of the profile pic.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{  \n \"description\": \"a profile for beaty\",\n\"firstname\": \"abdallah\",\n\"secondname\": \"shedid\",\n\"age\": 20,\n\"email\": \"dezz@gmail.com\",\n\"followers\": [],\n\"following\": [],\n\"occupation\": \"giza\",\n\"hometown\": \"giza\",\n\"currentCity\": \"giza\",\n\"website\": \"www.host.com\",\n\"facebook\": \"facebook.com\",\n\"profilePic\": null\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "Error",
            "description": "<p>The server can not find the requested resource.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\":\"MailNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/GetAbout.js",
    "groupTitle": "About"
  },
  {
    "type": "patch",
    "url": "/user/about",
    "title": "update about user.",
    "version": "0.0.0",
    "name": "UpdateAbout",
    "group": "About",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userid",
            "description": "<p>Id given to the created user through header.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Description of profile written by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "occupation",
            "description": "<p>Occupation entered by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hometown",
            "description": "<p>Hometown entered by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "currentCity",
            "description": "<p>Currentcity entered by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "website",
            "description": "<p>Website that belongs to user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "facebook",
            "description": "<p>Link to the user profile on facebook.</p>"
          },
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "profilePic",
            "description": "<p>Id of the profile pic.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n \" message\":\"About updated\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "Error",
            "description": "<p>The server can not find the requested resource.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "Error",
            "description": "<p>The server can not find the requested resource.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Error\n{\n  \"error\":\"AuthFailed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/UpdateAbout.js",
    "groupTitle": "About"
  },
  {
    "type": "post",
    "url": "/album",
    "title": "Creating an album",
    "version": "0.0.0",
    "name": "createAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Album.album_owner",
            "description": "<p>Owner of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Album.name",
            "description": "<p>Name of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Album.description",
            "description": "<p>Description of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Album.date_created",
            "description": "<p>Date of the creation of the album.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Album is created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>User already created an album with the same name.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 409 Conflict\n{\n\"error\":\"Conflict\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/album.js",
    "groupTitle": "Album"
  },
  {
    "type": "delete",
    "url": "/album/:albumid",
    "title": "Deleting a album",
    "version": "0.0.0",
    "name": "deleteAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album._id",
            "description": "<p>Id for the album to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n \"Album deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/album.js",
    "groupTitle": "Album"
  },
  {
    "type": "patch",
    "url": "/album/:albumid",
    "title": "editing a album",
    "version": "0.0.0",
    "name": "editAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Id of the owner of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "album.id",
            "description": "<p>Id of the album to edit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Album.name",
            "description": "<p>Name of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Album.description",
            "description": "<p>Description of the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "Album.photo",
            "description": "<p>Ids of the photo in the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Album.items",
            "description": "<p>Number of the photos in the album.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Album.views",
            "description": "<p>Number of people visited the album.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Album has been successfully edit\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Can't edit the date of creation.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 409 Conflict\n{\n\"error\":\"Conflict\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/album.js",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/album/:albumId",
    "title": "viewing a album",
    "version": "0.0.0",
    "name": "viewAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "album._id",
            "description": "<p>Id for the Album to retrieve.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Album",
            "description": "<p>The album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album._id",
            "description": "<p>The id of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album.album_owner",
            "description": "<p>The id of the album's owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album.name",
            "description": "<p>The name of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album.description",
            "description": "<p>The description for the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Album.date_created",
            "description": "<p>The date creation of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Album.photo",
            "description": "<p>The ids of photo in the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Album.items",
            "description": "<p>The number of photos in the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Album.views",
            "description": "<p>The number of people viewed the album.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"album\": {\n      \"photo\": [\n          \"6095ba9f6d749d4118f81c5a\",\n          \"60962d6a7ec3991a1c27ac33\",\n          \"60962e042ed573136808be1a\"\n      ],\n      \"_id\": \"60b552a7c98ae7412c4189ba\",\n      \"album_owner\": \"60b31d5861a92c049847a354\",\n      \"name\": \"Real Madrid\",\n      \"description\": \"Real Madrid 2016/17 highlights\",\n      \"date_created\": \"2021-03-12T00:00:00.000Z\",\n      \"items\": 3,\n      \"views\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The album was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"NotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/album.js",
    "groupTitle": "Album"
  },
  {
    "type": "get",
    "url": "/album/user-albums/:userId",
    "title": "viewing albums",
    "version": "0.0.0",
    "name": "viewAlbum",
    "group": "Album",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>Id for the user to view his albums.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>The number of albums that the user owns.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "albums",
            "description": "<p>The albums of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album._id",
            "description": "<p>The id of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album.album_owner",
            "description": "<p>The id of the album's owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album.name",
            "description": "<p>The name of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Album.description",
            "description": "<p>The description for the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "Album.date_created",
            "description": "<p>The date creation of the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "Album.photo",
            "description": "<p>The ids of photos in the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Album.items",
            "description": "<p>The number of photos in the album.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Album.views",
            "description": "<p>The number of people viewed the album.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"count\": 3,\n  \"album\": [\n      {\n          \"album\": {\n              \"photo\": [\n                  \"6095ba9f6d749d4118f81c5a\",\n                  \"60962d6a7ec3991a1c27ac33\",\n                  \"60962e042ed573136808be1a\"\n              ],\n              \"_id\": \"60b552a7c98ae7412c4189ba\",\n              \"album_owner\": \"60b31d5861a92c049847a354\",\n              \"name\": \"Football\",\n              \"description\": \"Champions league matches\",\n              \"date_created\": \"2021-03-12T00:00:00.000Z\",\n              \"items\": 3,\n              \"views\": 1\n          }\n      },\n      {\n          \"album\": {\n              \"photo\": [\n                  \"6095ba9f6d749d4118f81c5a\"\n              ],\n              \"_id\": \"60b556e6aa007c4ba8c8a363\",\n              \"album_owner\": \"60b31d5861a92c049847a354\",\n              \"name\": \"Sky\",\n              \"description\": \"Moon, sun, and galaxies\",\n              \"date_created\": \"2021-03-12T00:00:00.000Z\",\n              \"items\": 1,\n              \"views\": 0\n          }\n      },\n      {\n          \"album\": {\n              \"photo\": [\n                  \"6095ba9f6d749d4118f81c5a\"\n              ],\n              \"_id\": \"60b556eeaa007c4ba8c8a364\",\n              \"album_owner\": \"60b31d5861a92c049847a354\",\n              \"name\": \"Pets\",\n              \"description\": \"Cats and dogs\",\n              \"date_created\": \"2021-03-12T00:00:00.000Z\",\n              \"items\": 1,\n              \"views\": 0\n          }\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/album.js",
    "groupTitle": "Album"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "Login.",
    "version": "0.0.0",
    "name": "Login",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "Email",
            "description": "<p>User Email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{   \"message\":\"auth success\",\n      \"token\":\"asjdoi7r323lkfdslh38838338fds\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized client\n{\n  \"message\":\"AuthFailed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Login.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "/camera/:cameraid",
    "title": "Deleting a camera",
    "version": "0.0.0",
    "name": "DeleteCamera",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera._id",
            "description": "<p>ID for the camera to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n \"Camera has been successfully deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/camera.js",
    "groupTitle": "Camera"
  },
  {
    "type": "patch",
    "url": "/camera/:cameraid",
    "title": "Editing a camera",
    "version": "0.0.0",
    "name": "DeleteCamera",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "camera._id",
            "description": "<p>ID for the camera to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n \"Camera has been edited successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Can't change the owner of the camera.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 409 Conflict\n{\n\"error\":\"Conflict\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/camera.js",
    "groupTitle": "Camera"
  },
  {
    "type": "post",
    "url": "/camera/:userid",
    "title": "Creating a Camera",
    "version": "0.0.0",
    "name": "createCamera",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera.name",
            "description": "<p>Name for the camera.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera.camera_owner",
            "description": "<p>Id of the owner of the camera.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera.brand",
            "description": "<p>The camera brand.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera.camera_type",
            "description": "<p>The camera type.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "camera.sensor_resolution",
            "description": "<p>Sensor resolution for the camera.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "camera.lcd_size",
            "description": "<p>The lcd size for the camera.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera.media_type",
            "description": "<p>The media type for the camera.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "camera.weight",
            "description": "<p>The weight of the camera.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "camera.lens_mount",
            "description": "<p>The lens mount for the camera.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "camera.photo",
            "description": "<p>The ids of photos that the camera captured.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Camera is created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>This photo is not found.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>There is a camera already that exists with the same name.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"NotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 409 Conflict\n{\n\"error\":\"Conflict\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/camera.js",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/camera/:cameraid",
    "title": "Know more about the camera",
    "version": "0.0.0",
    "name": "getCameraInformation",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "camera._id",
            "description": "<p>ID for the camera to get information for it.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "camera",
            "description": "<p>The camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera._id",
            "description": "<p>The id for camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.name",
            "description": "<p>Name for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.camera_owner",
            "description": "<p>Id of the owner of the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.brand",
            "description": "<p>The camera brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.camera_type",
            "description": "<p>The camera type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "camera.sensor_resolution",
            "description": "<p>Sensor resolution for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "camera.lcd_size",
            "description": "<p>The lcd size for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.media_type",
            "description": "<p>The media type for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "camera.weight",
            "description": "<p>The weight of the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.lens_mount",
            "description": "<p>The lens mount for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "camera.photo",
            "description": "<p>The ids of photos that the camera captured.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"camera\": {\n      \"media_type\": [\n          \"CompactFlash\"\n      ],\n      \"photo\": [\n          \"6095ba9f6d749d4118f81c5a\",\n          \"60962d6a7ec3991a1c27ac33\"\n      ],\n      \"_id\": \"60b3528f7b4b9e51a4d8f876\",\n      \"name\": \"EOS 5D Mark III\",\n      \"brand\": \"Canon\",\n      \"camera_type\": \"Digital SLR\",\n      \"sensor_resolution\": 22.3,\n      \"lcd_size\": 3.2,\n     \"weight\": 10,\n      \"lens_mount\": \"Canon EF\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>The camera was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"NotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/camera.js",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/camera",
    "title": "to retrieve information for all cameras",
    "version": "0.0.0",
    "name": "getInformationAboutAllCameras",
    "group": "Camera",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>The number of camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "camera",
            "description": "<p>The cameras.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.name",
            "description": "<p>Name for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera._id",
            "description": "<p>The id for camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.camera_owner",
            "description": "<p>The id for the owner of the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.brand",
            "description": "<p>The camera brand.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.camera_type",
            "description": "<p>The camera type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "camera.sensor_resolution",
            "description": "<p>Sensor resolution for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "camera.lcd_size",
            "description": "<p>The lcd size for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.media_type",
            "description": "<p>The media type for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "camera.weight",
            "description": "<p>The weight of the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "camera.lens_mount",
            "description": "<p>The lens mount for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "camera.photo",
            "description": "<p>The ids of photos that the camera captured.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"count\": 1,\n  \"camera\": [\n      {\n          \"_id\": \"60b634bff73ac21f18394b26\",\n          \"name\": \"adadmaff\",\n          \"camera_owner\": \"60b31d5861a92c049847a354\",\n          \"brand\": \"canon\",\n          \"camera_type\": \"fa\",\n          \"sensor_resolution\": 3,\n          \"lcd_size\": 5,\n          \"media_type\": [\n              \"fafafa\"\n          ],\n          \"weight\": 2,\n          \"lens_mount\": \"dad\",\n          \"photo\": [\n              \"6095ba9f6d749d4118f81c5a\"\n           ]\n      }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/camera.js",
    "groupTitle": "Camera"
  },
  {
    "type": "Post",
    "url": "/groups/discussions",
    "title": "Creating New discussion",
    "version": "0.0.0",
    "name": "createDiscussion",
    "group": "Discussion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>UserID for the user wants to create the Discssion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>id for the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Discussion descrption</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Discussion.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "discussionId",
            "description": "<p>returns the ID of the created discussion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"discussionId\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 407": [
          {
            "group": "error 407",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not Found</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  HTTP/1.1 400 BadRequest\n  {\n    \"error\": \"Bad Request\"\n  }\n  HTTP/1.1 401 UnauthorizedAuthentication\n  {\n    \"error\": \"UnauthorizedAuthentication\"\n  } \n\n  HTTP/1.1 403 Forbidden\n  {\n    \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n  }\n  HTTP/1.1 404 IDNotFound\n  {\n    \"error\": \"IDNotFound\"\n  }\n   HTTP/1.1 405 MissingArgument\n  {\n    \"error\": \"MissingArgument\"\n  }\n      HTTP/1.1 406 InvalidParameters\n  {\n    \"error\": \"the passed parameters aren't valid\"\n  } \n\n  HTTP/1.1 407 InvalidRequest\n  {\n    \"error\": \"a group already exist with the same name\"\n  }\n    HTTP/1.1 408 RequestTimeout\n  {\n    \"error\": \"The server timed out waiting for the request.\"\n  } \n\n  HTTP/1.1 418 OperationFailed\n  {\n    \"error\": \"operation failed due to a temporary issue\"\n  }\n  \n       HTTP/1.1 429 TooManyRequests\n  {\n    \"error\": \"The user has sent too many requests\"\n  }\n\nHTTP/1.1 430 GroupIDNotFound\n  {\n    \"error\": \"GroupIDNotFound\"\n  }\n      HTTP/1.1 500 InternalServerError\n  {\n    \"error\": \"The server is not responding.\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_addDiscussion.js",
    "groupTitle": "Discussion"
  },
  {
    "type": "DELETE",
    "url": "/groups/discussions/:discussionId",
    "title": "deleting New discussion",
    "version": "0.0.0",
    "name": "deleteDiscussion",
    "group": "Discussion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>UserID for the user wants to delete the Discssion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>id for the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "discussionId",
            "description": "<p>to delte the discussion.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "discussionId",
            "description": "<p>returns the ID of the created discussion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"discussionId\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 407": [
          {
            "group": "error 407",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 400 BadRequest\n{\n  \"error\": \"Bad Request\"\n}\nHTTP/1.1 401 UnauthorizedAuthentication\n{\n  \"error\": \"UnauthorizedAuthentication\"\n} \n\nHTTP/1.1 403 Forbidden\n{\n  \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n}\nHTTP/1.1 404 IDNotFound\n{\n  \"error\": \"IDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\n    HTTP/1.1 406 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\n\nHTTP/1.1 407 InvalidRequest\n{\n  \"error\": \"a group already exist with the same name\"\n}\n\n  HTTP/1.1 408 RequestTimeout\n{\n  \"error\": \"The server timed out waiting for the request.\"\n}\n\n\nHTTP/1.1 418 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n\n\n     HTTP/1.1 429 TooManyRequests\n{\n  \"error\": \"The user has sent too many requests\"\n}\n HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"The server is not responding.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_deleteDiscussion.js",
    "groupTitle": "Discussion"
  },
  {
    "type": "PUT",
    "url": "/groups/discussions/:discussionId",
    "title": "Editing New discussion",
    "version": "0.0.0",
    "name": "editDiscussion",
    "group": "Discussion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>UserID for the user wants to create the Discssion.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>id for the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Discussion descrption</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>title of the Discussion.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "discussionId",
            "description": "<p>returns the ID of the created discussion.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"discussionId\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 407": [
          {
            "group": "error 407",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 400 BadRequest\n{\n  \"error\": \"Bad Request\"\n}\nHTTP/1.1 401 UnauthorizedAuthentication\n{\n  \"error\": \"UnauthorizedAuthentication\"\n} \n\nHTTP/1.1 403 Forbidden\n{\n  \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n}\n\nHTTP/1.1 404 IDNotFound\n{\n  \"error\": \"IDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\n    HTTP/1.1 406 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\nHTTP/1.1 407 InvalidRequest\n{\n  \"error\": \"a discussion already exist with the same name\"\n}\n\n HTTP/1.1 408 RequestTimeout\n{\n  \"error\": \"The server timed out waiting for the request.\"\n}\n\n\nHTTP/1.1 418 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n HTTP/1.1 429 TooManyRequests\n{\n  \"error\": \"The user has sent too many requests\"\n}\n\n   HTTP/1.1 430 GroupIDNotFound\n{\n  \"error\": \"GroupIDNotFound\"\n}\n\n    HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"The server is not responding.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_editDiscussion.js",
    "groupTitle": "Discussion"
  },
  {
    "type": "DELETE",
    "url": "/photos/photo/favorite/:photoId",
    "title": "Delete a favorite from a photo",
    "version": "0.0.0",
    "name": "DeleteFavorite",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token given at login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of photo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"message\": \"removed favorite\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No photo with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409\n{\n  \"message\": \"user didn't favorite the photo\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "GET",
    "url": "/photos/photo/favorite/:photoId",
    "title": "Returns number of users who favorited photo",
    "version": "0.0.0",
    "name": "DeleteFavorite",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of users who favorited the photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"count\": 120\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No photo with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404\n{\n  \"message\": \"photo does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "GET",
    "url": "/photos/user-favorite/",
    "title": "Get list of user favorite photos",
    "version": "0.0.0",
    "name": "GetUserFavorites",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token given at login</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Number of photos favorited by the user photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "favoritePhotos",
            "description": "<p>Array of photos favorited by user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n \"count\": 1,\n \"favoritePhotos\": [\n     {\n         \"isPublic\": true,\n         \"taggedPeople\": [],\n         \"tags\": [],\n         \"favoritesIds\": [\n             \"60b3e33ac8ef3754a49c30b5\"\n         ],\n         \"views\": 10,\n         \"_id\": \"60b3ed5b72370b373c141cd1\",\n         \"authorId\": \"60b3e33ac8ef3754a49c30b5\",\n         \"title\": \"test\",\n         \"description\": \"test\",\n         \"date\": \"2021-05-30T19:54:03.976Z\",\n         \"photoPath\": \"C:\\\\Users\\\\3600\\\\Desktop\\\\Flickr-Backend\\\\photos\\\\162240444388512.jpg\",\n         \"__v\": 0\n     }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>No user with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 \n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "POST",
    "url": "/photos/photo/favorite/:photoId",
    "title": "Add a favorite to a photo",
    "version": "0.0.0",
    "name": "PostFavorite",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token given at login</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of photo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\": \"added favorite\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No Photo with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 \n{\n  \"message\": \"photo does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "put",
    "url": "user/follow",
    "title": "Follow another user.",
    "version": "0.0.0",
    "name": "Follow",
    "group": "Follows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "token",
            "description": "<p>Token sent in header.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "followingrUserId",
            "description": "<p>Unique ID of the anothe user i want to follow.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{   \"following\" : [ \n    ObjectId(\"60b4fd7418731149cc261862\")]\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict \n{\n  \"error\": \"AlreadyFollows\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/AddFollow.js",
    "groupTitle": "Follows"
  },
  {
    "type": "Get",
    "url": "user/followers/:userid",
    "title": "Get followers.",
    "version": "0.0.0",
    "name": "GetFollowers",
    "group": "Follows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userid",
            "description": "<p>Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \"followers\" : [ \n    ObjectId(\"60b5135b6b2756318c62b749\")] \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "ProfileNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ProfileNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/GetFollowers.js",
    "groupTitle": "Follows"
  },
  {
    "type": "Get",
    "url": "user/following/:userid",
    "title": "Get followers.",
    "version": "0.0.0",
    "name": "Getfollowing",
    "group": "Follows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userid",
            "description": "<p>Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \"following\" : [ \n    ObjectId(\"60b5135b6b2756318c62b749\")] \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "ProfileNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"ProfileNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Getfollowing.js",
    "groupTitle": "Follows"
  },
  {
    "type": "put",
    "url": "user/unfollow",
    "title": "Follow another user.",
    "version": "0.0.0",
    "name": "Unfollow",
    "group": "Follows",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "token",
            "description": "<p>Token sent in header.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "followingrUserId",
            "description": "<p>Unique ID of the anothe user i want to follow.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{   \"following\" : []\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 UnauthorizedAuthentication \n{\n  \"error\": \"AuthFailed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/DeleteFollow.js",
    "groupTitle": "Follows"
  },
  {
    "type": "Delete",
    "url": "/gallery/photo/:photoId&galleryId",
    "title": "deleting photo from gallery.",
    "version": "0.0.0",
    "name": "DeletePhotoToGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "galleryId",
            "description": "<p>Unique gallery ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "photoId",
            "description": "<p>Unique photo ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFoundInGallery",
            "description": "<p>The id of the photo was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\":\"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/DeletePhotoGallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "Get",
    "url": "/gallery/:galleryId",
    "title": "listing photos in gallery.",
    "version": "0.0.0",
    "name": "GetPhotos",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "galleryId",
            "description": "<p>unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "photo",
            "description": "<p>List of recently uploaded photos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photoUserId",
            "description": "<p>ID of Photo owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoDescription",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "photoDate",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoTitle",
            "description": "<p>Title of Photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n    id: 1223\n    userid: 1234\n    description: Summer time\n    date: 2002-12-09\n    title: Ocean madness\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "GalleryNotFound",
            "description": "<p>The id of the Gallery was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"GalleryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/GalleryPhoto.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "post",
    "url": "/gallery",
    "title": "Creating a gallery",
    "version": "0.0.0",
    "name": "createGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gallery.gallery_owner",
            "description": "<p>Owner of the gallery</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gallery.name",
            "description": "<p>Name of the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gallery.description",
            "description": "<p>Description of the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "gallery.date_created",
            "description": "<p>Date of the creation of the gallery.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Gallery is created successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>User already created a gallery with the same name.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 409 Conflict\n{\n\"error\":\"Conflict\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/gallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "delete",
    "url": "/gallery/:galleryid",
    "title": "Deleting a gallery",
    "version": "0.0.0",
    "name": "deleteGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gallery._id",
            "description": "<p>Id for the gallery to delete.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n \"Gallery deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/gallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "patch",
    "url": "/gallery/:galleryid",
    "title": "editing a gallery",
    "version": "0.0.0",
    "name": "editGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user._id",
            "description": "<p>Id of the owner of the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gallery._id",
            "description": "<p>Id of the gallery to edit.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gallery.name",
            "description": "<p>Name of the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gallery.description",
            "description": "<p>Description of the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "gallery.photo",
            "description": "<p>Ids of the photo in the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gallery.items",
            "description": "<p>Number of the photos in the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gallery.views",
            "description": "<p>Number of people visited the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "gallery.comments",
            "description": "<p>The comments on the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gallery.comments_number",
            "description": "<p>The number of comments on the gallery.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"Gallery has been successfully edit\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Can't edit the date of creation.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 409 Conflict\n{\n\"error\":\"Conflict\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/gallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "get",
    "url": "/gallery/:galleryId",
    "title": "viewing a gallery",
    "version": "0.0.0",
    "name": "viewGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gallery._id",
            "description": "<p>Id for the gallery to retrieve.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "gallery",
            "description": "<p>The gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery._id",
            "description": "<p>The id of the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery.gallery_owner",
            "description": "<p>The id of the gallery's owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery.name",
            "description": "<p>The name of the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery.description",
            "description": "<p>The description for the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "gallery.date_created",
            "description": "<p>The date creation of the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "gallery.photo",
            "description": "<p>The ids of photo in the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gallery.items",
            "description": "<p>The number of photos in the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gallery.views",
            "description": "<p>The number of people viewed the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "gallery.comments",
            "description": "<p>The comments on the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gallery.comments_number",
            "description": "<p>The number of comments on the gallery.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"gallery\": {\n      \"photo\": [\n          \"6095ba9f6d749d4118f81c5a\",\n          \"60962d6a7ec3991a1c27ac33\",\n          \"60962e042ed573136808be1a\"\n      ],\n      \"comments\": [\n          \"60b550941dd82b61bccaa227\",\n          \"60b550eb1dd82b61bccaa228\"\n      ],\n      \"_id\": \"60b552a7c98ae7412c4189ba\",\n      \"gallery_owner\": \"60b31d5861a92c049847a354\",\n      \"name\": \"Sky\",\n      \"description\": \"Moon, sun, and galaxies\",\n      \"date_created\": \"2021-03-12T00:00:00.000Z\",\n      \"items\": 3,\n      \"views\": 0,\n      \"comments_number\": 2\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "GalleryNotFound",
            "description": "<p>The gallery was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"GalleryNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/gallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "get",
    "url": "/gallery/user-galleries/:userId",
    "title": "viewing galleries",
    "version": "0.0.0",
    "name": "viewGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user._id",
            "description": "<p>Id for the user to view his galleries.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>The number of galleries that the user owns.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "galleries",
            "description": "<p>The galleries of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery._id",
            "description": "<p>The id of the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery.gallery_owner",
            "description": "<p>The id of the gallery's owner.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery.name",
            "description": "<p>The name of the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gallery.description",
            "description": "<p>The description for the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "gallery.date_created",
            "description": "<p>The date creation of the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "gallery.photo",
            "description": "<p>The ids of photos in the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gallery.items",
            "description": "<p>The number of photos in the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gallery.views",
            "description": "<p>The number of people viewed the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "gallery.comments",
            "description": "<p>The comments on the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "gallery.comments_number",
            "description": "<p>The number of comments on the gallery.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"count\": 3,\n  \"gallery\": [\n      {\n          \"gallery\": {\n              \"photo\": [\n                  \"6095ba9f6d749d4118f81c5a\",\n                  \"60962d6a7ec3991a1c27ac33\",\n                  \"60962e042ed573136808be1a\"\n              ],\n              \"comments\": [\n                  \"60b550941dd82b61bccaa227\",\n                  \"60b550eb1dd82b61bccaa228\"\n              ],\n              \"_id\": \"60b552a7c98ae7412c4189ba\",\n              \"gallery_owner\": \"60b31d5861a92c049847a354\",\n              \"name\": \"Football\",\n              \"description\": \"Champions league matches\",\n              \"date_created\": \"2021-03-12T00:00:00.000Z\",\n              \"items\": 3,\n              \"views\": 1,\n              \"comments_number\": 2\n          }\n      },\n      {\n          \"gallery\": {\n              \"photo\": [\n                  \"6095ba9f6d749d4118f81c5a\"\n              ],\n              \"comments\": [\n                  \"6095ba9f6d749d4118f81c5a\"\n              ],\n              \"_id\": \"60b556e6aa007c4ba8c8a363\",\n              \"gallery_owner\": \"60b31d5861a92c049847a354\",\n              \"name\": \"Sky\",\n              \"description\": \"Moon, sun, and galaxies\",\n              \"date_created\": \"2021-03-12T00:00:00.000Z\",\n              \"items\": 1,\n              \"views\": 0,\n              \"comments_number\": 1\n          }\n      },\n      {\n          \"gallery\": {\n              \"photo\": [\n                  \"6095ba9f6d749d4118f81c5a\"\n              ],\n              \"comments\": [\n                  \"6095ba9f6d749d4118f81c5a\"\n              ],\n              \"_id\": \"60b556eeaa007c4ba8c8a364\",\n              \"gallery_owner\": \"60b31d5861a92c049847a354\",\n              \"name\": \"Pets\",\n              \"description\": \"Cats and dogs\",\n              \"date_created\": \"2021-03-12T00:00:00.000Z\",\n              \"items\": 1,\n              \"views\": 0,\n              \"comments_number\": 1\n          }\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server encountered an unexpected condition that prevented it from fulfilling the request.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n\"error\":\"InternalServerError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/gallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "post",
    "url": "/user/get-pro/3-month",
    "title": "Get-pro 3-month.",
    "version": "0.0.0",
    "name": "Get-pro_3-month",
    "group": "GetPro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "streetAdress",
            "description": "<p>Street address put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>City put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country address put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cvc",
            "description": "<p>cvc put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>expiry date of the card put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Zipcode put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "creditCardNumber",
            "description": "<p>credit card number put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token sent through header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{   \"message\":\"GetProSuccessful\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized client\n{\n  \"message\":\"AuthFailed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/GetPro3-Month.js",
    "groupTitle": "GetPro"
  },
  {
    "type": "post",
    "url": "/user/get-pro/annual",
    "title": "Get-pro annualy.",
    "version": "0.0.0",
    "name": "Get-pro_annualy",
    "group": "GetPro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "streetAdress",
            "description": "<p>Street address put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>City put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country address put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cvc",
            "description": "<p>cvc put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>expiry date of the card put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Zipcode put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "creditCardNumber",
            "description": "<p>credit card number put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token sent through header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{   \"message\":\"GetProSuccessful\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized client\n{\n  \"message\":\"AuthFailed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/GetProAnnual.js",
    "groupTitle": "GetPro"
  },
  {
    "type": "post",
    "url": "/user/get-pro/monthly",
    "title": "Get-pro monthly.",
    "version": "0.0.0",
    "name": "Get-pro_monthly",
    "group": "GetPro",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Name put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "streetAdress",
            "description": "<p>Street address put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>City put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "country",
            "description": "<p>Country address put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cvc",
            "description": "<p>cvc put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "expiryDate",
            "description": "<p>expiry date of the card put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "zipCode",
            "description": "<p>Zipcode put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "creditCardNumber",
            "description": "<p>credit card number put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Token sent through header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{   \"message\":\"GetProSuccessful\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized client\n{\n  \"message\":\"AuthFailed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/GetProMonthly.js",
    "groupTitle": "GetPro"
  },
  {
    "type": "Post",
    "url": "/groups",
    "title": "Creating New group",
    "version": "0.0.0",
    "name": "creategroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>UserID for the user wants to create the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupName",
            "description": "<p>Name for the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "groupDescription",
            "description": "<p>description for the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "character",
            "optional": false,
            "field": "status",
            "description": "<p>Either R for private or P for public.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>returns the ID of the created group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"groupId\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 407": [
          {
            "group": "error 407",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 400 BadRequest\n{\n  \"error\": \"Bad Request\"\n}\nHTTP/1.1 401 UnauthorizedAuthentication\n{\n  \"error\": \"UnauthorizedAuthentication\"\n} \n\nHTTP/1.1 403 Forbidden\n{\n  \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n}\nHTTP/1.1 404 IDNotFound\n{\n  \"error\": \"IDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\n    HTTP/1.1 406 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\nHTTP/1.1 407 InvalidRequest\n{\n  \"error\": \"a group already exist with the same name\"\n}\n  HTTP/1.1 408 RequestTimeout\n{\n  \"error\": \"The server timed out waiting for the request.\"\n}\nHTTP/1.1 418 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n     HTTP/1.1 429 TooManyRequests\n{\n  \"error\": \"The user has sent too many requests\"\n}\n HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"The server is not responding.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_creategroup.js",
    "groupTitle": "Group"
  },
  {
    "type": "Delete",
    "url": "/groups",
    "title": "Deleting an already existing group",
    "version": "0.0.0",
    "name": "deletegroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>UserID for the user wants to remove the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>ID for the group.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>returns only 1 if successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"status\"=\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n HTTP/1.1 400 BadRequest\n{\n  \"error\": \"Bad Request\"\n}\nHTTP/1.1 401 UnauthorizedAuthentication\n{\n  \"error\": \"UnauthorizedAuthentication\"\n} \n\nHTTP/1.1 403 Forbidden\n{\n  \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n}\n\n\nHTTP/1.1 404 UserIDNotFound\n{\n  \"error\": \"UserIDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\n HTTP/1.1 406 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\n\n  HTTP/1.1 408 RequestTimeout\n{\n  \"error\": \"The server timed out waiting for the request.\"\n}\n\n\nHTTP/1.1 418 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n\n\n HTTP/1.1 429 TooManyRequests\n{\n  \"error\": \"The user has sent too many requests\"\n}\n\n    HTTP/1.1 430 GroupIDNotFound\n{\n  \"error\": \"GroupIDNotFound\"\n}\n\n HTTP/1.1 500 InternalServerError\n{\n  \"error\": \"The server is not responding.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_deletegroup.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/group/members/:groupId",
    "title": "returns a List of the group members and their IDs",
    "version": "0.0.0",
    "name": "getgroupmemberslist",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "GroupID",
            "description": "<p>group ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "membersNumber",
            "description": "<p>of members in the group.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "names",
            "description": "<p>List of size N has all group names.</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": false,
            "field": "Id",
            "description": "<p>'s List of size N has all group ID's.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"membersNumber\"=\"5\"\n  \"names\"=\"Ahmed , Ali , Mustafa , Aya , Asma\"\n  \"Id's\"=\"1187512 117861 1169712 118157 1175646\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " \n \n   HTTP/1.1 400 BadRequest\n {\n   \"error\": \"Bad Request\"\n }\n HTTP/1.1 401 UnauthorizedAuthentication\n {\n   \"error\": \"UnauthorizedAuthentication\"\n } \n\n HTTP/1.1 403 Forbidden\n {\n   \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n }\n\n\n  HTTP/1.1 405 MissingArgument\n {\n   \"error\": \"MissingArgument\"\n }\n\n   HTTP/1.1 406 InvalidParameters\n {\n   \"error\": \"the passed parameters aren't valid\"\n }\n\nHTTP/1.1 408 RequestTimeout\n {\n   \"error\": \"The server timed out waiting for the request.\"\n }\n\n\n HTTP/1.1 418 OperationFailed\n {\n   \"error\": \"operation failed due to a temporary issue\"\n }\n\n   HTTP/1.1 429 TooManyRequests\n {\n   \"error\": \"The user has sent too many requests\"\n }\n\n\n HTTP/1.1 430 GroupIDNotFound\n {\n   \"error\": \"GroupIDNotFound\"\n }\n \n   HTTP/1.1 500 InternalServerError\n {\n   \"error\": \"The server is not responding.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_groupmembergetlist.js",
    "groupTitle": "Group"
  },
  {
    "type": "Post",
    "url": "/groups/:groupId",
    "title": "Joining a Group",
    "version": "0.0.0",
    "name": "joingroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>The Id of the user who wants to join the group</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>returns only 1 if successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"status\"=\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 407": [
          {
            "group": "error 407",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>User is already in the group.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  HTTP/1.1 400 BadRequest\n {\n   \"error\": \"Bad Request\"\n }\n HTTP/1.1 401 UnauthorizedAuthentication\n {\n   \"error\": \"UnauthorizedAuthentication\"\n } \n\n HTTP/1.1 403 Forbidden\n {\n   \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n }\n\n\n  HTTP/1.1 405 MissingArgument\n {\n   \"error\": \"MissingArgument\"\n }\n\n   HTTP/1.1 406 InvalidParameters\n {\n   \"error\": \"the passed parameters aren't valid\"\n }\n\n  HTTP/1.1 407 InvalidRequest\n {\n   \"error\": \"can't join the group\"\n }\n\nHTTP/1.1 408 RequestTimeout\n {\n   \"error\": \"The server timed out waiting for the request.\"\n }\n\n\n HTTP/1.1 418 OperationFailed\n {\n   \"error\": \"operation failed due to a temporary issue\"\n }\n\n   HTTP/1.1 429 TooManyRequests\n {\n   \"error\": \"The user has sent too many requests\"\n }\n\n\n HTTP/1.1 430 GroupIDNotFound\n {\n   \"error\": \"GroupIDNotFound\"\n }\n \n   HTTP/1.1 500 InternalServerError\n {\n   \"error\": \"The server is not responding.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_joingroup.js",
    "groupTitle": "Group"
  },
  {
    "type": "Post",
    "url": "/group/:groupId",
    "title": "Leaving a group",
    "version": "0.0.0",
    "name": "leaveroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>group ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>The Id of the user who wants to leave the group</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>returns only 1 if successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"status\"=\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 407": [
          {
            "group": "error 407",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>account is already out of the group.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n   HTTP/1.1 400 BadRequest\n {\n   \"error\": \"Bad Request\"\n }\n HTTP/1.1 401 UnauthorizedAuthentication\n {\n   \"error\": \"UnauthorizedAuthentication\"\n } \n\n HTTP/1.1 403 Forbidden\n {\n   \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n }\n\n\n  HTTP/1.1 405 MissingArgument\n {\n   \"error\": \"MissingArgument\"\n }\n\n   HTTP/1.1 406 InvalidParameters\n {\n   \"error\": \"the passed parameters aren't valid\"\n }\n\n  HTTP/1.1 407 InvalidRequest\n {\n   \"error\": \"can't leave the group\"\n }\n\nHTTP/1.1 408 RequestTimeout\n {\n   \"error\": \"The server timed out waiting for the request.\"\n }\n\n\n HTTP/1.1 418 OperationFailed\n {\n   \"error\": \"operation failed due to a temporary issue\"\n }\n\n   HTTP/1.1 429 TooManyRequests\n {\n   \"error\": \"The user has sent too many requests\"\n }\n\n\n HTTP/1.1 430 GroupIDNotFound\n {\n   \"error\": \"GroupIDNotFound\"\n }\n \n   HTTP/1.1 500 InternalServerError\n {\n   \"error\": \"The server is not responding.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_leavegroup.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/groups/:groupId",
    "title": "Search for a group and returns its information",
    "version": "0.0.0",
    "name": "searchgroup",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>group ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "membersNumber",
            "description": "<p>Number of members of the group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>group description.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "adminId",
            "description": "<p>group's Admin ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>whether public or private.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"membersNumber\"=\"30\"\n  \"description\"=\"for the students of the faculty of engineering\"\n  \"adminId\"=\"1180123\"\n  \"status\"=\"Private\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n  HTTP/1.1 400 BadRequest\n {\n   \"error\": \"Bad Request\"\n }\n HTTP/1.1 401 UnauthorizedAuthentication\n {\n   \"error\": \"UnauthorizedAuthentication\"\n } \n\n HTTP/1.1 403 Forbidden\n {\n   \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n }\n\n\n  HTTP/1.1 405 MissingArgument\n {\n   \"error\": \"MissingArgument\"\n }\n\n   HTTP/1.1 406 InvalidParameters\n {\n   \"error\": \"the passed parameters aren't valid\"\n }\n\nHTTP/1.1 408 RequestTimeout\n {\n   \"error\": \"The server timed out waiting for the request.\"\n }\n\n HTTP/1.1 418 OperationFailed\n {\n   \"error\": \"operation failed due to a temporary issue\"\n }\n\n  HTTP/1.1 429 TooManyRequests\n {\n   \"error\": \"The user has sent too many requests\"\n }\n\n\n\n HTTP/1.1 430 GroupIDNotFound\n {\n   \"error\": \"GroupIDNotFound\"\n }\n \n   HTTP/1.1 500 InternalServerError\n {\n   \"error\": \"The server is not responding.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_groupinfo.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "user/message/:userid",
    "title": "Send message.",
    "version": "0.0.0",
    "name": "SendMessage",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "UserId",
            "description": "<p>Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Other user email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{   success:true\n\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n  success:false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/SendMessage.js",
    "groupTitle": "Message"
  },
  {
    "type": "GET",
    "url": "/photos/user-notifications/",
    "title": "Get notifications for a given user",
    "version": "0.0.0",
    "name": "GetNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token given at login</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>Size of notfications</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "notifications",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notifications.id",
            "description": "<p>ID of notificaiton</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notifications.info",
            "description": "<p>Content of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notifications.date",
            "description": "<p>Date of notification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n   \"count\": 1,\n   \"notifications\": [\n       {\n           \"_id\": \"60b68e1622e89449bc7c5426\",\n           \"date\": \"2021-06-01T19:44:22.502Z\",\n           \"info\": \"abdallaah favorited your test photo\"\n       }\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>No user with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 \n{\n  \"error\": \"user does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Notification"
  },
  {
    "type": "DELETE",
    "url": "/photos/photo/:photoId",
    "title": "Delete photo",
    "version": "0.0.0",
    "name": "DeletePhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token when loggrd in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of Photo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     \"message\": \"photo deleted successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No photo with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401\n{\n  \"error\": \"you are not authorized to delete this photo\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "GET",
    "url": "/photos/photo-info/:photoId",
    "title": "Returns photo info with the given id without the photo",
    "version": "0.0.0",
    "name": "GetPhotoInfo",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "photoInfo",
            "description": "<p>Photo object that contains the data</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo._id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo.authorId",
            "description": "<p>ID of Photo owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo.title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "photoInfo.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "photoInfo.isPublic",
            "description": "<p>Photo is visible to public or private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo.taggedPeople",
            "description": "<p>Array of tagged people</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo.cameraName",
            "description": "<p>Name of the camera that took the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo.photoPath",
            "description": "<p>Location of photo storage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photoInfo.favoritesIds",
            "description": "<p>Array of userIds that favorited the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photoInfo.views",
            "description": "<p>Number of people viewed the photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n  \"photoInfo\": {\n    \"isPublic\": true,\n    \"taggedPeople\": [],\n    \"tags\": [],\n    \"favoritesIds\": [],\n    \"views\": 6,\n    \"_id\": \"60b3ed5b72370b373c141cd1\",\n    \"authorId\": \"60b3e33ac8ef3754a49c30b5\",\n    \"title\": \"test\",\n    \"description\": \"test\",\n    \"date\": \"2021-05-30T19:54:03.976Z\",\n    \"photoPath\": \"C:\\\\Users\\\\3600\\\\Desktop\\\\Flickr-Backend\\\\photos\\\\162240444388512.jpg\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404\n{\n  \"message\": \"photo does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "GET",
    "url": "/photos/photo/:photoId",
    "title": "Returns photo itself",
    "version": "0.0.0",
    "name": "GetPhotoInfo",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": "<p>The photo itself</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No photo with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 \n{\n  \"message\": \"photo does not exist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "GET",
    "url": "/photos/:limit",
    "title": "Returns list of recently uploaded photos without the photo",
    "version": "0.0.0",
    "name": "GetPhotos",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>Number of photos to return</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of returned photos</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "photos",
            "description": "<p>List of recently uploaded photos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos._id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.authorId",
            "description": "<p>ID of Photo owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "photos.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "photos.isPublic",
            "description": "<p>Photo is visible to public or private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.taggedPeople",
            "description": "<p>Array of tagged people</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.cameraName",
            "description": "<p>Name of the camera that took the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.photoPath",
            "description": "<p>Location of photo storage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.favoritesIds",
            "description": "<p>Array of userIds that favorited the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photos.views",
            "description": "<p>Number of people viewed the photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n     \"size\": 1,\n     \"photos\": [\n          {\n           \"isPublic\": true,\n           \"taggedPeople\": [],\n           \"tags\": [],\n           \"favoritesIds\": [],\n           \"views\": 6,\n           \"_id\": \"60b3ed5b72370b373c141cd1\",\n           \"authorId\": \"60b3e33ac8ef3754a49c30b5\",\n           \"title\": \"test\",\n           \"description\": \"test\",\n           \"date\": \"2021-05-30T19:54:03.976Z\",\n           \"photoPath\": \"C:\\\\Users\\\\3600\\\\Desktop\\\\Flickr-Backend\\\\photos\\\\162240444388512.jpg\",\n           \"__v\": 0\n          }\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"message\": \"ServerNotResponding\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "GET",
    "url": "/photos/user-photos/:userId",
    "title": "Returns photos uploaded by given user",
    "version": "0.0.0",
    "name": "GetUserPhotos",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of returned photos</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "photos",
            "description": "<p>List of recently uploaded photos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos._id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.authorId",
            "description": "<p>ID of Photo owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "photos.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "photos.isPublic",
            "description": "<p>Photo is visible to public or private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.taggedPeople",
            "description": "<p>Array of tagged people</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.cameraName",
            "description": "<p>Name of the camera that took the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.photoPath",
            "description": "<p>Location of photo storage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.favoritesIds",
            "description": "<p>Array of userIds that favorited the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photos.views",
            "description": "<p>Number of people viewed the photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"size\": 1,\n \"photos\": [\n      {\n       \"isPublic\": true,\n       \"taggedPeople\": [],\n       \"tags\": [],\n       \"favoritesIds\": [],\n       \"views\": 6,\n       \"_id\": \"60b3ed5b72370b373c141cd1\",\n       \"authorId\": \"60b3e33ac8ef3754a49c30b5\",\n       \"title\": \"test\",\n       \"description\": \"test\",\n       \"date\": \"2021-05-30T19:54:03.976Z\",\n       \"photoPath\": \"C:\\\\Users\\\\3600\\\\Desktop\\\\Flickr-Backend\\\\photos\\\\162240444388512.jpg\",\n       \"__v\": 0\n      }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500\n{\n  \"message\": \"ServerNotResponding\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "POST",
    "url": "/photos/",
    "title": "Upload a Photo for a given user",
    "version": "0.0.0",
    "name": "PostPhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>User token when loggrd in</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": "<p>photo file that needs to be uploaded</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "isPublic",
            "description": "<p>Public or private photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taggedPeople",
            "description": "<p>Array of tagged people</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tags",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "cameraName",
            "description": "<p>Name of camera that took the photo</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "createdPhoto",
            "description": "<p>Photo object that contains info</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n{\n  \"message\": \"Photo was saved successfully\",\n  \"createdPhoto\": {\n      \"isPublic\": true,\n      \"taggedPeople\": [],\n      \"tags\": [],\n      \"favoritesIds\": [],\n      \"views\": 0,\n      \"_id\": \"60b43b2ab57f960f20a167d1\",\n      \"authorId\": \"60b3e59d7ac05f4194a267ca\",\n      \"title\": \"Berserk\",\n      \"date\": \"2021-05-31T01:26:02.736Z\",\n      \"photoPath\": \"C:\\\\Users\\\\3600\\\\Desktop\\\\Flickr-Backend\\\\photos\\\\162242436265819.jpg\",\n      \"__v\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401\n{\n  \"message\": \"Auth failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "PATCH",
    "url": "/photos/photo-info/:photoId",
    "title": "Edit photo info",
    "version": "0.0.0",
    "name": "PutPhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token when loggrd in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isPublic",
            "description": "<p>Photo is visible to public or private</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "taggedPeople",
            "description": "<p>Array of tagged people</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cameraName",
            "description": "<p>Name of the camera that took the photo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     \"message\": \"updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No photo with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 \n{\n  \"message\": \"you are not authorized to update this photo\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "PATCH",
    "url": "/photos/photo/:photoId",
    "title": "Edit photo itself",
    "version": "0.0.0",
    "name": "PutPhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token when loggrd in</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "photo",
            "description": "<p>New photo to be uploaded</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     \"message\": \"updated successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No photo with given id found.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 417": [
          {
            "group": "error 417",
            "optional": false,
            "field": "ExpectationFailed",
            "description": "<p>The server cannot meet the requirements of the Expect request-header field.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "ServerNotResponding",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 \n{\n  \"message\": \"you are not authorized to update this photo\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "GET",
    "url": "/groups/:replyId",
    "title": "returning the info of a reply",
    "version": "0.0.0",
    "name": "Getreplyinfo",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "replyId",
            "description": "<p>The ID of the reply .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "reply",
            "description": "<p>returns the content of the reply.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of the User who wrote the reply.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>ID of the Group in which the reply.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"reply\"=\"Wow That's amazing\"\n  \"userId\"=\"1186305\"\n  \"groupId\"=\"55471932\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 431": [
          {
            "group": "error 431",
            "optional": false,
            "field": "ReplyIDNotFound",
            "description": "<p>The ID of the Reply was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n   HTTP/1.1 400 BadRequest\n   {\n     \"error\": \"Bad Request\"\n   }\n   HTTP/1.1 401 UnauthorizedAuthentication\n   {\n     \"error\": \"UnauthorizedAuthentication\"\n   } \n\n   HTTP/1.1 403 Forbidden\n   {\n     \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n   }\n\n  \n    HTTP/1.1 405 MissingArgument\n   {\n     \"error\": \"MissingArgument\"\n   }\n   \n    HTTP/1.1 406 InvalidParameters\n   {\n     \"error\": \"the passed parameters aren't valid\"\n   }\n\n  HTTP/1.1 408 RequestTimeout\n   {\n     \"error\": \"The server timed out waiting for the request.\"\n   }\n\n\n   HTTP/1.1 418 OperationFailed\n   {\n     \"error\": \"operation failed due to a temporary issue\"\n   }\n\n    HTTP/1.1 429 TooManyRequests\n   {\n     \"error\": \"The user has sent too many requests\"\n   }\n\nHTTP/1.1 431 ReplyIDNotFound\n   {\n     \"error\": \"ReplyIDNotFound\"\n   }\n     HTTP/1.1 500 InternalServerError\n   {\n     \"error\": \"The server is not responding.\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_replygetinfo.js",
    "groupTitle": "Reply"
  },
  {
    "type": "POST",
    "url": "/groups/:discussionId&userId",
    "title": "Adding a reply to a group discussion",
    "version": "0.0.0",
    "name": "addReply",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>UserID for the user wants to add a reply to the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>Id for the group to add the reply.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "reply",
            "description": "<p>the actual reply .</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "discussionId",
            "description": "<p>inside the group</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "replyId",
            "description": "<p>return the ID of that reply.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"replyId\"=\"5517800\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request.</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "  \n  HTTP/1.1 400 BadRequest\n  {\n    \"error\": \"Bad Request\"\n  }\n  HTTP/1.1 401 UnauthorizedAuthentication\n  {\n    \"error\": \"UnauthorizedAuthentication\"\n  } \n\n  HTTP/1.1 403 Forbidden\n  {\n    \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n  } \n\n  HTTP/1.1 404 UserIDNotFound\n  {\n    \"error\": \"UserIDNotFound\"\n  }\n   HTTP/1.1 405 MissingArgument\n  {\n    \"error\": \"MissingArgument\"\n  }\n      HTTP/1.1 406 InvalidParameters\n  {\n    \"error\": \"the passed parameters aren't valid\"\n  }\n\n   HTTP/1.1 408 RequestTimeout\n  {\n    \"error\": \"The server timed out waiting for the request.\"\n  }\n\n  HTTP/1.1 418 OperationFailed\n  {\n    \"error\": \"operation failed due to a temporary issue\"\n  }\n  \n          HTTP/1.1 429 TooManyRequests\n  {\n    \"error\": \"The user has sent too many requests\"\n  }\n\nHTTP/1.1 430 GroupIDNotFound\n  {\n    \"error\": \"GroupIDNotFound\"\n  }\n      HTTP/1.1 500 InternalServerError\n  {\n    \"error\": \"The server is not responding.\"\n  }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_addreply.js",
    "groupTitle": "Reply"
  },
  {
    "type": "PUT",
    "url": "/groups/:replyId",
    "title": "Edits an existing reply in an existing group",
    "version": "0.0.0",
    "name": "editReply",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>for the user wants to edit a reply to the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>ID for the group to edit the reply.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "replyId",
            "description": "<p>The ID of the reply .</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newReply",
            "description": "<p>the edited reply .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "Status",
            "description": "<p>returns only 1 if successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"status\"=\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          }
        ],
        "error 431": [
          {
            "group": "error 431",
            "optional": false,
            "field": "ReplyIDNotFound",
            "description": "<p>The ID of the Reply was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " \n  HTTP/1.1 400 BadRequest\n {\n   \"error\": \"Bad Request\"\n }\n HTTP/1.1 401 UnauthorizedAuthentication\n {\n   \"error\": \"UnauthorizedAuthentication\"\n } \n\n HTTP/1.1 403 Forbidden\n {\n   \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n }\n\n\n HTTP/1.1 404 UserIDNotFound\n {\n   \"error\": \"UserIDNotFound\"\n }\n  HTTP/1.1 405 MissingArgument\n {\n   \"error\": \"MissingArgument\"\n }\n \n  HTTP/1.1 406 InvalidParameters\n {\n   \"error\": \"the passed parameters aren't valid\"\n }\n\nHTTP/1.1 408 RequestTimeout\n {\n   \"error\": \"The server timed out waiting for the request.\"\n }\n\n\n HTTP/1.1 418 OperationFailed\n {\n   \"error\": \"operation failed due to a temporary issue\"\n }\n\n  HTTP/1.1 429 TooManyRequests\n {\n   \"error\": \"The user has sent too many requests\"\n }\n\n\n\n HTTP/1.1 430 GroupIDNotFound\n {\n   \"error\": \"GroupIDNotFound\"\n }\n HTTP/1.1 431 ReplyIDNotFound\n {\n   \"error\": \"ReplyIDNotFound\"\n }\n   HTTP/1.1 500 InternalServerError\n {\n   \"error\": \"The server is not responding.\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_editreply.js",
    "groupTitle": "Reply"
  },
  {
    "type": "Delete",
    "url": "/groups/:replyID",
    "title": "removing a reply in a Group",
    "version": "0.0.0",
    "name": "removereply",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>userID for the user wants to remove a reply to the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "replyId",
            "description": "<p>The ID of the reply .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>returns only 1 if successful.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"status\"=\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          }
        ],
        "error 431": [
          {
            "group": "error 431",
            "optional": false,
            "field": "ReplyIDNotFound",
            "description": "<p>The ID of the Reply was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\nHTTP/1.1 400 BadRequest\n   {\n     \"error\": \"Bad Request\"\n   }\n   HTTP/1.1 401 UnauthorizedAuthentication\n   {\n     \"error\": \"UnauthorizedAuthentication\"\n   } \n\n   HTTP/1.1 403 Forbidden\n   {\n     \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n   }\n\n  \n   HTTP/1.1 404 UserIDNotFound\n   {\n     \"error\": \"UserIDNotFound\"\n   }\n    HTTP/1.1 405 MissingArgument\n   {\n     \"error\": \"MissingArgument\"\n   }\n   \n    HTTP/1.1 406 InvalidParameters\n   {\n     \"error\": \"the passed parameters aren't valid\"\n   }\n\n  HTTP/1.1 408 RequestTimeout\n   {\n     \"error\": \"The server timed out waiting for the request.\"\n   }\n\n\n   HTTP/1.1 418 OperationFailed\n   {\n     \"error\": \"operation failed due to a temporary issue\"\n   }\n\n    HTTP/1.1 429 TooManyRequests\n   {\n     \"error\": \"The user has sent too many requests\"\n   }\n\n\n\n   HTTP/1.1 430 GroupIDNotFound\n   {\n     \"error\": \"GroupIDNotFound\"\n   }\n   HTTP/1.1 431 ReplyIDNotFound\n   {\n     \"error\": \"ReplyIDNotFound\"\n   }\n     HTTP/1.1 500 InternalServerError\n   {\n     \"error\": \"The server is not responding.\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_removereply.js",
    "groupTitle": "Reply"
  },
  {
    "type": "Get",
    "url": "/groups/:groupId&discussionId",
    "title": "Listing the Replies in the group by their ID's",
    "version": "0.0.0",
    "name": "replylist",
    "group": "Reply",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "groupId",
            "description": "<p>The ID of the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "discussionId",
            "description": "<p>The ID of the discussion.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "repliesNumber",
            "description": "<p>returns the number of the replies.</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": false,
            "field": "repliesId",
            "description": "<p>'s list of size N of IDs of the replies.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "listText",
            "description": "<p>The replies themselves.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"repliesNumber\"=\"3\"\n  \"repliesId's\"=\" 5547892  335217 966234 \"\n  \"listText\"=\"'Hello' 'Hey' 'Hi there' \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>the server cannot or will not process the request due to an apparent client error.</p>"
          }
        ],
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 403": [
          {
            "group": "error 403",
            "optional": false,
            "field": "Forbidden",
            "description": "<p>The request contained valid data and was understood by the server, but the server is refusing action.</p>"
          }
        ],
        "error 405": [
          {
            "group": "error 405",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          }
        ],
        "error 406": [
          {
            "group": "error 406",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          }
        ],
        "error 408": [
          {
            "group": "error 408",
            "optional": false,
            "field": "RequestTimeout",
            "description": "<p>The server timed out waiting for the request</p>"
          }
        ],
        "error 418": [
          {
            "group": "error 418",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ],
        "error 429": [
          {
            "group": "error 429",
            "optional": false,
            "field": "TooManyRequests",
            "description": "<p>The user has sent too many requests in a given amount of time.</p>"
          }
        ],
        "error 430": [
          {
            "group": "error 430",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n    HTTP/1.1 400 BadRequest\n   {\n     \"error\": \"Bad Request\"\n   }\n   HTTP/1.1 401 UnauthorizedAuthentication\n   {\n     \"error\": \"UnauthorizedAuthentication\"\n   } \n\n   HTTP/1.1 403 Forbidden\n   {\n     \"error\": \"The request contained valid data and was understood by the server, but the server is refusing action.\"\n   }\n\n  \n    HTTP/1.1 405 MissingArgument\n   {\n     \"error\": \"MissingArgument\"\n   }\n   \n    HTTP/1.1 406 InvalidParameters\n   {\n     \"error\": \"the passed parameters aren't valid\"\n   }\n\n  HTTP/1.1 408 RequestTimeout\n   {\n     \"error\": \"The server timed out waiting for the request.\"\n   }\n\n\n   HTTP/1.1 418 OperationFailed\n   {\n     \"error\": \"operation failed due to a temporary issue\"\n   }\n\n    HTTP/1.1 429 TooManyRequests\n   {\n     \"error\": \"The user has sent too many requests\"\n   }\n\nHTTP/1.1 430 GroupIDNotFound\n   {\n     \"error\": \"GroupIDNotFound\"\n   }\n     HTTP/1.1 500 InternalServerError\n   {\n     \"error\": \"The server is not responding.\"\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/api_replylist.js",
    "groupTitle": "Reply"
  },
  {
    "type": "put",
    "url": "/reset/password/:resetLink",
    "title": "Reseting password.",
    "version": "0.0.0",
    "name": "ResetPassword",
    "group": "Reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User new password</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  success:true\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "Error",
            "description": "<p>The server can not find the requested resource.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ],
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n  \"error\":\"UserNotExist\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/ResetPassword.js",
    "groupTitle": "Reset"
  },
  {
    "type": "put",
    "url": "/reset/password",
    "title": "Sending reset password link.",
    "version": "0.0.0",
    "name": "SendResetLink",
    "group": "Reset",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  success:true\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "Error",
            "description": "<p>The server can not find the requested resource.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ],
        "error 400": [
          {
            "group": "error 400",
            "optional": false,
            "field": "BadRequest",
            "description": "<p>The server cannot or will not process the request due to an apparent client error.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 BadRequest\n{\n  \"error\":\"ResetPasswordLinkError\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/SendResetLink.js",
    "groupTitle": "Reset"
  },
  {
    "type": "get",
    "url": "/search/group",
    "title": "search for groups",
    "version": "0.0.0",
    "name": "searchGroup",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the group to search for.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n\"size\": 1,\n\"group\": [\n{\n  \"_id\" : ObjectId(\"60b3d1d8c5278c4ee0b9635a\"),\n  \"name\" : \"Animal lovers\",\n  \"description\" : \"Pictures of most of the animals around the world\",\n  \"date_created\" : \"2021-09-12\",\n  \"photos\" : [],\n  \"discussions\" : [],\n  \"owner\" : \"60b3e33ac8ef3754a49c30b5\",\n  \"members\" : [],\n  \"admins\" :[\"60b3e33ac8ef3754a49c30b5\"],\n  \"status\" : \"P\"\n }\n]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There is no group by that name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/photo",
    "title": "search for photos",
    "version": "0.0.0",
    "name": "searchPhoto",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name for the photo to search for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>The number of photos that are found.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "photos",
            "description": "<p>The photos.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos._id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.authorId",
            "description": "<p>ID of Photo owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "photos.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "photos.isPublic",
            "description": "<p>Photo is visible to public or private</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.taggedPeople",
            "description": "<p>Array of tagged people</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.cameraName",
            "description": "<p>Name of the camera that took the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.photoPath",
            "description": "<p>Location of photo storage</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photos.favoritesIds",
            "description": "<p>Array of userIds that favorited the photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photos.views",
            "description": "<p>Number of people viewed the photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \"size\": 1,\n \"photos\": [\n      {\n       \"isPublic\": true,\n       \"taggedPeople\": [],\n       \"tags\": [],\n       \"favoritesIds\": [],\n       \"views\": 6,\n       \"_id\": \"60b3ed5b72370b373c141cd1\",\n       \"authorId\": \"60b3e33ac8ef3754a49c30b5\",\n       \"title\": \"test\",\n       \"description\": \"test\",\n       \"date\": \"2021-05-30T19:54:03.976Z\",\n       \"photoPath\": \"C:\\\\Users\\\\3600\\\\Desktop\\\\Flickr-Backend\\\\photos\\\\162240444388512.jpg\",\n       \"__v\": 0\n      }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There is no photo by that name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "get",
    "url": "/search/user",
    "title": "search for users",
    "version": "0.0.0",
    "name": "searchUser",
    "group": "Search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>First or second name of the user to search for.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "   HTTP/1.1 200 OK\n  {\n \"size\": 1,\n \"user\" :[\n {\n  \"_id\" : ObjectId(\"60b3d1d8c5278c4ee0b9635a\"),\n  \"followers\" : [],\n  \"following\" : [],\n  \"firstName\" : \"ahmed\",\n  \"secondName\" : \"mohsen\",\n  \"age\" : 20,\n  \"email\" : \"boda@gmail.com\",\n  }\n ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>There is no user by that name.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/search.js",
    "groupTitle": "Search"
  },
  {
    "type": "Delete",
    "url": "/user/:userid",
    "title": "Deleting User.",
    "version": "0.0.0",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token in the header.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n   message:\"Success\"\n\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 UnauthorizedAuthentication\n{\n  \"error\": \"failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/DeleteUser.js",
    "groupTitle": "User"
  },
  {
    "type": "Get",
    "url": "/user/:userid",
    "title": "Get user information.",
    "version": "0.0.0",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n   {\n    \"_id\" : ObjectId(\"60b3d1d8c5278c4ee0b9635a\"),\n    \"followers\" : [],\n    \"following\" : [],\n    \"getPro\":\"true\"\n    \"firstName\" : \"ahmed\",\n    \"secondName\" : \"mohsen\",\n    \"age\" : 20,\n    \"email\" : \"boda@gmail.com\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the Photo was not found.</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/GetUser.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/signup",
    "title": "Adding new user.",
    "version": "0.0.0",
    "name": "SignUp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secondName",
            "description": "<p>Second name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Passsword put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "userid",
            "description": "<p>Id given to the created user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 OK\n{  \n \"message\":\"User created\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "Error",
            "description": "<p>The server can not find the requested resource.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\":\"MailExists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/SignUp.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/user/:userid",
    "title": "Updating user.",
    "version": "0.0.0",
    "name": "UpdateUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userid",
            "description": "<p>Id given to the created user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>First name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "secondName",
            "description": "<p>Second name of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Passsword put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "Email",
            "optional": false,
            "field": "email",
            "description": "<p>User Email.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "age",
            "description": "<p>Age of the user.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  message:\"UserUpdated\"\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "error 401": [
          {
            "group": "error 401",
            "optional": false,
            "field": "UnauthorizedAuthentication",
            "description": "<p>Authentication is required and has failed or has not yet been provided.</p>"
          }
        ],
        "error 404": [
          {
            "group": "error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ],
        "error 409": [
          {
            "group": "error 409",
            "optional": false,
            "field": "Conflict",
            "description": "<p>Indicates that the request could not be processed because of conflict in the current state of the resource. .</p>"
          }
        ],
        "error 500": [
          {
            "group": "error 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>The server is not responding.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n  \"error\": \"MailExists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "myapp/UpdateUser.js",
    "groupTitle": "User"
  }
] });
