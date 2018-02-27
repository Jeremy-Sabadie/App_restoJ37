Rails.application.routes.draw do
  get 'landing/home'

  root 'clean_blogs#index'
  
  get  'about' 	=> 'clean_blogs#about'
  
  get  'post' 	=> 'clean_blogs#post'
  
  get  'contact' 	=> 'clean_blogs#contact'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
