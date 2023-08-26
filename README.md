# <span style="color: #53C3DD;">The Event Management System Back-End Module Pattern follows the [ MVC ] (Model-View-Controller)</span>

# <h2 style="color: #ffff; text-align: center;">[Live Client Site Link](https://event-management-client.vercel.app/)</h2>

#### <span style="color: #9f9f9f;"> _By following the MVC pattern, the Event Management System's back-end module ensures separation of concerns, making the codebase more organized and maintainable. Changes to one component (Model, View, or Controller) can be made without directly impacting the others, promoting modularity and scalability._ </span>

#### <span style="color: #9f9f9f;"> _**Project Summary** : 1. A User Very Easyly Created Account with Email, Password. And After Login in Successfully Valide Email, Password With Genarat JWT Token . 2. A User very Eesyly Created Event, Details Event, Delete event, Update even. A user very easyly booking event Booking Event d_ </span>

#### <span style="color: #53C3DD;">**Development Dependencies :** </span><span style="color: #dfdfdf;"> _@types/cors, @types/express, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint,eslint-config-prettier, husky,lint-staged, prettier, ts-node-dev, typescript_</span>

#### <span style="color: #53C3DD;">**Regular Dependencies :**</span><span style="color: #dfdfdf;"> _@types/bcrypt, @types/cookie-parser, @types/jsonwebtoken, bcrypt,cookie-parser, cors,dotenv, express,http-status,jsonwebtoken, mongoose,winston, winston-daily-rotate-file, zod,_</span>

## <span style="color: #fa9644;"> The Folder structure of the Entry System can be summarized as follows : </span>

```javaScript
src
└── apps
    └── modules
        ├── module1
        ├── module2
        ├── module3
        └── ...

```

</br>

## <span style="color: #53C3DD;">01. **Authenticaion & authorization**</span>

### <span style="color: #fa9644;">Created Account & Login with Email, Password : </span>

```javaScript
//create account
Post API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/users/create-user`

// Body data send example :
{
    "email" : "rascel@gmail.com",
    "password" : "111111"
}


// login Email password

Post API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/users/login`

// Body data send example :
{
    "email" : "rascel@gmail.com",
    "password" : "111111"
}

```

## <span style="color:#fa9644;">02. **A User Event Create, Update, Delete,Read**</span>

```javaScript
// create event
Post API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/create-event`

// Body data send example :
{
 "title": "event title",
 "description":"description somethin ....",
 "start_date": "01/01/2023",
  "end_date": "03/03/2023",
  "location": "saver,Dhaka,Bangladesh",
  "email": "rasel@gmil.com",
  "cetagory" : "education",
  "image" : "https://..."
}
// Update Event
PATCH API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/${id}`

// update Body information send example :
{
 "title": "event title",
 "description":"description somethin ....",
 "start_date": "01/01/2023",
  "end_date": "03/03/2023",
  "location": "saver,Dhaka,Bangladesh",
  "email": "rasel@gmil.com",
  "cetagory" : "education",
  "image" : "https://..."
}

// Singel get Details event
Get API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/${id}`

// params id is event id example :
id : '64e70b18f9c99f5d825f8575'


// Singel Event Delete
Delete API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/${id}`

// params id is event id example :
id : '64e70b18f9c99f5d825f8575'


```

## <span style="color:#fa9644;">03. **A User Get All Event**</span>

## <h3 style="color:#ffff;">02. _Get Event Searching Event [ title, location, event creator, start date, end date, etc] Pagination=value, Limite=value, Sorte=value, sortOrder=value, etc_</h3>

```javaScript
// Booking Event information
Get API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/?searchTerm=${value}&page=${value}&limit=${value}&sort=${value}&sortOrder=${value}`

// result data  example :

 {
    "statusCode": 200,
    "success": true,
    "meta": {
        "page": 1,
        "limit": 4,
        "total": 8
    },
    "data": [{

           "_id": "64e8735b5f206a9edd55dcdf",
            "title": "Unleash the Athlete Within: The Ula",
            "description": "Gear up for an ang experience like",
            "start_date": "2023/08/28",
            "end_date": "12/09/2023",
            "location": "Dhaka, Bangladesh",
            "email": "rasel@gmail.com",
            "image": "https:=",
            "cetagory": "education",
            "createdAt": "2023-08-25T09:24:43.434Z",
            "updatedAt": "2023-08-25T09:24:43.434Z",
            "__v": 0,
            "id": "64e8735b5f206a9edd55dcdf"
    }]
 }
```

## <span style="color:#fa9644;">03. **A User Event Booking API**</span>

```javaScript
// Booking Event information
Post API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/create-event`

// Body data send example :

 {
    "eventId" : "64e828e8ac600c93505c139e",
    "userEmail" : "rase@gmil.com",
    "bookingDate": "01/02/2023",
    "bookingTime" : "10:10 P.M"
}


// Get all Data get
Get API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event-booking/${id}`

// params id is event id example :
id : '64e70b18f9c99f5d825f8575'


// Singel Event Delete
Delete API Rquest Url : `https://event-managment-jade.vercel.app/api/v1/event/${id}`

// params id is event id example :
id : '64e70b18f9c99f5d825f8575'


```

## <h2 style="color:#fff; text-align : center;">You Need Any Querys Go to the[PostMan Link](https://documenter.getpostman.com/view/28899099/2s9Y5YRMeH) Explore Back-End</h2>

<h4 style="color: #1dd; text-align : center;">I can do better in the future</h4>
<h4 style="color: #1dd01d; text-align : center;">Thank you</h4>
