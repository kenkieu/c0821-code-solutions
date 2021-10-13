select "firstName",
      "lastName"
  from "customers"
  join "payments" using ("customerId")
  join "rentals" using ("rentalId")
  join  "inventory" using ("filmId")
  where "title" = 'Magic Mallrats'
