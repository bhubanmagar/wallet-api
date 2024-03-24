A wallet api where you can add you income and also expenditure with respect to particular user and can track you finance from dashboard.

**add income:**
http://localhost:8000/income/add
method : GET
payload:{
amount:" ",
remarks : [income| expense]
}

**add expense**
http://localhost:8000/expense/add
method : POST
payload: {
amount: " " ,
remarks : " "
}

**Dashboard**
http://localhost:8000/users/dashboard
method: GET
note: please pass bearer token along with request
