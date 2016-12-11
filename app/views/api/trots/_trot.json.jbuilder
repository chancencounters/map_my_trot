json.id trot.id
json.route_id trot.route_id
json.name trot.name
json.description trot.description
json.date trot.date
json.duration trot.duration

json.set! :route do
  json.id trot.route_id
  json.name trot.route.name
  json.distance trot.route.distance
  json.origin trot.route.origin
  json.destination trot.route.destination
  json.polyline trot.route.polyline
  json.bounds trot.route.bounds
end
