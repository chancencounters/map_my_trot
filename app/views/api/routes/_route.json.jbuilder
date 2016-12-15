json.id route.id
json.name route.name
json.distance route.distance
json.origin route.origin
json.destination route.destination
json.polyline route.polyline
json.bounds route.bounds
json.created_at route.created_at
json.set! :comments do
route.comments.each do |comment|
  json.set! comment.id do
    json.partial! 'api/comments/comment', comment: comment
    end
  end
end
