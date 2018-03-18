@activities.each do |activity|
  json.set! activity.id do
    if activity.activatable_type == "Route"
      route = activity.activatable
      json.id activity.id
      json.activatable_type activity.activatable_type
      json.created_at activity.created_at
      json.set! :route do
        json.partial! 'api/routes/route', route: route
      end
      json.set! :user do
        json.partial! 'api/users/user', user: route.user
      end
    elsif activity.activatable_type == "Trot"
      trot = activity.activatable
      json.id activity.id
      json.activatable_type activity.activatable_type
      json.distance trot.route.distance
      json.polyline trot.route.polyline
      json.created_at activity.created_at
      json.set! :trot do
        json.partial! 'api/trots/trot', trot: trot
      end
      json.set! :user do
        json.partial! 'api/users/user', user: trot.user
      end
    end
  end
end
