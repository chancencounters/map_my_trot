@routes.each do |route|
  json.set! route.id do
    json.extract! route, :id, :name, :distance, :map_info
  end
end
