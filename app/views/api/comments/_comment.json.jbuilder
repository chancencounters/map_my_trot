json.id comment.id
json.body comment.body
json.commentable_id comment.commentable_id
json.commentable_type comment.commentable_type
json.created_at comment.created_at
json.set! :author do
  json.id comment.user.id
  json.name "#{comment.user.first_name} #{comment.user.last_name}"
  json.image_url asset_path(comment.user.avatar.url)
end
