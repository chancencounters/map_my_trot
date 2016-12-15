@activities.each do |activity|
  json.set! activity.id do
    if activity.activatable_type == "Route"
      json.activatable_type activity.activatable_type
      json.extract! activity.activatable, :id, :name, :distance, :polyline
      json.set! :user do
        json.id activity.activatable.user.id
        json.name activity.activatable.user.first_name + " " + activity.activatable.user.last_name
        json.image_url asset_path(activity.activatable.user.avatar.url)
      end
    elsif activity.activatable_type == "Trot"
      json.activatable_type activity.activatable_type
      json.distance activity.activatable.route.distance
      json.polyline activity.activatable.route.polyline
      json.extract! activity.activatable, :id, :name
      json.set! :user do
        json.id activity.activatable.user.id
        json.name activity.activatable.user.first_name + " " + activity.activatable.user.last_name
        json.image_url asset_path(activity.activatable.user.avatar.url)
      end
    end
  end
end
