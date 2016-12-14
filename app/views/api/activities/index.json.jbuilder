@activities.each do |activity|
  json.set! activity.id do
    if activity.activatable_type == "Route"
      json.activatable_type activity.activatable_type
      json.extract! activity.activatable, :id, :name, :distance, :polyline
    elsif activity.activatable_type == "Trot"
      json.activatable_type activity.activatable_type
      json.distance activity.activatable.route.distance
      json.polyline activity.activatable.route.polyline
      json.extract! activity.activatable, :id, :name
    end
  end
end
