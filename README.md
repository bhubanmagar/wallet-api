A wallet api where you can add you income and also expenditure with respect to particular user and can track you finance from dashboard.
# API Documentation

## Add Income
**Endpoint:** `http://localhost:8000/income/add`  
**Method:** `GET`

**Payload:**
```json
{
    "amount": " ",
    "remarks": "[income | expense]"
}

##Add Expense
Endpoint: http://localhost:8000/expense/add
Method: POST

Payload:

json
Copy code
{
    "amount": " ",
    "remarks": " "
}

##Dashboard
Endpoint: http://localhost:8000/users/dashboard
Method: GET

Note: Please pass the Bearer token along with the request.
