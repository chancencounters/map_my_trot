json.id trot.id
json.route_id trot.route_id
json.name trot.name
json.description trot.description
json.date trot.date
json.duration trot.duration
json.created_at trot.created_at
json.set! :route do
  json.partial! 'api/routes/route', route: trot.route
end
