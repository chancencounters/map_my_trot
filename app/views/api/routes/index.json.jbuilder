@routes.each do |route|
  json.set! route.id do
    json.id route.id
    json.name route.name
    json.distance route.distance
    json.origin route.origin
    json.destination route.destination
    json.polyline route.polyline
    json.bounds route.bounds
    json.created_at route.created_at
    json.date route.created_at.strftime("%Y-%m-%d")
    json.set! :comments do
      route.comments.each do |comment|
        json.set! comment.id do
          json.id comment.id
          json.body comment.body
          json.commentable_id comment.commentable_id
          json.commentable_type comment.commentable_type
          json.created_at comment.created_at
          json.set! :user do
            json.id comment.user.id
            json.name "#{comment.user.first_name} #{comment.user.last_name}"
            json.image_url asset_path(comment.user.avatar.url)
          end
        end
      end
    end
  end
end
