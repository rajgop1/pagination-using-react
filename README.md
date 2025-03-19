# 📌 Assignment: Implement Pagination for Product List in React  

Hey **Apoorva**,  

Your task is to **fetch products from an API** and implement **pagination** using "Next" and "Previous" buttons. This will help you understand **fetching data, updating state, and handling API parameters dynamically**.  

---

## ✅ Understanding `skip`, `limit`, and `total`  

The API returns data in the following format:  
```  
{  
  products: [],  // Array of product objects  
  skip: number,  // Number of products skipped  
  limit: number, // Number of products fetched per request  
  total: number  // Total number of products available  
}  
```  

### What do `skip` and `limit` mean?  

- **`skip`** → This tells the API how many products to skip before fetching new ones.  
- **`limit`** → This tells the API how many products to fetch in one request.  

Example:  
```  
https://dummyjson.com/products?skip=5&limit=10  
```  
- This means **skip the first 5 products** and **fetch the next 10**.  

---

## ✅ Task Requirements  

### 1️⃣ Fetch products from this API  
```  
https://dummyjson.com/products  
```  

### 2️⃣ Implement pagination using `skip` and `limit`  

- The **"Next" button** should fetch the next set of products by increasing `skip`.  
- The **"Previous" button** should fetch the previous set of products by decreasing `skip`.  

### 3️⃣ Display the products in a list  
- Show **Product Name** and **Price**.  
- Display a **loading indicator** when fetching data.  

### 4️⃣ Disable Buttons Based on `total`  

- **Disable the "Previous" button** when `skip` is 0 (i.e., first page).  
- **Disable the "Next" button** when `skip + limit` is greater than or equal to `total` (i.e., last page).  

---

## 📌 Bonus (Optional)  
🔹 Show the **total number of products** fetched.  
🔹 Add a **loading spinner** while fetching data.  
🔹 Display **page numbers** for better navigation.  

Happy coding! 🚀  
