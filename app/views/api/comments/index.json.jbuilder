@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.commentable_id comment.commentable_id
    json.commentable_type comment.commentable_type
    json.created_at json.created_at
  end
end
