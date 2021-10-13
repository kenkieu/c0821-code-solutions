select "line1",
      "cities"."name" as "city",
      "district"
from "addresses"
join "cities" using ("cityId");
