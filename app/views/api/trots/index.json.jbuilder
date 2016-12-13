@trots.each do |trot|
  json.set! trot.id do
    json.id trot.id
    json.name trot.name
    json.description trot.description
    json.date trot.date
    json.created_at trot.created_at.strftime("%Y-%m-%d")
    json.set! :route do
      json.id trot.route_id
      json.name trot.route.name
      json.distance trot.route.distance
      json.polyline trot.route.polyline
      json.origin trot.route.origin
      json.destination trot.route.destination
      json.bounds trot.route.bounds
    end
  end
end
