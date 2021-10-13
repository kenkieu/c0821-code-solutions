select "categories"."name",
  count("filmCategory"."categoryId") as "filmAppearances"
  from "categories"
  join "filmCategory" using ("categoryId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actorId" = 178
  group by "categories"."name";
