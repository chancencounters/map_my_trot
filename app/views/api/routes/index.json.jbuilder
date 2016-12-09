@routes.each do |route|
  json.set! route.id do
    json.id route.id
    json.name route.name
    json.distance route.distance
    json.origin route.origin
    json.destination route.destination
    json.polyline route.polyline
    json.created_at route.created_at.strftime("%Y-%m-%d")
  end
end
