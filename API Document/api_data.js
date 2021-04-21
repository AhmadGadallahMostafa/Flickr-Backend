define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
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
            "description": "<p>passsword put by user.</p>"
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
          "content": "HTTP/1.1 200 OK\n{  \n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "Error",
            "description": "<p>Unauthorized client Username or password is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized client\n{\n  \"error\":\"failed Login username or password is wrong\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/Login.js",
    "groupTitle": "Authentication"
  },
  {
    "type": "delete",
    "url": "/user/:cameraid",
    "title": "Deleting a camera",
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
            "field": "cameraid",
            "description": "<p>ID for the camera to delete.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CameraNotFound",
            "description": "<p>The camera was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"CameraNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Getting Camera brands",
    "version": "0.0.0",
    "name": "getCameraBrands",
    "group": "Camera",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "number",
            "description": "<p>Number of brands.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "brandNames",
            "description": "<p>Names of the brands.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"number\"= \"3\",\n\"brandNames\": \"Canon - nikon - apple\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Service",
            "description": "<p>currently unavailable The requested service is temporarily unavailable.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 503 Sevice Unavailable\n{\n\"error\":\"The service is currently unavailable\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Camera"
  },
  {
    "type": "get",
    "url": "/user/:cameraid",
    "title": "Know more about the camera",
    "version": "0.0.0",
    "name": "getCameraSpecifications",
    "group": "Camera",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "cameraid",
            "description": "<p>ID for the camera to get specifications for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Camera type.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sensorResolution",
            "description": "<p>Camera sensor resolution.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lcdSize",
            "description": "<p>LCD size for the camera.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lensMount",
            "description": "<p>Lens mount type.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"name\": \"Nikon - D7100\",\n\"type\": \"Digital SLR\",\n\"sensorResolution\"= \"24.1\",\n\"lcdSize\"= \"3.2\"\",\n\"lensMount\": \"Nikon F\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CameraNotFound",
            "description": "<p>The camera was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"CameraNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Camera"
  },
  {
    "type": "DELETE",
    "url": "/photo/comments/:photoId",
    "title": "Delete comment on a photo.",
    "version": "0.0.0",
    "name": "DeleteComment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of Tagged User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Content of comment</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of User who commented</p>"
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
          "content": "HTTP/1.1 200 OK\n{\n     \"There is no specific response\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentCanNotBeDeleted",
            "description": "<p>comment can not be Deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CommentCanNotBeDeleted\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Comments"
  },
  {
    "type": "GET",
    "url": "/photo/comments/:photoId",
    "title": "Get list of comments on a photo.",
    "version": "0.0.0",
    "name": "GetComments",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comment",
            "description": "<p>Array of comments</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comment.id",
            "description": "<p>ID of Tagged User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comment.text",
            "description": "<p>Content of comment</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comment.userId",
            "description": "<p>ID of User who commented</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n {\n    \"id\": \"2311\"\n    \"text\": \"Nice picture\"\n    \"userId\": \"123213\"\n },\n {\n    \"id\": \"21231\"\n    \"text\": \"I love this photo\"\n    \"userId\": \"421256\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoCommentsFound",
            "description": "<p>there is no comments.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoCommentsFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Comments"
  },
  {
    "type": "POST",
    "url": "/photo/comments/:photoId",
    "title": "Add comment on a photo.",
    "version": "0.0.0",
    "name": "PostComment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of Tagged User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Content of comment</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of User who commented</p>"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"commentId\": \"24214\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentCanNotBeAdded",
            "description": "<p>comment can not be uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CommentCanNotBeAdded\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Comments"
  },
  {
    "type": "PUT",
    "url": "/photo/comments/:photoId",
    "title": "Edit comment on a photo.",
    "version": "0.0.0",
    "name": "PutComment",
    "group": "Comments",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of Tagged User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Content of comment</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of User who commented</p>"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>ID of comment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"commentId\": \"24214\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentCanNotBeEdited",
            "description": "<p>comment can not be edited.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CommentCanNotBeEdited\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Comments"
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
          "content": "HTTP/1.1 200 OK\n{ \"discussionID\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 IDNotFound\n{\n  \"error\": \"IDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 406 InvalidRequest\n{\n  \"error\": \"a group already exist with the same name\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_addDiscussion.js",
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
          "content": "HTTP/1.1 200 OK\n{ \"discussionID\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 IDNotFound\n{\n  \"error\": \"IDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 406 InvalidRequest\n{\n  \"error\": \"a group already exist with the same name\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_deleteDiscussion.js",
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
          "content": "HTTP/1.1 200 OK\n{ \"discussionID\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 IDNotFound\n{\n  \"error\": \"IDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 406 InvalidRequest\n{\n  \"error\": \"a group already exist with the same name\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_editDiscussion.js",
    "groupTitle": "Discussion"
  },
  {
    "type": "POST",
    "url": "/photo/favorites/:photoId&userId",
    "title": "Delete a favorite from a photo.",
    "version": "0.0.0",
    "name": "DeleteFavorite",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"There is no specific response\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotDeleteFavorite",
            "description": "<p>favourite can not be deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotDeleteFavorite\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "GET",
    "url": "/photo/favorites/:photoId",
    "title": "Get list of users who favorites photo.",
    "version": "0.0.0",
    "name": "GetPhotoFavorites",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "favorite",
            "description": "<p>Array of favorites</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite.id",
            "description": "<p>ID of favorite</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite.userId",
            "description": "<p>ID of User who favorite this photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n {\n    \"id\": \"2311\"\n    \"userId\": \"123213\"\n },\n {\n    \"id\": \"21231\"\n    \"userId\": \"421256\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoFavoriteFound",
            "description": "<p>there is no favorites.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoFavoriteFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "GET",
    "url": "/photo/favorites/:userId",
    "title": "Get list of user favorites.",
    "version": "0.0.0",
    "name": "GetUserFavorites",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
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
            "type": "Object[]",
            "optional": false,
            "field": "favorite",
            "description": "<p>Array of favorites</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite.id",
            "description": "<p>ID of favorite</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "favorite.photoId",
            "description": "<p>ID of Photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n {\n    \"id\": \"2311\"\n    \"photoId\": \"123213\"\n },\n {\n    \"id\": \"21231\"\n    \"photoId\": \"421256\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoFavoriteFound",
            "description": "<p>there is no favorites.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoFavoriteFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "POST",
    "url": "/photo/favorites/:photoId&userId",
    "title": "Add a favorite to a photo.",
    "version": "0.0.0",
    "name": "PostFavorite",
    "group": "Favorites",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
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
            "field": "id",
            "description": "<p>ID of favorite</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"id\": \"2311\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotFavorite",
            "description": "<p>favourite can not be added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotFavorite\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Favorites"
  },
  {
    "type": "post",
    "url": "/follow/:myuserid&followeruserid",
    "title": "Taking Id of the one to follow.",
    "version": "0.0.0",
    "name": "AddFollower",
    "group": "Follows",
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
          "content": "HTTP/1.1 200 OK\n{  \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/AddFollow.js",
    "groupTitle": "Follows"
  },
  {
    "type": "Delete",
    "url": "/follow/:myuserid&followeruserid",
    "title": "unfollowing person .",
    "version": "0.0.0",
    "name": "DeleteFollower",
    "group": "Follows",
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
          "content": "HTTP/1.1 200 OK\n{  \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/DeleteFollow.js",
    "groupTitle": "Follows"
  },
  {
    "type": "Get",
    "url": "/follows/:myuserid&followersuserids",
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
            "field": "userId",
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
            "description": "<p>List of recently followers people photos.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstname of the follower.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastname of the follower user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \"first_name\"=\"Hal\" ,\n   \"last_name\"=\"Cenderson\" \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProfileNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"profile not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/GetFollowers.js",
    "groupTitle": "Follows"
  },
  {
    "type": "Get",
    "url": "/follows/:myuserid&followinguserids",
    "title": "Get following of certain id.",
    "version": "0.0.0",
    "name": "GetFollowing",
    "group": "Follows",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "photo",
            "description": "<p>List of recently following people photos</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstname of the follower.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastname of the follower user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \"first_name\"=\"Hal\" ,\n   \"last_name\"=\"Cenderson\"\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProfileNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"profile not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/Getfollowing.js",
    "groupTitle": "Follows"
  },
  {
    "type": "post",
    "url": "/gallery/photo/:photoid&galleryid",
    "title": "Adding Photo to Gallery.",
    "version": "0.0.0",
    "name": "AddPhotoToGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "galleryId",
            "description": "<p>unique gallery ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "photoId",
            "description": "<p>unique photo ID.</p>"
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
            "field": "photo",
            "description": "<p>Photo added to gallery</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\":\"gallery or picture not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/AddPhotoGallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "Delete",
    "url": "/gallery/photo/:photoid&galleryid",
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
            "description": "<p>unique gallery ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "photoId",
            "description": "<p>unique photo ID.</p>"
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
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\":\"gallery or picture not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/DeletePhotoGallery.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "Get",
    "url": "/gallery/:galleryid",
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
            "field": "photo.id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.userId",
            "description": "<p>ID of Photo owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "photo.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.title",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GalleryNotFound",
            "description": "<p>The id of the Gallery was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Gallery not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/GalleryPhoto.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "post",
    "url": "/user/:galleryid",
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
            "field": "title",
            "description": "<p>TItle of the gallery.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the gallery.</p>"
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
            "field": "galleryid",
            "description": "<p>Id of the gallery.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": "<p>Url of the gallery.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"galleryid\"= \"50736-72157623680420409\",\n\"url\": \"http://www.flickr.com/photos/kellan/galleries/72157623680420409\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TitleNotFound",
            "description": "<p>The title of the Gallery was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"TitleNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "delete",
    "url": "/user/:galleryid",
    "title": "Deleting a gallery",
    "version": "0.0.0",
    "name": "deleteGallery",
    "group": "Gallery",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "galleryid",
            "description": "<p>ID for the gallery to delete.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GalleryNotFound",
            "description": "<p>the gallery was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"GalleryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Gallery"
  },
  {
    "type": "delete",
    "url": "/user/:groupid&discussionid",
    "title": "Deleting a group Discussion",
    "version": "0.0.0",
    "name": "DeleteGroupDiscussion",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "groupid",
            "description": "<p>The id of the group that contains the discussion that is to delete.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "discussionid",
            "description": "<p>The discussions is to delete.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"GroupNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Group"
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
            "field": "GroupID",
            "description": "<p>returns the ID of the created group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"GroupID\"=\"55124796\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>a group already exist with the same name.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 IDNotFound\n{\n  \"error\": \"IDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 406 InvalidRequest\n{\n  \"error\": \"a group already exist with the same name\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_creategroup.js",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>User can't add a reply in that group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 UserIDNotFound\n{\n  \"error\": \"UserIDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\n    HTTP/1.1 409 GroupIDNotFound\n{\n  \"error\": \"GroupIDNotFound\"\n}\n HTTP/1.1 414 Unauthorized\n{\n  \"error\": \"User isn't authorized to remove that group\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_deletegroup.js",
    "groupTitle": "Group"
  },
  {
    "type": "get",
    "url": "/user/:groupid",
    "title": "Showing group discussions",
    "version": "0.0.0",
    "name": "getGroupDiscussions",
    "group": "Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "groupid",
            "description": "<p>The id of the group to get the discussions for.</p>"
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
            "field": "number",
            "description": "<p>Number of discussions in the group.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "discussionsTitles",
            "description": "<p>Titles for the discussion in the group .</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"number\"= \"5\",\n\"discussionsTitles\": \"Vienna Park Street - Photo Books - Introducing myseld\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The Group was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"GroupNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
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
            "field": "MembersNumber",
            "description": "<p>of members in the group.</p>"
          },
          {
            "group": "Success 200",
            "type": "string[]",
            "optional": false,
            "field": "Names",
            "description": "<p>List of size N has all group names.</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": false,
            "field": "ID",
            "description": "<p>'s List of size N has all group ID's.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"MembersNumber\"=\"5\"\n  \"Names\"=\"Ahmed , Ali , Mustafa , Aya , Asma\"\n  \"ID's\"=\"1187512 117861 1169712 118157 1175646\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"GroupNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_groupmembergetlist.js",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>User is already in the group.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>User can't add a join that group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 GroupNotFound\n{\n  \"error\": \"GroupNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 406 InvalidRequest\n{\n  \"error\": \"User is already in the group\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\nHTTP/1.1 414 Unauthorized\n{\n  \"error\": \"User isn't authorized to join that group\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_joingroup.js",
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
            "field": "GroupID",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidRequest",
            "description": "<p>account is already out of the group.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"GroupNotFound\"\n}\nHTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 406 InvalidRequest\n{\n  \"error\": \"User is already out of the group\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_leavegroup.js",
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
            "description": "<p>Number of members of the group</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "Description",
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
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>whether public or private.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"Members\"=\"30\"\n  \"Description\"=\"for the students of the faculty of engineering\"\n  \"AdminID\"=\"1180123\"\n  \"Status\"=\"Private\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupNotFound",
            "description": "<p>The id of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"GroupNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_groupinfo.js",
    "groupTitle": "Group"
  },
  {
    "type": "post",
    "url": "/license/:photoid&&licenseid",
    "title": "Adding license tp photo.",
    "version": "0.0.0",
    "name": "SetLicense",
    "group": "License",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "photoId",
            "description": "<p>unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "licenseId",
            "description": "<p>unique license ID .</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"photo not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/SetLicense.js",
    "groupTitle": "License"
  },
  {
    "type": "Get",
    "url": "/license",
    "title": "Listing license",
    "version": "0.0.0",
    "name": "getLicense",
    "group": "License",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "licenseID",
            "description": "<p>id of the liscense.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "licenseName",
            "description": "<p>name of the liscense.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"license id\"=\"0\"\n  , \"name\"=\"All Rights Reserved\"\n    \n\n\n\n\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/GetLicense.js",
    "groupTitle": "License"
  },
  {
    "type": "Get",
    "url": "/license",
    "title": "Listing license",
    "version": "0.0.0",
    "name": "getLicense",
    "group": "License",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "licenseID",
            "description": "<p>id of the liscense.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "licenseName",
            "description": "<p>name of the liscense.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"license id\"=\"0\"\n  , \"name\"=\"All Rights Reserved\"\n    \n\n\n\n\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/GetLiscence.js",
    "groupTitle": "License"
  },
  {
    "type": "Get",
    "url": "/photo/location/:photoid",
    "title": "Get location of a photo.",
    "version": "0.0.0",
    "name": "GetLocation",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phtotid",
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
            "type": "number",
            "optional": false,
            "field": "latitude",
            "description": "<p>latitude of location.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "longtude",
            "description": "<p>longtude of location.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "accuracy",
            "description": "<p>accuracy of location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    { \"location latitude\"=\"-17.685895\" ,\n\"longitude\"=\"-63.36914\",\n\" accuracy\"=\"6\"\n\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LocationNotFound",
            "description": "<p>.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Location of photo not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/GetLocation.js",
    "groupTitle": "Location"
  },
  {
    "type": "post",
    "url": "/Photo/Location/:photoid&lat&lon",
    "title": "Adding location to photo.",
    "version": "0.0.0",
    "name": "Setlocation",
    "group": "Location",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phtotId",
            "description": "<p>unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>latitude whose valid range is -90 to 90 .</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lon",
            "description": "<p>longitude whose valid range is -180 to 180.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"unable to set location\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/SetLocation.js",
    "groupTitle": "Location"
  },
  {
    "type": "DELETE",
    "url": "/notification/:userId&notificationId",
    "title": "Delete notification for a given user.",
    "version": "0.0.0",
    "name": "DeleteNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notificationId",
            "description": "<p>ID of notification</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n      \"There is no specific response\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotFindNotification",
            "description": "<p>Notification Can not be found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotFindNotification\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Notification"
  },
  {
    "type": "GET",
    "url": "/notification/:userId",
    "title": "Get notifications for a given user.",
    "version": "0.0.0",
    "name": "GetNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
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
            "type": "Object[]",
            "optional": false,
            "field": "notification",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "notification.id",
            "description": "<p>ID of notificaiton</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "notification.text",
            "description": "<p>Content of notification</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "notification.seen",
            "description": "<p>If notidication was seen by the user before</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "notification.date",
            "description": "<p>Date of notification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     {\n         \"id\": \"123\"\n         \"text\": \"Ali started following you\"\n         \"seen\": \"0\"\n         \"Date\": \"2002-12-09\"\n     },\n     {\n         \"id\": \"124\"\n         \"text\": \"Mohamed posted in your group\"\n         \"seen\": \"1\"\n         \"Date\": \"2002-12-02\"\n     },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotificationsNotFound",
            "description": "<p>User has no notifications.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NotificationsNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Notification"
  },
  {
    "type": "POST",
    "url": "/notification/:userId",
    "title": "Upload notification for a given user.",
    "version": "0.0.0",
    "name": "PostNotification",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "notification",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "notification.id",
            "description": "<p>ID of notificaiton</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notification.text",
            "description": "<p>Content of notification</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "notification.seen",
            "description": "<p>If notidication was seen by the user before</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "notification.date",
            "description": "<p>Date of notification</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of notification</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     \"id\": \"2121\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotUploadNotification",
            "description": "<p>Notification Can not be uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotUploadNotification\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/person/:userid",
    "title": "Add person.",
    "version": "0.0.0",
    "name": "AddPerson",
    "group": "Person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstName of the profile user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastName of the profile user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of profile wrote by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the profile user</p>"
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "profileNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Profile not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/AddPerson.js",
    "groupTitle": "Person"
  },
  {
    "type": "Delete",
    "url": "/person/:userid",
    "title": "Delete person.",
    "version": "0.0.0",
    "name": "DeletePerson",
    "group": "Person",
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
          "content": "HTTP/1.1 200 OK\n{  \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "profileNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Profile not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/Deleteperson.js",
    "groupTitle": "Person"
  },
  {
    "type": "DELETE",
    "url": "/photos/:userId&photoId",
    "title": "Delete given photo.",
    "version": "0.0.0",
    "name": "DeletePhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     \"There is no specific response\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>Photo can not be Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "delete",
    "url": "/user/:photoid&tag",
    "title": "Deleting a photo tag",
    "version": "0.0.0",
    "name": "DeletePhotoTags",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoid",
            "description": "<p>The id of the photo to delete the tags.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phototag",
            "description": "<p>The tag that is to delete.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TagNotFound",
            "description": "<p>The PhotoTag was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"TagNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Photo"
  },
  {
    "type": "GET",
    "url": "/photos/:photoId",
    "title": "Returns photo with the given id.",
    "version": "0.0.0",
    "name": "GetPhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>id of photo</p>"
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
            "field": "photo",
            "description": "<p>photo object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "photo.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Title of Photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n    \"id\": \"1223\"\n    \"description\": \"Summer time\"\n    \"date\": \"2002-12-09\"\n    \"title\": \"Ocean madness\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>No photo found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "POST",
    "url": "/photos/:userId",
    "title": "Upload a Photo for a given user.",
    "version": "0.0.0",
    "name": "PostPhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "photo",
            "description": "<p>photo object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photo.id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "photo.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>id of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     \"id\": \"2121\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotUpload",
            "description": "<p>Photo can not be uploaded.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotUpload\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "PUT",
    "url": "/photos/:userId&photoId",
    "title": "Edit given photo",
    "version": "0.0.0",
    "name": "PutPhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "photo",
            "description": "<p>photo object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photo.id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "photo.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Title of Photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     \"id\": \"2121\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>Photo can not be Found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Photo"
  },
  {
    "type": "get",
    "url": "/user/:photoid",
    "title": "Showing the camera that captured the photo",
    "version": "0.0.0",
    "name": "getCameraThatTookPhoto",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoid",
            "description": "<p>The id of the photo to get the location for.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "cameraName",
            "description": "<p>name of the Camera that took the photo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"cameraName\":\"Canon\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The Photo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Photo"
  },
  {
    "type": "get",
    "url": "/user/:photoid",
    "title": "Showing photo location",
    "version": "0.0.0",
    "name": "getPhotoLocation",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoid",
            "description": "<p>The id of the photo to get the location for.</p>"
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
            "field": "latitude",
            "description": "<p>The latitude of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude of the location.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the location.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\"latitde\"=\"40.416775\",\n\"longitude\"=\"-3.703790\",\n\"name\":\"Madrid\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The Photo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Photo"
  },
  {
    "type": "GET",
    "url": "/photos",
    "title": "Returns list of recently uploaded photos",
    "version": "0.0.0",
    "name": "GetPhotos",
    "group": "Photos",
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
            "field": "photo.id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.userId",
            "description": "<p>ID of Photo owner</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "photo.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Title of Photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n    \"id\": \"1223\"\n    \"userId\": \"1234\"\n    \"description\": \"Summer time\"\n    \"date\": \"2002-12-09\"\n    \"title\": \"Ocean madness\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotosNotFound",
            "description": "<p>No photos found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PhotosNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Photos"
  },
  {
    "type": "GET",
    "url": "/photos/:userId",
    "title": "Returns photos of given user",
    "version": "0.0.0",
    "name": "GetUserPhotos",
    "group": "Photos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of user</p>"
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
            "description": "<p>List of users photos</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "photo.id",
            "description": "<p>ID of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.description",
            "description": "<p>Description of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "photo.date",
            "description": "<p>Upload date of Photo</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo.title",
            "description": "<p>Title of Photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n    \"id\": \"1223\"\n    \"description\": \"Summer time\"\n    \"date\": \"2002-12-09\"\n    \"title\": \"Ocean madness\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "userNotFound",
            "description": "<p>No user found with this id.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"userNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Photos"
  },
  {
    "type": "put",
    "url": "/user/:photoid&licenseid",
    "title": "Setting the license for the photo",
    "version": "0.0.0",
    "name": "setPhotoLicense",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photo_id",
            "description": "<p>The photo to update the license for.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "license_id",
            "description": "<p>The license to apply.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The Photo to update the lisence for was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Photo"
  },
  {
    "type": "post",
    "url": "/user/:photoid",
    "title": "Setting photo tags",
    "version": "0.0.0",
    "name": "setPhotoTags",
    "group": "Photo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoid",
            "description": "<p>The id of the photo to get the location for.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tags",
            "description": "<p>The tags to add to the photo.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The Photo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Respone:",
          "content": "HTTP/1.1 404 Not Found\n{\n\"error\":\"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "d/myapp/ApiExamples.js",
    "groupTitle": "Photo"
  },
  {
    "type": "Get",
    "url": "/getperson/:userid",
    "title": "Getting person info.",
    "version": "0.0.0",
    "name": "GetProfileInfo",
    "group": "Profile",
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>firstname of the profile user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": "<p>lastname of the profile user.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of profile wrote by user.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the profile user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {  \"first_name\"=\"Hal\" ,\n       \"last_name\"=\"Cenderson\" ,\n\"description\"=\"photos of my adventures\"\n\"age\"=\"18\"\n\n\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ProfileNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"profile not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/GetPerson(info).js",
    "groupTitle": "Profile"
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
            "field": "Reply",
            "description": "<p>returns the content of the reply.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "UserID",
            "description": "<p>ID of the User who wrote the reply.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "GroupID",
            "description": "<p>ID of the Group in which the reply.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"reply\"=\"Wow That's amazing\"\n  \"UserID\"=\"1186305\"\n  \"GroupID\"=\"55471932\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReplyIDNotFound",
            "description": "<p>The ID of the Reply was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\nHTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\nHTTP/1.1 410 ReplyIDNotFound\n{\n  \"error\": \"ReplyIDNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_replygetinfo.js",
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
            "field": "discussion",
            "description": "<p>ID inside the group</p>"
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
            "field": "replyID",
            "description": "<p>return the ID of that reply.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ReplyID\"=\"5517800\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>User can't add a reply in that group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 UserIDNotFound\n{\n  \"error\": \"UserIDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\n   HTTP/1.1 409 GroupIDNotFound\n{\n  \"error\": \"GroupIDNotFound\"\n}\nHTTP/1.1 414 Unauthorized\n{\n  \"error\": \"User isn't authorized to add a reply in that group\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_addreply.js",
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
            "field": "UserID",
            "description": "<p>for the user wants to edit a reply to the group.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "GroupID",
            "description": "<p>ID for the group to edit the reply.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "ReplyID",
            "description": "<p>The ID of the reply .</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "NewReply",
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
          "content": "HTTP/1.1 200 OK\n{ \"Status\"=\"1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReplyIDNotFound",
            "description": "<p>The ID of the Reply was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>User can't edit a reply in that group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 UserIDNotFound\n{\n  \"error\": \"UserIDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\nHTTP/1.1 409 GroupIDNotFound\n{\n  \"error\": \"GroupIDNotFound\"\n}\nHTTP/1.1 410 ReplyIDNotFound\n{\n  \"error\": \"ReplyIDNotFound\"\n}\nHTTP/1.1 414 Unauthorized\n{\n  \"error\": \"User isn't authorized to edit a reply in that group\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_editreply.js",
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserIDNotFound",
            "description": "<p>The ID of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ReplyIDNotFound",
            "description": "<p>The ID of the Reply was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UnAuthorized",
            "description": "<p>User can't add a reply in that group.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 UserIDNotFound\n{\n  \"error\": \"UserIDNotFound\"\n}\n HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\n    HTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\n   HTTP/1.1 409 GroupIDNotFound\n{\n  \"error\": \"GroupIDNotFound\"\n}\nHTTP/1.1 410 ReplyIDNotFound\n{\n  \"error\": \"ReplyIDNotFound\"\n}\nHTTP/1.1 414 Unauthorized\n{\n  \"error\": \"User isn't authorized to add a remove a reply in that group\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_removereply.js",
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
            "field": "Repliesnumber",
            "description": "<p>returns the number of the replies.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "list",
            "description": "<p>of size N of IDs of the replies.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "list.text",
            "description": "<p>-&gt; The replies text.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"repliesnumber\"=\"3\"\n  \"number List\"=\" 5547892  335217 966234 \"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "GroupIDNotFound",
            "description": "<p>The ID of the Group was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MissingArgument",
            "description": "<p>an argument is missing.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidParameters",
            "description": "<p>arguments aren't valid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "OperationFailed",
            "description": "<p>operation failed due to a temporary issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 405 MissingArgument\n{\n  \"error\": \"MissingArgument\"\n}\nHTTP/1.1 407 OperationFailed\n{\n  \"error\": \"operation failed due to a temporary issue\"\n}\nHTTP/1.1 408 InvalidParameters\n{\n  \"error\": \"the passed parameters aren't valid\"\n}\nHTTP/1.1 410 GroupIDNotFound\n{\n  \"error\": \"GroupIDNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "b/myapp/api_replylist.js",
    "groupTitle": "Reply"
  },
  {
    "type": "GET",
    "url": "/tags/:size",
    "title": "Gets most used tags.",
    "version": "0.0.0",
    "name": "GetHotTags",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "size",
            "description": "<p>Number of wanted tags.</p>"
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
            "field": "Tag",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Tag.id",
            "description": "<p>ID of Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Tag.name",
            "description": "<p>Name of Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Tag.userId",
            "description": "<p>ID of Tag Creator</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     {\n         \"id\": \"123\"\n         \"name\": \"cars\"\n         \"userId\": \"45476\"\n     },\n     {\n         \"id\": \"126\"\n         \"name\": \"Computers\"\n         \"userId\": \"1231\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoHotTagsFound",
            "description": "<p>Ther are no tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoHotTagsFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Tag"
  },
  {
    "type": "DELETE",
    "url": "/tags/:photoId",
    "title": "Get tags for a given photo.",
    "version": "0.0.0",
    "name": "GetTags",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>ID of Photo</p>"
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
            "field": "Tag",
            "description": "<p>Array of tags</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Tag.id",
            "description": "<p>ID of Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Tag.name",
            "description": "<p>Name of Tag</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Tag.userId",
            "description": "<p>ID of Tag Creator</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n     {\n         \"id\": \"123\"\n         \"name\": \"cars\"\n         \"userId\": \"45476\"\n     },\n     {\n         \"id\": \"126\"\n         \"name\": \"Computers\"\n         \"userId\": \"1231\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoTagsFound",
            "description": "<p>Photo has no tags.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoTagsFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Tag"
  },
  {
    "type": "POST",
    "url": "/tags/:userId",
    "title": "Upload tag.",
    "version": "0.0.0",
    "name": "PostTags",
    "group": "Tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Tag",
            "description": "<p>Tag object</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Tag.id",
            "description": "<p>ID of Tag</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Tag.name",
            "description": "<p>Name of Tag</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Tag.userId",
            "description": "<p>ID of Tag Creator</p>"
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
            "field": "id",
            "description": "<p>ID of tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \n    \"id\": \"12312\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotAddTag",
            "description": "<p>tag can not be uploades.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotAddTag\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Tag"
  },
  {
    "type": "DELETE",
    "url": "/Photo/taggedPeople/:photoId",
    "title": "Delete a tagged User in a photo.",
    "version": "0.0.0",
    "name": "DeleteTaggedUser",
    "group": "TaggedUsers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>ID of tagged user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
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
          "content": "HTTP/1.1 200 OK\n{\n     \"There is no specific response\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotDeleteTaggedUser",
            "description": "<p>Tagged User cannot be deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotDeleteTaggedUser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "TaggedUsers"
  },
  {
    "type": "GET",
    "url": "/Photo/taggedPeople/:photoId",
    "title": "Get list of tagged User in a photo.",
    "version": "0.0.0",
    "name": "GetTaggedUsers",
    "group": "TaggedUsers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>Id of photo</p>"
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
            "field": "user",
            "description": "<p>Tagged user object</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.taggedId",
            "description": "<p>ID of Tagged User</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>Name of tagged User</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.taggedById",
            "description": "<p>ID of User who tagged</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of tag</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n {\n    \"id\": \"2311\"\n    \"taggedId\": \"12233\"\n    \"name\": \"Mohamed\"\n    \"taggedById\": \"12321\"\n },\n {\n    \"id\": \"1231\"\n    \"taggedId\": \"12313\"\n    \"name\": \"Ali\"\n    \"taggedById\": \"124124\"\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoPeopleFound",
            "description": "<p>there is no tagged people.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoPeopleFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "TaggedUsers"
  },
  {
    "type": "POST",
    "url": "/Photo/taggedPeople/:photoId",
    "title": "tag a User in a photo.",
    "version": "0.0.0",
    "name": "PostTaggedUsers",
    "group": "TaggedUsers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taggedId",
            "description": "<p>ID of Tagged User</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of tagged User</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "taggedById",
            "description": "<p>ID of User who tagged</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "photoId",
            "description": "<p>Id of photo</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "tagId",
            "description": "<p>Id of tag</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"tagId\": \"1231\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CanNotAddTaggedUser",
            "description": "<p>Tagged User cannot be added.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CanNotAddTaggedUser\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "TaggedUsers"
  },
  {
    "type": "post",
    "url": "/adduser",
    "title": "Adding new user.",
    "version": "0.0.0",
    "name": "AddUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>passsword put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isPro",
            "description": "<p>Acticating pro mood or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "createDate",
            "description": "<p>date the user created the account.</p>"
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>id given to the created user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n \"userId\"=\"8978\"\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\":\"failed to add user\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/AddUser.js",
    "groupTitle": "User"
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
            "description": "<p>unique ID.</p>"
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the user was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/DeleteUser.js",
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
            "field": "userid",
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
            "type": "boolean",
            "optional": false,
            "field": "isPro",
            "description": "<p>Acticating pro mood or not.</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "createDate",
            "description": "<p>date the user created the account.</p>"
          },
          {
            "group": "Success 200",
            "type": "Emial",
            "optional": false,
            "field": "Email",
            "description": "<p>User Email.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{  \n    \"IsPro\"=\"false\",\n    \"createdate\"=\"2/2/2021\",\n   \"email\"=\"ahmedjj@gmail.com\"\n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UsereNotFound",
            "description": "<p>The id of the Photo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"user not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/GetUser.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/user/:userid",
    "title": "updating user.",
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
            "description": "<p>unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>passsword put by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isPro",
            "description": "<p>Acticating pro mood or not.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "createDate",
            "description": "<p>date the user created the account.</p>"
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
          "content": "HTTP/1.1 200 OK\n{  \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"user not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/UpdateUser.js",
    "groupTitle": "User"
  },
  {
    "type": "GET",
    "url": "/photo/Visits/:photoId",
    "title": "Get number of visits.",
    "version": "0.0.0",
    "name": "GetNumberOfVisits",
    "group": "Visits",
    "parameter": {
      "fields": {
        "Parameter": [
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
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "numberOfVisits",
            "description": "<p>Number of users who visited the photo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n     \"numberOfVisits\": 590\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoVisits",
            "description": "<p>there is no visits.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"NoVisits\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "c/myapp/Moaz.js",
    "groupTitle": "Visits"
  },
  {
    "type": "put",
    "url": "/person/:userid",
    "title": "Updating person.",
    "version": "0.0.0",
    "name": "updateperson",
    "group": "person",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userid",
            "description": "<p>unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Firstname",
            "description": "<p>firstname of the profile user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Lastname",
            "description": "<p>lastname of the profile user.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>description of profile wrote by user.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "age",
            "description": "<p>age of the profile user</p>"
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
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "USerNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/UpdatePerson.js",
    "groupTitle": "person"
  },
  {
    "type": "Delete",
    "url": "/Photos/location/:photoid",
    "title": "Removing location from photo.",
    "version": "0.0.0",
    "name": "eleteviews",
    "group": "stats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phtotid",
            "description": "<p>unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the Photo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Photo not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/RemoveLocation.js",
    "groupTitle": "stats"
  },
  {
    "type": "Get",
    "url": "/Photos/:photoid&date",
    "title": "stats of a photo.",
    "version": "0.0.0",
    "name": "getviews",
    "group": "stats",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phtotid",
            "description": "<p>unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of photo .</p>"
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
            "field": "Views",
            "description": "<p>views of the Photo.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "Comments",
            "description": "<p>comments on the photo.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "Favoutites",
            "description": "<p>number of times phot been favourited.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{ \"views\"=\"24\",\n\" comment\"s=\"4\" ,\n\"favorites\"=\"1\" \n\n\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PhotoNotFound",
            "description": "<p>The id of the Photo was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PhotoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "a/myapp/stat.js",
    "groupTitle": "stats"
  }
] });
