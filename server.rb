require 'sinatra'

set :public_folder, proc{File.join(root)}
get '/' do
  headers 'Access-Control-Allow-Origin' => '*'
  Time.now.to_s
end
