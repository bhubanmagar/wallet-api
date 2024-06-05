A wallet api where you can add you income and also expenditure with respect to particular user and can track you finance from dashboard.
# API Documentation

## Add Income
**Endpoint:** `/income/add`  
**Method:** `GET`

**Payload:**
`json`
`{
    "amount": " ",
    "remarks": "[income | expense]"
}`


## Add Expense
**Endpoint**: `/expense/add`
**Method**: `POST`
**Payload:**
`json`
`{
    "amount": " ",
    "remarks": " "
}`


## Dashboard
**Endpoint**: `/users/dashboard`
**Method:** `GET`
**Note:** `Please pass the Bearer token along with the request.`
