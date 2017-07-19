# -*- encoding : utf-8 -*-
require 'capistrano-rbenv'
load 'deploy/assets'
SSH_USER = 'root'
ssh_options[:port] = 35888
set :rake, "bundle exec rake"
set :application, "queen_town_web"
set :repository, "."
set :scm, :none
set :deploy_via, :copy
server = "vuetest.siwei.tech"

role :web, server
role :app, server
role :db,  server, :primary => true
role :db,  server

set :deploy_to, "/opt/app/test_vue_0613"
default_run_options[:pty] = true
set :copy_exclude, [".git", "node_modules", "src"]

# change to your username
set :user, SSH_USER

namespace :deploy do
  task :start do
    run "nginx"
  end
  task :stop do
    run "nginx -s stop"
  end
  task :restart, :roles => :app, :except => { :no_release => true } do
    stop
    sleep 2
    start
  end
  task :db_migrate do
  end

  namespace :assets do
    task :precompile do
      puts "======= should run precompile"
      #    puts "== please run == \n #{command} \n == manually after deploy is done"
      #run "bundle install"
      #run "cd #{release_path} && bundle exec rake RAILS_ENV=production RAILS_GROUPS=assets assets:precompile "
    end
  end
end


desc "编译vuejs"
task :build_vue do
  puts '== 清空 dist 文件夹'
  puts `rm -rf dist/*`
  puts "== 编译 vuejs:"
  puts `npm run build`
end

task :remove_redundant_files do
  puts "== 删掉远程无用的文件夹： log, public, tmp"
  run "cd #{release_path} && trash log public tmp REVISION"
end

before "deploy", :build_vue
after "deploy", :remove_redundant_files
