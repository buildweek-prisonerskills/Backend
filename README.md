# BACK END [Prisoner Skills] => SUBJECT TO CHANGE
#### Back End Architect => Kayla Crow
*****
## BASE URL:
#### http://prisonerskills.herokuapp.com (she's alive!)
*****

### admin sign up:
#### POST /api/auth/register

Client sends:
```
{
  "username": "new user name", //REQUIRED
  "password": "pass",          //REQUIRED
  "facility_id": "1"           //REQUIRED (I'm so sorry I left this out!!!)
}
```
Server returns:
```
{
    "id": "5",
    "username": "new user name"
}
```

### admin log in (provides authentication token)
#### POST /api/auth/login


Client sends:
```
{
  "username": "new user name", //REQUIRED
  "password": "pass"           //REQUIRED
  
}
```
Server returns:
```
{
    "messsage": "Welcome username",
    "id": "5",
    "token": "big ol' hashed token"
}
```

*****

### Displays list of participating prisons
#### GET /api/facilities
Server returns:
```
[
  {
    "id": 1,
    "name": "Colorado State Penitentiary",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "50 Evans Rd, Cañon City, CO 81212"
  },
  {
    "id": 2,
    "name": "USP Florence ADMAX",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "5880 CO-67, Florence, CO 81226"
  },
  {
    "id": 3,
    "name": "Rikers Island",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "11-11 Hazen Street, East Elmhurst, NY 11370"
  },
  {
    "id": 4,
    "name": "Attica Correctional Facility",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "639 Exchange St, Attica, NY 14011"
  },
  {
    "id": 5,
    "name": "San Quentin State Prison",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "San Quentin State Prison, San Quentin, CA 94974"
  },
  {
    "id": 6,
    "name": "Leavenworth Federal Penitentiary",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "1300 Metropolitan Ave, Leavenworth, KS 66048"
  }
 
]
```

### Displays list of participating prisoners
#### GET /api/inmates

Server returns: 
```
[
  {
    "name": "Kayla Crow",
    "work_release": "True",
    "skills": "food service, forklift operation, butchery, shipping/receiving, landscaping, woodworking",
    "facility_id": "1"
  },
  {
    "name": "Gary Ridgeway",
    "work_release": "False",
    "skills": "food service, auto repair, welding, machining",
    "facility_id": "2"
  },
  {
    "name": "Dennis Rader",
    "work_release": "False",
    "skills": "laundry service, hand/machine sewing, landscaping",
    "facility_id": "3"
  },
  {
    "name": "Charles Cullen",
    "work_release": "False",
    "skills": "health care, carpentry, woodworking, custodial",
    "facility_id": "4"
  },
  {
    "name": "John Justin Bunting",
    "work_release": "False",
    "skills": "furniture refinishing, carpentry, painting",
    "facility_id": "5"
  },
  {
    "name": "Ivan Milat",
    "work_release": "False",
    "skills": "landscaping, custodial",
    "facility_id": "6"
  },
  {
    "name": "Rodney Alcala",
    "work_release": "False",
    "skills": "theater, film/television",
    "facility_id": "1"
  },
]
```
*****
# Restricted Routes              //are fully live, not yet restricted - day 3
//FRONT END! you do not need to use every request/endpoint. Just know they are available should you choose to use them <3
## USER INFO

### Displays user profile if logged in
#### GET /api/users/:id
Example: User 1 logs in >> /api/profile/1

Server will return
```
{
  "id": 1,
  "username": "KCrow"
  "facility_id": "1"   //will hopefully be dynamic, pull facility name from facilities table
{
```
### Edit user profile
#### PUT /api/users/:id

### Delete user profile
#### DELETE /api/users/:id

Server will respond status 204 if successful
I'd suggest showing some kind of success message/alert on the front end, before rerouting.


### Displays inmate profile if admin is logged in
#### GET /api/inmates/:id

Server will return
```
{
  "name": "Rodney Alcala",
  "work_release": "False",
  "skills": "theater, film/television",
  "facility_id": "1"   //will hopefully be dynamic, pull facility name from facilities table
}
```
### Add new inmate if admin is logged in
#### POST /api/inmates


### Edit inmate profile if admin is logged in
#### PUT /api/inmates/:id

User can edit
```
{
  "name": "Rodney Alcala",
  "work_release": "False",
  "skills": "theater, film/television",
  "facility_id": "1"    //will hopefully be dynamic, pull facility name from facilities table
}
```
### Delete inmate profile if admin is logged in
#### DELETE /api/inmates/:id

Server will respond status 204 if successful
I'd suggest showing some kind of success message/alert on the front end, before rerouting.



### Displays facility profile if admin is logged in
#### GET /api/facilities/:id

Server will return
```
{
    "id": 3,
    "name": "Rikers Island",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "11-11 Hazen Street, East Elmhurst, NY 11370"
}
```
### Add new facility if admin is logged in
#### POST /api/facilities


### Edit facility profile if admin is logged in
#### PUT /api/facilities/:id

User can edit
```
{
    "name": "Rikers Island",
    "availability": "0", // this will need to be dynamic, however many an admin has added.
    "address": "11-11 Hazen Street, East Elmhurst, NY 11370"
}
```
### Delete facility profile if admin is logged in
#### DELETE /api/facilities/:id

Server will respond status 204 if successful
I'd suggest showing some kind of success message/alert on the front end, before rerouting.

