## Synopsis

NodeJS server application that calculate the prices of products based on different rules, the client make a request to the endpoint. The client sends the list of products with (name, sellIn and price) and the days to simulate and the server responses with a list of all the values of every product from day zero to the specified day.

There is a default run that deployes the result of a 30 days simulation by running the script "after-30-days", please check the "how to run" section for more details.

### Understanding value variation of the products every day

Every product have a sellIn that represents the amount of day to sell the product.
Every product have a price that represents the price of the product.
At the end of every day the system updates both properties for every product.

Rules:
When a product expires (there is no more remaining days in sellIn), the price is being reduce two times the speed.
The price of a product can never be negative.
The product "Full Coverage" increase the price every day.
The price of a product never is more than 50.
"Mega Coverage" is a legendary product so its price never goes down and it has no expiration date.
"Special Full Coverage", same as Full Coverage, increases its price while sellIn is getting to 0:
-price increases 2 when there is only 10 or less days and increases 3  when there is 5 days or less. But...
-price goes to zero when there is no more days and it is expired.
"Super Sale" its prices goes down at the double of the speed as the normal products.


## Installation
Nodejs version >8

Clone the project, and run the commands:
```JS
npm install

```

## How to run
Once the project have been download and every dependency is installed you can use the next commands in the same directory the project:

To run default mode, this will run the server and will show the results of the simulation of the products in 30 days in the console:
    Name,                     sellIn             price
  'Medium Coverage'            10                  20
  'Full Coverage'              2                   0
  'Low Coverage'               5                   7
  'Mega Coverage'              0                   80
  'Mega Coverage'              -1                  80
  'Special Full Coverage'      15                  20
  'Special Full Coverage'      10                  49
  'Special Full Coverage'      5                   49
  'Super Sale'                 3                   6

In order to run the default use the script "after-30-days"

```JS
npm run after-30-days

```

To run the test and see the coverage use the script "test"
```JS
npm run test

```

By running "runDev" will run the server with out showing the 30 days simulation by default, when the server is up any client can make requests to send a list of products with prices and sellIn and will receive the result of the simulation (this request can be made in running the server in the default mode), see Code Sample section to see how to make request with the list of products and the desired days.
```JS
npm run runDev

```



## Code Example
Once the server is running from any client you can make http to send a list of products and the days to simulate to the endpoint "http://localhost:3000/simulation" by POST, see the image below

In order to send a list of two products ('Medium Coverage' and 'Full Coverage') and a simulation of two days:
![Postman request sample](/assets/instructions/example_postman.JPG)

The json request:
```JSON
   {
    "products":[
        {
            "name":"Medium Coverage",
            "sellIn":10,
            "price":20
        },
        {
            "name":"Full Coverage",
            "sellIn":2,
            "price":0
        }
    ],
    "days":2
}
   ```


The response will be a json with the result in
```JSON
   {
    "result": {
        "title": "OMGHAI!",
        "products": [
            {
                "day": "",
                "name": "----day 0----",
                "sellIn": "",
                "price": ""
            },
            {
                "day": "0",
                "name": "Medium Coverage",
                "sellIn": "8",
                "price": "18"
            },
            {
                "day": "0",
                "name": "Full Coverage",
                "sellIn": "0",
                "price": "2"
            },
            {
                "day": "",
                "name": "----day 1----",
                "sellIn": "",
                "price": ""
            },
            {
                "day": "1",
                "name": "Medium Coverage",
                "sellIn": "9",
                "price": "19"
            },
            {
                "day": "1",
                "name": "Full Coverage",
                "sellIn": "1",
                "price": "1"
            },
            {
                "day": "",
                "name": "----day 2----",
                "sellIn": "",
                "price": ""
            },
            {
                "day": "2",
                "name": "Medium Coverage",
                "sellIn": "8",
                "price": "18"
            },
            {
                "day": "2",
                "name": "Full Coverage",
                "sellIn": "0",
                "price": "2"
            }
        ]
    },
    "raw-result": "OMGHAI!\r\n-------- day 0 --------\r\nname, sellIn, price\r\nMedium Coverage, 8, 18\r\nFull Coverage, 0, 2\r\n\r\n-------- day 1 --------\r\nname, sellIn, price\r\nMedium Coverage, 9, 19\r\nFull Coverage, 1, 1\r\n\r\n-------- day 2 --------\r\nname, sellIn, price\r\nMedium Coverage, 8, 18\r\nFull Coverage, 0, 2\r\n\r\n"
}
   ```



## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

To run the test and see the coverage use the script "test"
```JS
npm run test

```